import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar'
interface LayoutProps {

}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <>
       <Navbar />
      
        <main>
        {children}
        </main> 
       <Footer/>
      </>
    );
}
export default Layout
