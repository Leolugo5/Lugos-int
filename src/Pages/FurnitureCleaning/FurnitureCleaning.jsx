import React from 'react'
import Collage from '../../Components/Collage/Collage'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import './FurnitureCleaning.scss'
import { services } from '../../Data/our services/Services'




const FurnitureCleaning = () => {
    return (
        <div className="fc-main-container">
            <NavBar />
            <div className="fc-container">
                <div className="top">
                    <div className="lema-desc">
                        <h1 className="title"> Furniture Cleaning </h1>
                        <span className="lema">
                            Renueva tus muebles y estrena por seguna vez!
                        </span>
                    </div>
                    <div className="img">
                        <img src="https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3757055.jpg&fm=jpg" alt="cover-pic" className="bg-photo" />
                    </div>
                </div>
            </div>
            <div className="fc-wrapper">
                {services.map((services) => {
                    return <Collage data={services} id={services.id} />
                })}
            </div>
            <Footer />
        </div>
    )
}

export default FurnitureCleaning
