import './ServicesComponent.scss'
import styled from 'styled-components'
import { Link } from 'react-router-dom'






const ServicesComponent = ({ service }) => {
    const color = service.color
    const bgColor = service.bgColor
    const direction = (servicedir) => {
        if (service.dir === "left") {
            return "row"
        } else {
            return "row-reverse"
        }
    }


    const Container = styled.div`
    background-color: ${bgColor};
    `
    const Wrapper = styled.div`
    flex-direction: ${direction()};
    `
    const StyleColor = {
        color: `${color}`,
    }

    return (
        <Container className="services-component-container">
            <Wrapper className="ser-wrapper">
                <div className="left">
                    <div className="title" style={StyleColor}> {service.name} </div>
                    <div className="description" style={StyleColor}>
                        {service.mainDescription}
                    </div>
                    <Link to={service.link} className="links" >
                        <span> View more</span>
                    </Link>
                </div>
                <div className="right">
                    <div className="photo">
                        <img src={service.photo} alt="" className="pic" />
                    </div>
                </div>
            </Wrapper>
        </Container>
    )
}

export default ServicesComponent
