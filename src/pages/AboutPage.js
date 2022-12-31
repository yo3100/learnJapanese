import { Col, Row, Container } from 'reactstrap';


const AboutPage = () => {
    return (
        <Container>
            <Row className = 'row-content'>
                <Col sm='6'>
                    <h2>Our Mission</h2>
                    <p className='aboutPage'>
                        Our mission is to provide easy and affortable access to to learning Japanese. 
                        Here we have short videos and Live sessions that is affortable to anyone.
                        We hope that you will join us in learning this beautiful language.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutPage;