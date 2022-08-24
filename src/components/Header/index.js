import React, { useState } from 'react';
import Navigation from '../Navigation';


function Header() {

    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <>
        <header>
            <h1>
                <a href="/portfolio">
                </a>
            </h1>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}></Navigation>
        </header>
        <main>
        {renderPage()}
        </main>
        </>
    );
}

export default Header;