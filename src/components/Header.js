import React from 'react';
import Navigation from './Navigation';

const styles = {
    headerStyle: {
        background: '#5F5B6B',
    }
};

function Header() {
    return (
        <header style={styles.headerStyle} >
            <h1> Zachry Jorgensen </h1>
            <Navigation />
        </header>
    )
}

export default Header;