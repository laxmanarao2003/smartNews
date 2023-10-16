import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ApplePage() {
    const [arr,setArr]=useState([])
    const [fetchData,setFetchData]=useState(0)
    const appleApi='https://newsapi.org/v2/everything?q=apple&from=2023-10-12&to=2023-10-12&sortBy=popularity&apiKey=96cdc7369fcb4135b3ee729e248e5b12'

    useEffect(()=>{
        
        fetchApi()

    },[])

    const fetchApi=async()=>{
        try{
            
            const response=await axios.get(appleApi)
            setFetchData(1)
            setArr(response.data.articles)
        }
        catch(err){
            console.log('Something went wrong')
            alert('Check your Internet connection and try again')
        }
    }

    return (
        (fetchData)?
            <div className='container'>
                <h2 className='text-center text-uppercase text-light mt-5' id='top-position'>Apple <i className="fa-brands fa-apple"></i></h2>
                <div className='d-flex flex-wrap justify-content-between mb-5'>
                    {
                        arr.map((ele,index)=>{
                                return  <div key={index} className="card mt-4" style={{width:'340px'}}>
                                            <img src={ele.urlToImage} className="card-img-top img-fluid" style={{width:'340px',height:'200px'}} alt={ele.title}/>
                                            <div className="card-body">
                                                <h5 className="card-title">{ele.title}</h5>
                                                <p className="card-text">{ele.content}</p>
                                                <a href={ele.url} target='blank' className="btn btn-outline-primary">View Full details</a>
                                            </div>
                                            <div className="card-footer">
                                                <small className="text-muted">Published At: {ele.publishedAt}</small>
                                            </div>
                                        </div>
                                    }
                                )
                    }
                </div>
            </div>
        :
            <div style={{height:'600px'}}>
                <h2 className='text-center pt-5'>Wait Data Fetching</h2>
                <div style={{transform:'translate(50%,100%)'}}>
                    <span href='' className='spinner-border text-danger'></span>
                </div>
            </div>
    )
}

export default ApplePage