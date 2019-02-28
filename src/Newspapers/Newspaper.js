import React from 'react';
import './Newspapers.css';

const Newspaper = (props)=>{
	return(
		<div onClick={props.ntypeNews()} data-value={props.newspaper.value} className='newspapers-name'>
			<span className='newspaper-icon-wrapper'>
				<img alt='image_newspaper' src={props.newspaper.img} className='newspaper-icon' />
			</span>
			{props.newspaper.title}
		</div>
	)
}

export default Newspaper;