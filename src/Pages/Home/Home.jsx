import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import './Home.scss'
import slider1 from '../../Media/Sliders/slider1.jpg'
import slider2 from '../../Media/Sliders/slider2.jpg'
import slider3 from '../../Media/Sliders/slider3.jpg'
import slider4 from '../../Media/Sliders/slider4.jpg'
import Carousel from 'react-bootstrap/Carousel'
import ServicesComponent from '../../Components/Services/ServicesComponent'
import { services } from '../../Data/our services/Services'
import Footer from '../../Components/Footer/Footer'
const Home = () => {
    return (
        <div className="home-container">
            <NavBar />
            <div className="slider">
                <Carousel style={{ color: "black" }} >
                    <Carousel.Item interval={3500}>
                        <img
                            className="d-block h-100 sl-img"
                            src={slider1}
                            alt="First slide"
                        />
                        <Carousel.Caption className="text-description">
                            <h3 className="text-color" >First slide label</h3>
                            <p className="text-color" >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3500} >
                        <img
                            className="d-block h-100 sl-img"
                            src={slider2}
                            alt="Second slide"
                        />
                        <Carousel.Caption className="text-description">
                            <h3 className="text-color" >Second slide label</h3>
                            <p className="text-color" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3500} >
                        <img
                            className="d-block h-100 sl-img"
                            src={slider3}
                            alt="Third slide"
                        />
                        <Carousel.Caption className="text-description">
                            <h3 className="text-color" >Third slide label</h3>
                            <p className="text-color" >Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3500} >
                        <img
                            className="d-block h-100 sl-img"
                            src={slider4}
                            alt="Third slide"
                        />
                        <Carousel.Caption className="text-description">
                            <h3 className="text-color" >Fourth slide label</h3>
                            <p className="text-color" >Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="home-wrapper">
                {services.map((service)=>{
                    return <ServicesComponent service={service} id={service.id} />
                })}
            </div>
            <Footer/>
        </div>
    )
}

export default Home
