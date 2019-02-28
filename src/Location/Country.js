import React from 'react';
import './Location.css';

const Country = (props)=>{
	return(
		<div onClick={props.countryNews()} data-country={props.country.value} className='country-name'>
			<span className='country-icon-wrapper'>
				<img alt='image_news_country' src={props.country.img} className='country-icon' />
			</span>
			{props.country.title}
		</div>
	)
}

export default Country;