import {Card, Container, Row, Col, Image} from 'react-bootstrap';

import EraSmartphone from '../assets/Latest/era-smartphone.jpeg';
import EraKomputer from '../assets/Latest/era-komputer.jpeg';

import EraSmartphoneIcon from '../assets/Latest/era-smartphone.svg';
import EraKomputerIcon from '../assets/Latest/era-komputer.svg';

const LatestNews = () => {
    return (
        <div className='intro-latest'>
            <div id='latest' className='text-center mt-5 mb-5'>Berita Ter-Update</div>
            <Container className='d-flex justify-content-around align-items-center'>
                <Row className='p-1 col-md-5'>
                    <Col>
                        <div className='boxCol'>
                            <Card className='text-white bg-secondary'>
                                <Image src={EraSmartphoneIcon} className='d-flex justify-content-start align-items-start col-2 border-u1'/>
                                <Card.Title className='text-center'>Sejarah Smartphone</Card.Title>
                                <Card.Header className='text-center'>
                                    <Image src={EraSmartphone} alt='sejarah smartphone'/>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text></Card.Text>
                                    <Card.Text>
                                    </Card.Text>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row className='p-1 col-md-5'>
                    <Col>
                        <div className='boxCol'>
                            <Card className='text-white bg-secondary'>
                                <Image src={EraKomputerIcon} className='d-flex justify-content-start align-items-start col-2 border-u2'/>
                                <Card.Title className='text-center'>Sejarah Komputer</Card.Title>
                                <Card.Header className='text-center'>
                                    <Image src={EraKomputer} alt='sejarah komputer' />
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>

                                    </Card.Text>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
        </Container>
    </div>
    );
}

export default LatestNews;