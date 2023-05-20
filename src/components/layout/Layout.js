import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

function Layout({ children }) {
  const isHeaderVisible = !['/login', '/register', '/about', '/contact-us'].includes(window.location.pathname);
  const isSidebarVisible = isHeaderVisible;

  return (
    <>
      {isHeaderVisible && <Header />}
      <div className='container-md mt-4'>
        <div className="row g-3">
          {isSidebarVisible && (
            <div className='col-md-3 d-none d-md-block'>
              <Sidebar />
            </div>
          )}
          <div className='col-12 col-md-9'>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
