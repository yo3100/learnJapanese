import { Container, Col, Row } from 'reactstrap';
import tokyo from '../app/assets/img/tokyo.jpg';
import mountfuji from '../app/assets/img/mountfuji.jpg';
import tokyotower from '../app/assets/img/tokyotower.jpg';




const HomePage = () => {
    return (
        <Container>
            <Col>
                <h3>
                    Come learn Japanese. Easy and affortable courses!
                </h3>
                <p className='homePage'>
                    Learn japanese through course videos and live sessions at an affordable price!
                </p>
            </Col>
            <Row>
                <Col sm='2' style={{ width: '27rem', height: '25rem' }}>
                        <img
                            src={tokyo}
                            alt='tokyo'
                            style={{ width: '100%', height: '100%' }}
                        />
                </Col>
                <Col sm='2' style={{ width: '27rem', height: '25rem' }}>
                    <img
                        src={mountfuji}
                        alt='mountfuji'
                        style={{ width: '100%', height: '100%' }}
                    />
                </Col>
                <Col sm='2' style={{ width: '27rem', height: '25rem' }}>
                        <img
                            src={tokyotower}
                            alt='tokyotower'
                            style={{ width: '100%', height: '100%' }}
                        />
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;