import { Card, Form,Col,Row, Container } from "react-bootstrap";
import "./SearchForm.css";
export function SearchForm(){
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
                        <Form className="mb-4">
                            <Row>
                                <Form.Group as={Col} controlId="keyword">
                                    <Form.Label>Keyword<span style={{color:"red"}}>*</span></Form.Label>
                                    <Form.Control type="text" required></Form.Control>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Group controlId="distance">
                                        <Form.Label>Distance</Form.Label>
                                        <Form.Control type="number" placeholder="10"></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                    <Form.Group controlId="category">
                                        <Form.Label>Category<span style={{color:'red'}}>*</span></Form.Label>
                                        <Form.Control as="select" className="custom-select">
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
                        </Form>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            </Container>
        </>
    );
}