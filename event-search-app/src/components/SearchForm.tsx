import { Card, Form,Col,Row, Container, FormGroup,Button } from "react-bootstrap";
import "./SearchForm.css";
import Spinner from 'react-bootstrap/Spinner';
import React, { useEffect, useState, useRef} from 'react';
import { CONSTRAINTS } from "../constraints/constraints";
import ResultTable from "./ResultTable";
export function SearchForm(){
    const [isChecked, setCheckBox]=useState(false);
    const [location, setLocation]=useState('');
    const [lat,setLat]=useState('');
    const [lng,setLng]=useState('');
    const [keyword, setKeyword]=useState('');
    const [distance,setDistance]=useState('10');
    const [category,setCategory]=useState('Default');
    const [suggestions,setSuggestions]=useState<string[]>([]);
    const [selectedSuggestion, setSelectedSuggestion]=useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showSuggestions,setShowSuggestions] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const suggestionsRef=useRef<HTMLUListElement>(null);
    const [items,setItems]=useState([]);

    useEffect(()=>{
        const handleClickOutside = (event:MouseEvent)=>{
            if(suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)){
                setShowSuggestions(false);
            }
        };
        document.addEventListener('click',handleClickOutside);
        return ()=>{
            document.removeEventListener('click',handleClickOutside);
        };
    },[]);
    
    useEffect(()=>{
        const fetchSuggestions= async ()=>{
            try{
                setIsLoading(true);
                const response=await fetch(`${CONSTRAINTS.SERVER_BASE_URL}/autocomplete/${keyword}`);
                const data=await response.json();
                setSuggestions(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching suggestions", error);
            }
        };
        if(keyword && keyword != selectedSuggestion){
            fetchSuggestions();
        }
        else {
            setSuggestions([]);
        }
    },[keyword,selectedSuggestion]);

    const handleSuggestionClick= (suggestion: string)=>{
        setKeyword(suggestion);
        setSelectedSuggestion(suggestion);
        setSuggestions([]);
    };

    const  handleCheckBoxChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setCheckBox(event.target.checked);
        setLocation(event.target.checked? '':location);
    };

    const handleLocationChange=(event:React.ChangeEvent<HTMLInputElement>) =>{
        setLocation(event.target.value);
    } 

    const handleKeywordChange=(event:React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
        setShowSuggestions(true);
    }

    const handleDistanceChange=(event:React.ChangeEvent<HTMLInputElement>) => {
        setDistance(event.target.value);
    }

    const handleCategoryChange=(event:React.ChangeEvent<HTMLInputElement>) => {
        setCategory(event.target.value);
    }

    const getSearchResult = async ()=>{
        const response=await fetch(`${CONSTRAINTS.SERVER_BASE_URL}/search/${keyword}/${category}/${distance}/${lat}/${lng}`);
        const res= await response.json();
        const dataList=res.data;
        setItems(dataList);
        setShowResult(true);
    }

    const handleSubmit= async (event:React.FormEvent)=>{
        event.preventDefault();
        try {
            if (isChecked){
                const response = await fetch(`${CONSTRAINTS.IPINFO_BASE_URL}token=${CONSTRAINTS.IPINFO_TOKEN}`);
                const data=await response.json();
                const loc=data['loc'].split(',');
                setLat(loc[0]);
                setLng(loc[1]);
                console.log("Lat",lat);
                console.log("Lng",lng);
                getSearchResult();
                
            }
            else{
                const response = await fetch(`${CONSTRAINTS.GOOGLE_BASE_URL}address=${location}&key=${CONSTRAINTS.GOOGLE_TOKEN}`);
                const data= await response.json();
                setLat(data.results[0].geometry.location.lat);
                setLng(data.results[0].geometry.location.lng);
                console.log("Lat",lat);
                console.log("Lng",lng);
                getSearchResult();  
            }

        } catch(error){
            console.error("Error fetching lng and lat", error);
        }
        
    }

    const handleClear=()=>{
        setKeyword("");
        setDistance("10");
        setCategory("Default");
        setCheckBox(false);
        setLocation("");
        setShowResult(false);
    }

    return (
        <>
        <Container>
            <Row className="justify-content-center">
                <Col sm={12} md={5}>
                <Card className="card mt-5 mx-auto">
                    <Card.Body>
                        <Card.Title className="card-title pt-4">
                            Events Search
                        </Card.Title>
                        <Form className="mb-4" onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="keyword">
                                    <Form.Label>Keyword<span style={{color:"red"}}>*</span></Form.Label>
                                    <Form.Control type="text" required value={keyword} onChange={handleKeywordChange}></Form.Control>
                                    {isLoading? (
                                        <div style={{backgroundColor:'white'}}>
                                            <Spinner animation="border" role="status" style={{color: '#35579D',margin:'10px',height:'1.5rem',width:'1.5rem',borderWidth:'2px'}}> </Spinner>
                                        </div>
                                                ):(
                                    suggestions.length > 0 && showSuggestions && (
                                        <ul className="autocomplete-ul" ref={suggestionsRef}>
                                            {suggestions.map((suggestion,index)=>(
                                                <li className="autocomplete-li" key={index} onClick={()=>handleSuggestionClick(suggestion)}>
                                                    {suggestion}
                                                </li>
                                            ))}
                                        </ul>
                                    ))}
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group controlId="distance">
                                        <Form.Label>Distance</Form.Label>
                                        <Form.Control type="number" placeholder="10" value={distance} onChange={handleDistanceChange}></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                    <Form.Group controlId="category">
                                        <Form.Label>Category<span style={{color:'red'}}>*</span></Form.Label>
                                        <Form.Control as="select" className="custom-select" value={category} onChange={handleCategoryChange}>
                                            <option>Default</option>
                                            <option>Music</option>
                                            <option>Sports</option>
                                            <option>Arts &amp; Theatre</option>
                                            <option>Film</option>
                                            <option>Miscellaneous</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="location">
                                    <Form.Label>Location<span style={{color:"red"}}>*</span></Form.Label>
                                    <Form.Control type="text" disabled={isChecked} value={location} required onChange={handleLocationChange}></Form.Control>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <FormGroup controlId="auto">
                                    <Form.Check type="checkbox" checked={isChecked} onChange={handleCheckBoxChange} label="Auto-detect your location"></Form.Check>
                                </FormGroup>
                            </Row>
                            <div className="mb-3 d-flex justify-content-center">
                                <div className="mx-2"> 
                                    <Button type="submit" variant="danger" className="mr-2">SUBMIT</Button>
                                </div>
                                <div className="mx-2">
                                    <Button type="reset" variant="primary" className="ml-2" onClick={handleClear}>CLEAR</Button>
                                </div>   
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            {showResult && 
            <ResultTable 
                items={items}
            />}
            </Container>
        </>
    );
}