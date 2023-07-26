import React from 'react'
import Navbar from './Navbar';
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div className="Homeapp">
          <Navbar/>
      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1 className='text-dark'>Welcome to Ambula Carriers</h1>
            <p className='fs-5'>we are deeply committed to the belief that every person deserves access to high-quality healthcare services.</p>
            <div>
            <div className="button-links">
              <Link to="/TodoList" className="btn-link">TodoList</Link>
              <Link to="/ShoppingCart" className="btn-link">ShoppingCart</Link>
              <Link to="/Weather" className="btn-link">Weather App</Link>
            </div>
    </div>
          </div>
        </section>
        
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Hospital Name. All rights reserved.</p>
      </footer>
    </div>
  );
}


export default Home
