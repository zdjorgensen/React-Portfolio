import React from 'react';

const styles = {
    navigationStyle: {
        background: '#5F5B6B',
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: '5px',
    },
    linkStyle: {

    }
};

function Navigation({ currentPage, handlePageChange }) {
    return (
        <div>
            <nav style={styles.navigationStyle}>
                <ul>
                    <li>
                        <a href="#about" onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'link active' : 'link'}
                        >
                            About
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#project" onClick={() => handlePageChange('Project')}
                        className={currentPage === 'Project' ? 'link active' : 'link'}
                        >
                            Project
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#Contact" onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'link active' : 'link'}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#resume" onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'link active' : 'link'}
                        >
                            Resume
                        </a>
                    </li>
                </ul>
                
            </nav>
        </div>
    );
}

export default Navigation;