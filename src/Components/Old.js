import {Card, Container, Row, Col, Image} from 'react-bootstrap';

import sepakbola from '../assets/Old/sepakbola.jpeg';
import bulutangkis from '../assets/Old/bulutangkis.jpeg';

import sepakbolaIcon from '../assets/Old/sepakbola.svg';
import bulutangkisIcon from '../assets/Old/bulutangkis.svg';

const OldNews = () => {
    return (
        <div className='intro-old'>
            <div id='old' className='text-center mt-5 mb-5'>Berita Ter-Lama</div>
            <Container className='d-flex justify-content-around align-items-center'>
                <Row className='p-1 col-md-5'>
                    <Col>
                        <div className='boxCol'>
                            <Card className='text-white bg-secondary'>
                                <Image src={sepakbolaIcon} className='d-flex justify-content-start align-items-start col-2 border-l1'/>
                                <Card.Title className='text-center'>Sejarah Sepakbola</Card.Title>
                                <Card.Header className='text-center'>
                                    <Image src={sepakbola} alt=''/>
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
                                <Image src={bulutangkisIcon} className='d-flex justify-content-start align-items-start col-2 border-l2'/>
                                <Card.Title className='text-center'>Sejarah Bulu Tangkis</Card.Title>
                                <Card.Header className='text-center'>
                                    <Image src={bulutangkis} alt='' />
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

export default OldNews;