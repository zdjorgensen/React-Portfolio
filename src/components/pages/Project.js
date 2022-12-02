import React from 'react';
import { Container, Row, Col } from 'react-grid-system';


const styles = {
    h1Style: {
        display: 'flex',
        padding: '100px',
        color: '#323031',
        fontSize: '35px'

    },
    rowStyle: {
        height: '100px',
    },
    imgStyle: {
        height: '300px',
        width: '400px',
        borderStyle: 'solid',
        borderColor: '#5F5B6B',
        maxWidth: '100%',
        backgroundSize: 'contain'
    },
    testimgStyle: {
        height: '300px',
        width: '400px',
        borderStyle: 'solid',
        borderColor: '#5F5B6B',
        maxWidth: '100%',
    },
};

function Project() {
    return (
        <div >
            <h1 style={styles.h1Style}> Portfolio </h1>
            <Container>
                <Row style={styles.rowStyle}>
                    <Col md={4}>
                        <p> Trail Meida </p>
                        <a href="https://github.com/bckstrb/trail-media" target="blank">
                            <img style={styles.imgStyle} src={require("../../img/trail-media.png")} alt="Trail Media" />
                        </a>
                    </Col>
                    <Col md={4}>
                        <p> My Fitness Zone </p>
                        <a href="https://github.com/jonathonvanausdal9915/myfitnesszone" target="blank">
                            <img style={styles.imgStyle} src={require("../../img/myfitnesszone.png.png")} alt="My Fitness Zone" />
                        </a>
                    </Col>
                    <Col md={4}>
                        <p> Covid Travling Guide </p>
                        <a href="https://github.com/mountaindriver/super-team-project" target="blank">
                            <img style={styles.imgStyle} src={require("../../img/Project-1-Screenshot.png")} alt="Covid Travling Guide" />
                        </a>
                    </Col>
                    <Col md={4}>
                        <p> Weather Dashboard </p>
                        <a href="https://github.com/zdjorgensen/Weather-Dashboard" target="blank">
                            <img style={styles.imgStyle} src={require("../../img/Weather-dashboard-screenshot.png")} alt="Weather Dashboard" />
                        </a>
                    </Col>
                    <Col md={4}>
                        <p> Just Another Text Editor PWA </p>
                        <a href="https://github.com/zdjorgensen/Text-Editor" target="blank">
                            <img style={styles.imgStyle} src={require("../../img/Just-another-text-editor-screenshot.png")} alt="Just Another Text Editor PWA" />
                        </a>
                    </Col>
                    <Col md={4}>
                        <p> Note Taker </p>
                        <a href="https://github.com/zdjorgensen/Note-Taker" target="blank">
                            <img style={styles.imgStyle} src={require("../../img/NoteTakerHome.png")} alt="Note Taker" />
                        </a>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Project;