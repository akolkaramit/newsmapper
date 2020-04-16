import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeNewsType, fetchNews } from '../Redux/actions.js';
import './News.css';

class News extends Component {
	// constructor(props){
	// 	super(props);
	// }

	render(){
		// {type: 'country', newstype: this.props.ntype, country: edata.value}
		// let countryVal = 
		// {type: this.props.CountryOrChType, newstype: this.props.ntype, newspaper: edata}

		let objFinal = this.props.CountryOrChType == 'newspaper' ? {type: this.props.CountryOrChType, newspaper: this.props.CountryOrChValue} : {type: this.props.CountryOrChType, country: this.props.CountryOrChValue}

		return(
			<div id='app-news-wrapper'>
				<div className='app-news'>
					<div className='row'>
						<div className='col-lg-12'>
							<h3 id='app-news-title'>NewsMapper (Designed by - Amit)</h3>
						</div>
						<div className='col-lg-12'>
							<div className='app-news-selected-wrapper'>
								<div className='app-news-selected-type'>
									<span onClick={()=>this.props.onPtypeClick(objFinal, 'top-headlines')} className={this.props.ntype == 'top-headlines' ? 'app-news-selected-type1 app-news-selected' : 'app-news-selected-type1'}>Top news</span>
									{
										this.props.CountryOrChType == 'newspaper' ? 
											<span onClick={()=>this.props.onPtypeClick(objFinal, 'everything')} className={this.props.ntype == 'everything' ? 'app-news-selected-type2 app-news-selected' : 'app-news-selected-type2'}>All News</span>
											:
											null
									}
								</div>
								{
									this.props.CountryOrChValue ? 
										<div className='app-news-selected-cn'>
											<div className='app-news-selected-cn1'>
												<span className='country-icon-wrapper'>
													<img alt='image_news_country' src={this.props.CountryOrChValue.img} className='country-icon' />
												</span>
												{this.props.CountryOrChValue.title + ` (${this.props.CountryOrChValue.value})`}
											</div>
										</div>
										:
										null
									
								}
									{/**<div className='app-news-selected-cn2'>
																			<span className='newspaper-icon-wrapper'>
																				<img alt='image_newspaper' src='https://icon-locator.herokuapp.com/icon?url=http://www.abc.net.au/news&size=70..120..200' className='newspaper-icon' />
																			</span>
																			ABC News (AU)
																		</div>**/}
							</div>
						</div>

						<div className='col-lg-12'>
							{this.props.loading ? <div className='news-loading'>Loading</div> : null}
						</div>
						{	this.props.allNewsData ? 
							this.props.allNewsData.map((data, index)=>{
								return(
									<div key={index} className='col-lg-12'>
										<div className='newsL-block'>
											<div className='newsL-block-img'>
												<img alt='image_news' src={data.urlToImage} className='newsL-img' />
											</div>
											<div className='newsL-block-desc'>
												<span className='news-heading-title'>{data.title}</span>
												{data.content}
												<a href={data.url} target='_blank' className='news-main-source'>Read More at {data.source.name}...</a>
											</div>
										</div>
									</div>
								);
							})
							:
							null
						}
					</div>
				</div>
			</div>
		);
	}
}





const mapStateToProps = (state) => ({
	ntype: state.newsType ? state.newsType : 'top-headlines',
	allNewsData: state.allNewsData,
	loading: state.loading,
	CountryOrChValue: state.CountryOrChValue,
	CountryOrChType: state.CountryOrChType
});

const mapDispatchToProps = (dispatch) => ({
  	onPtypeClick: (data, typeTxt) => {
  		// console.log("ownProps: ",data);
  		// newstype: 'top-headlines'
  		data.newstype = typeTxt;
  		// {type: 'newspaper', newstype: this.props.ntype, newspaper: edata}
     	dispatch(fetchNews(data));
	}
});

export default connect(mapStateToProps,mapDispatchToProps)(News)
// export default News;


// export default News;

