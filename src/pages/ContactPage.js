import { Container, Col, Row } from 'reactstrap';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    return (
        <Container>
                <Row className='row-content align-items-center'>
                    <Col sm='4'>
                        <h5>Our Address</h5>
                        <address>
                            1 something
                            <br />
                            tokyo 
                            <br />
                            Japan
                        </address>
                    </Col>
                    <Col>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+999999999'
                        >
                            <i className='fa fa-phone' /> 1-999-999-9999
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:fakeemail@fakeemail.co'
                        >
                            <i className='fa fa-envelope-o' /> learnjapanese@gmail.com
                        </a>
                    </Col>
                </Row>
                <Row className='row-content'>
                    <Col xs='12'>
                        <h2>Send Us Your Feedback</h2>
                        <hr/>
                    </Col>
                    <Col md='10'>
                        <ContactForm />
                    </Col>
                </Row>
        </Container>
    );
};

export default ContactPage;