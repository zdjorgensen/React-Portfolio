import React, { useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Resume from './pages/Resume';

const styles = {
    imgStyle: {
        height: '400px',
        width: '100%',
        borderBottom: 'solid',
        borderColor: '#5F5B6B'
    }
}

export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if(currentPage === 'About') {
            return <About />;
        }
        if(currentPage === 'Contact') {
            return <Contact />;
        }
        if(currentPage === 'Projects') {
            return <Project />;
        }
        if(currentPage === 'Resume') {
            return <Resume />;
        }
        
    };
    
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header />
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            <img style={styles.imgStyle} src={require('../img/forst-drawing.jpg')} alt="Drawing of a forest"/>
            <Footer />
            {renderPage()}
        </div>
    );
}