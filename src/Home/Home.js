import React, { Component } from 'react';
import Location from '../Location/Location.js';
import Newspapers from '../Newspapers/Newspapers.js';
import News from '../News/News.js';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="app-body">
      	<div className="row">
      		<div className="col-lg-2">
      			<div className='app-country-wrapper'>
      				<Location />
      			</div>
      		</div>
      		<div className="col-lg-2">
      			<div className='app-newssource-wrapper'>
      				<Newspapers />
      			</div>
      		</div>
      		<div className="col-lg-8">
      			<div className='app-news-wrapper'>
      				<News />
      			</div>
      		</div>
      	</div>
      </div>
    );
  }
}

export default Home;
