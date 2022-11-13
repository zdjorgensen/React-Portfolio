import React from 'react';

const styles = {
    footerStyle: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        bottom: -700,
        width: '100%',
        background: '#323031',
        justifyContent: 'center',
        padding: '25px',
        fontSize: '20px',
        height: '80px'
    },
};

function Footer() {
    return (
        <footer style={styles.footerStyle}>
            <a href="https://github.com/zdjorgensen" target="blank"> GitHub </a>
            <a href="https://www.linkedin.com/in/zachry-jorgensen-23b33a20b/" target="blank"> Linkedin </a>
            <a href="https://twitter.com/Trydent97" target="blank"> Twitter </a>
            
        </footer>
    )
}
export default Footer;