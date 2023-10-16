/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'

// images importing :)
import apple from './appleicon.jpeg'
import business from './businessicon.jpg'
import tesla from './teslaicon.jpeg'
import headlinesicon from './headlinesicon.jpg'

function HomePage() {

    return (
        <div className='container'>
            
            <div className='d-flex align-items-center flex-column justify-content-center mt-4'>
                <div className='d-flex align-items-center pt-4'>
                    <h5 id='border-bottom1'className='text-start me-2'></h5>
                    <h5 id='circle'></h5>
                    <h1 className='text-light text-nowrap px-3 title' id='top-position'>World News</h1>
                    <h5 id='circle'></h5>
                    <h5 id='border-bottom2' className='text-end ms-2'></h5>
                </div>
                <div className='d-flex flex-wrap justify-content-center mt-5'>
                    <div>
                        <img src={apple} className='img-thumbnail me-4 img-fluid mb-3'style={{width:'230px',height:'200px'}} alt=''/>
                        <h4 className='text-center'>Apple <i className="fa-brands fa-apple"></i></h4>
                    </div>
                    <div>            
                        <img src={tesla} className='img-thumbnail me-4 img-fluid mb-3'style={{width:'230px',height:'200px'}} alt=''/>
                        <h4 className='text-center'>Tesla <i className="fa-solid fa-car"></i></h4>
                    </div>
                    <div>
                        <img src={business} className='img-thumbnail me-4 img-fluid mb-3'style={{width:'230px',height:'200px'}} alt=''/>
                        <h4 className='text-center'>Business <i className="fa-solid fa-business-time"></i></h4>
                    </div>
                    <div>
                        <img src={headlinesicon} className='img-thumbnail img-fluid mb-3'style={{width:'230px',height:'200px'}} alt=''/>
                        <h4 className='text-center'>Headlines <i className="fa-solid fa-newspaper"></i></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage