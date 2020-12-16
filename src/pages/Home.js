import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="homeHeader">
        <h1>Theme Park Database</h1>
      </div>
      <Link to={ `/attractions/` } >See All Attractions</Link>
      <Link to={ `/creatives/` } >See All Creatives</Link>
      <Link to={ `/themeparks/` } >See All Theme Parks</Link>
    </div>
  );
}

export default Home;
