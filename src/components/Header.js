import React from 'react';

const styles = {
    headerStyle: {
        background: '#323031',
        padding: '10px ',
        fontSize: '20px',
    }
};

function Header() {
    return (
        <header style={styles.headerStyle} >
            <h1> Zachry Jorgensen </h1>
        </header>
    )
}

export default Header;