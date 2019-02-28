import React, { Component } from 'react';
import './Newspapers.css';
import Newspaper from './Newspaper.js';
import { newsList } from '../Data/newspapers.js';
import { fetchNews } from '../Redux/actions.js';
import { connect } from 'react-redux';

class Newspapers extends Component {
	constructor(props){
		super(props)
		this.state = {
			newspapers: newsList,
			selectedNespaper: '',
			filteredNewsPapers: newsList
		}
		this.searchNewspaper = this.searchNewspaper.bind(this);
	}

	searchNewspaper = (e)=>{
		let newsp = this.state.newspapers;
		let searchTerm = e.target.value;
		let filterVal = newsp.filter((edata)=> (edata.title.toLowerCase()).indexOf(searchTerm.toLowerCase()) > -1);

		this.setState({
			filteredNewsPapers: filterVal,
			selectedNespaper: searchTerm,
		})
	}

	ntypeNews = (edata)=>{
		console.log("edata :",edata);
		this.props.onCtypeClick({type: 'newspaper', newstype: this.props.ntype, newspaper: edata})
	}

	render(){
		return(
			<div id='app-newspapers-wrapper'>
				<div className='app-newspapers'>
					<div className='row'>
						<div className='col-lg-12'>
							<input value={this.state.selectedNespaper} onChange={this.searchNewspaper} type='text' placeholder='Search News source...' className='form-control' id='search-newspaper-input' />
						</div>
						{
							this.state.filteredNewsPapers.map((data, index)=>{
								return(
									<div key={index} className='col-lg-12'>
										<Newspaper ntypeNews={()=>this.ntypeNews.bind(this, data)}  newspaper={data} />
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

// export default Newspapers;


const mapStateToProps = (state) => ({ntype: state.newsType});

const mapDispatchToProps = (dispatch) => ({
  	onCtypeClick: (data) => {
  		// console.log("ownProps: ",data);
     	dispatch(fetchNews(data));
	}
});

export default connect(mapStateToProps,mapDispatchToProps)(Newspapers)