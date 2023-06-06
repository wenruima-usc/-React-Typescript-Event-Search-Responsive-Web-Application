import { Card, Form,Col,Row, Container, FormGroup,Button } from "react-bootstrap";
import "./SearchForm.css";
import React, { useState } from 'react';
export function SearchForm(){
    const [isChecked, setCheckBox]=useState(false);
    const [location, setLocation]=useState('');
    const [keyword, setKeyword]=useState('');
    const [distance,setDistance]=useState('10');
    const [category,setCategory]=useState('Default');

    const  handleCheckBoxChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setCheckBox(event.target.checked);
        setLocation(event.target.checked? '':location);
    };

    const handleLocationChange=(event:React.ChangeEvent<HTMLInputElement>) =>{
        setLocation(event.target.value);
    } 

    const handleKeywordChange=(event:React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
    }

    const handleDistanceChange=(event:React.ChangeEvent<HTMLInputElement>) => {
        setDistance(event.target.value);
    }

    const handleCategoryChange=(event:React.ChangeEvent<HTMLInputElement>) => {
        setCategory(event.target.value);
    }

    const handleSubmit=(event:React.FormEvent)=>{
        event.preventDefault();
        console.log("Keyword",keyword);
        console.log("Distance",distance);
        console.log("Cat",category);
        console.log("Location",location);
        
    }

    const handleClear=()=>{
        setKeyword("");
        setDistance("10");
        setCategory("Default");
        setCheckBox(false);
        setLocation("");
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
            </Container>
        </>
    );
}