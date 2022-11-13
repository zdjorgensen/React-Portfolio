import React from 'react';

const styles = {
    navigationStyle: {
        background: '#323031',
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: '5px',
        fontSize: '20px',
    },
};

function Navigation({ currentPage, handlePageChange }) {
    return (
        <nav style={styles.navigationStyle}>
            <ul>
                <li>
                    <a href="#about" onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'link active' : 'link'}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a href="#projects" onClick={() => handlePageChange('Projects')}
                        className={currentPage === 'Projects' ? 'link active' : 'link'}
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#Contact" onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'link active' : 'link'}
                    >
                        Contact
                    </a>
                </li>
                <li>
                    <a href="#resume" onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'link active' : 'link'}
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;