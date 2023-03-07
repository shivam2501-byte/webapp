import React from 'react'
import aboutimg from '../aboutimg.png'
export default function About(props) {
    return (
        <div className="container mt-4 d-flex "style={{color: props.mode === 'dark'? 'white': 'black' }}>
            <div className="card-body  width: 100% height: auto p-4"  >
                <h2 className="card-title">About Us</h2>
                <p className="card-text">We work as a freelancer. We make the websites and android apps. All the members are hardworking and we provide quality content..
                    Thanks , For visiting us .
                </p>
                <a href="#" className="btn btn-primary">Learn More</a>
            </div>

            <div className="image p-4">
                <img className='img-fluid width: 100% height: auto rounded' src={require('../../src/aboutusimg.avif')} alt="Image" />
            </div>



        </div>
    )
}
