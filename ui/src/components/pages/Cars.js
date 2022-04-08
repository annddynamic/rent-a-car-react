import { Container, Row, Col, Form, Button} from "react-bootstrap";

const Cars = () => {
  return (
    <div>
      <Container className="mt-5">
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="Enter City" />
            </Col>
            <Col>
              <Form.Group controlId="dob">
                <Form.Control
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="dob">
                <Form.Control
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                />
              </Form.Group>
            </Col>
            <Col>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>

    
  );
};

export default Cars;
