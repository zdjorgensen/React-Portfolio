import React from 'react';

const styles = {
    navigationStyle: {
        // background: '#5F5B6B',
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: '5px',
    },
    linkStyle: {

    }
};

function Navigation() {
    return (
        <div>
            <nav style={styles.navigationStyle}>
                <a href="#about"> About Me </a>
                <a href="#project"> Project </a>
                <a href="#contact"> Contact Me </a>
                <a href="#resume"> Resume </a>
            </nav>
        </div>
    )
}
export default Navigation;