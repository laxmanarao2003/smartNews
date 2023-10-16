/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';
import $ from 'jquery'

import React, { Component } from 'react'
import HomePage from './HomePage';
import ApplePage from './ApplePage';
import TeslaPage from './TeslaPage';
import BusinessPage from './BusinessPage';
import HeadlinesPage from './HeadlinesPage';
import ArticlesPage from './ArticlesPage';

class App extends Component {

	constructor(props) {
		super(props)
		
		this.state = {
			home:1,
			articles:0,
			apple:0,
			tesla:0,
			business:0,
			headlines:0
		}
	}

	componentDidMount(){

		$("#navigate-top").removeClass('d-flex')
		$("#navigate-top").css({display:"none"});

		/* hiding navigate to top(HOME Navigator) when scrollTop<290*/
		window.addEventListener("scroll",()=>{
			const scrollHeight=document.documentElement.scrollTop
		
			if(scrollHeight>290){
				$("#navigate-top").css({display:"block"});
				$("#navigate-top").addClass('d-flex')
			}
			else{
				$("#navigate-top").removeClass('d-flex')
				$("#navigate-top").css({display:"none"});
			}
		});

	}
	
  	render() {
		// call the component based on the current state :)
		const displayContentUsingState=()=>{
			if(this.state.home)
				return <HomePage/>
			if(this.state.articles)
				return <ArticlesPage/>
			else if(this.state.apple)
				return <ApplePage/>
			else if(this.state.tesla)
				return <TeslaPage/>
			else if(this.state.business)
				return <BusinessPage/>
			else if(this.state.headlines)
				return <HeadlinesPage/>
		}
		const displayContent=(e)=>{

			// console.log(e.target.getAttribute('id'));

			// get the id of the clicked element :)
			const eleId=e.target.getAttribute('id')

			switch(eleId){
				case 'home':
					this.setState({home:1})
					this.setState({articles:0})
					this.setState({apple:0})
					this.setState({tesla:0})
					this.setState({business:0})
					this.setState({headlines:0})
					break;
				case 'articles':
					this.setState({home:0})
					this.setState({articles:1})
					this.setState({apple:0})
					this.setState({tesla:0})
					this.setState({business:0})
					this.setState({headlines:0})
					break;
				case 'apple':
					this.setState({home:0})
					this.setState({articles:0})
					this.setState({apple:1})
					this.setState({tesla:0})
					this.setState({business:0})
					this.setState({headlines:0})
					break;
				case 'tesla':
					this.setState({home:0})
					this.setState({articles:0})
					this.setState({apple:0})
					this.setState({tesla:1})
					this.setState({business:0})
					this.setState({headlines:0})
					break;
				case 'business':
					this.setState({home:0})
					this.setState({articles:0})
					this.setState({apple:0})
					this.setState({tesla:0})
					this.setState({business:1})
					this.setState({headlines:0})
					break;
				case 'headlines':
					this.setState({home:0})
					this.setState({articles:0})
					this.setState({apple:0})
					this.setState({tesla:0})
					this.setState({business:0})
					this.setState({headlines:1})
					break;
				default:
					<HomePage/>
			}

		}	

		return (
			<div className="App">
				<nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
					<div className="container-fluid">
						<a className="navbar-brand" href="#" style={{letterSpacing:'1px'}}><span className='text-danger'>Smart</span>News</a>
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbar">
							<ul className="navbar-nav text-light ms-auto mb-2 me-2">
								<li className="nav-item ms-4" onClick={(e)=>displayContent(e)}>
									<a className="nav-link active" id='home' href="#">Home</a>
								</li>

								<li className="nav-item ms-4" onClick={(e)=>displayContent(e)}>	
									<a className="nav-link active" id='articles' href="#">Articles</a>
								</li>

								<li className="nav-item ms-4" onClick={(e)=>displayContent(e)}>
									<a className="nav-link text-light" id='apple' href="#">Apple</a>
								</li>

								<li className="nav-item ms-4 dropdown" onClick={(e)=>displayContent(e)}>
									<a className="nav-link text-light" id="tesla" href="#">Tesla</a>
								</li>

								<li className="nav-item ms-4" onClick={(e)=>displayContent(e)}>
									<a className="nav-link text-light" id='business' href="#">Business</a>
								</li>

								<li className="nav-item ms-4" onClick={(e)=>displayContent(e)}>
									<a className="nav-link text-light"  id='headlines' href="#">Headlines</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				
				{
					// Call the function which component should be rendered :)
					displayContentUsingState()
				}
				<div className='d-flex justify-content-end fixed-bottom me-4 mb-4' id='navigate-top'>
					<a href='#top-position' className='btn btn-outline-danger'><i className="fa-solid fa-arrow-up"></i></a>
				</div>
				{/* <!---------------------------------------- Footer section-----------------------------------------> */}
				<footer className="mt-5">
					<div className="bg-dark text-center text-light mb-auto pt-3 pb-3">
						<h4 className="text-center pt-3" style={{letterSpacing:'1px'}}>Contact me: <span className="text-primary">Lucky</span></h4>
						<div className="pt-2 pb-2">
							<a href="https://web.telegram.org/z/" className="btn btn-outline-light btn-floating me-2" target="_blank" title="Telegram" id="tele" data-bs-placement="top">
								<i className="fa-brands fa-telegram"></i>
							</a>
							<a href="https://www.instagram.com/laxmanarao_arasavilli/" target="_blank" className="btn btn-outline-light btn-floating me-2" title="Instagram" id="insta" data-bs-placement="top">
								<i className="fa-brands fa-instagram-square"></i>
							</a>
							<a href="https://www.facebook.com/laxmanarao2003" target="_blank" className="btn btn-outline-light btn-floating me-2" title="Faceboook" id="fb" data-bs-placement="top">
								<i className="fa-brands fa-facebook"></i>
							</a>
							<a href="https://twitter.com/laxmanarao2003"className="btn btn-outline-light btn-floating"target="_blank" title="Twitter" id="twitter" data-bs-placement="right">
								<i className="fa-brands fa-twitter-square"></i>
							</a>
						</div>
						<div className="bg-dark text-center pt-3 pb-2"> 
							<a href="#" id="copyright" style={{letterSpacing:'1px'}} className="text-center text-light text-decoration-none"> &copy; 2022 Copyright: Lucky@SearchDeep</a>
						</div>
					</div>
				</footer>
				
			</div>
		)
	}
}

export default App;
