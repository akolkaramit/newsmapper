import React, { Component } from 'react';
import './Location.css';
import Country from './Country.js';
import { newsCountries } from '../Data/countries.js';
import { fetchNews } from '../Redux/actions.js';
import { connect } from 'react-redux';

class Location extends Component {
	constructor(props){
		super(props)
		this.state = {
			country: newsCountries,
			selectedCountry: '',
			filteredCountry: newsCountries
		}
		this.searchCountry = this.searchCountry.bind(this);
		// this.countryNews = this.countryNews.bind(this);
	}


	searchCountry = (e)=>{
		let countryp = this.state.country;
		let searchTerm = e.target.value;
		let filterVal = countryp.filter((edata)=> (edata.title.toLowerCase()).indexOf(searchTerm.toLowerCase()) > -1);

		this.setState({
			filteredCountry: filterVal,
			selectedCountry: searchTerm,
		})
	}

	countryNews = (edata)=>{
		console.log("edata :",edata);
		this.props.onCtypeClick({type: 'country', newstype: this.props.ntype, country: edata})
	}

	render(){
		return(
			<div id='app-location-wrapper'>
				<div className='app-location'>
					<div className='row'>
						<div className='col-lg-12'>
							<input value={this.state.selectedCountry} onChange={this.searchCountry} type='text' placeholder='Search country...' className='form-control' id='search-country-input' />
						</div>
						{
							this.state.filteredCountry.map((data, index)=>{
								return(
									<div key={index} className='col-lg-12'>
										<Country countryNews={()=>this.countryNews.bind(this, data)} country={data} />
									</div>
								);
							})
						}
					</div>
				</div>
			</div>
		);
	}
}

// export default Location;


const mapStateToProps = (state) => ({ntype: state.newsType});

const mapDispatchToProps = (dispatch) => ({
  	onCtypeClick: (data) => {
  		// console.log("ownProps: ",data);
     	dispatch(fetchNews(data));
	}
});

export default connect(mapStateToProps,mapDispatchToProps)(Location)