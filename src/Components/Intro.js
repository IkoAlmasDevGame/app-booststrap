import {Col, Row, Container} from 'react-bootstrap';

const Intro = () => {
    return (
        <div className='intro'>
          <Container className="text-white d-flex justify-content-center align-items-center mt-3">
            <Row>
              <Col>
                <div className="title">My Information</div>
              </Col>
            </Row>
          </Container>
        </div>  
    );
}

export default Intro;