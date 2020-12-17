import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="homeHeader">
        <h1>Theme Park Database</h1>
      </div>
      <div className="welcomeMessage">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dolorum impedit asperiores quia distinctio sint, dicta, quo aperiam eveniet harum in? Dolor at est iusto. Incidunt, ut sequi! Repellendus, soluta!</p>
      </div>
      <div>
        <h4> Browse our Database </h4>
        <div className="homeButtonContainer">
        <Link to={ `/attractions/` } className="homeButton" > Attractions </Link>
        <Link to={ `/creatives/` } className="homeButton"> Creatives </Link>
        <Link to={ `/themeparks/` } className="homeButton"> Theme Parks </Link>
        </div>
      </div>
      <div className="about">
        <h4>About Us</h4>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, fugiat in. Ab saepe maiores eum in quisquam nihil optio ipsam dignissimos ullam, iure praesentium deleniti cumque quia sequi odit dolore?</p>
      </div>
    </div>
  );
}

export default Home;
