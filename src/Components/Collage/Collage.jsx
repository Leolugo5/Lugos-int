import { useState } from 'react'
import slider4 from './../../Media/Sliders/slider4.jpg'
import './Collage.scss'
import CloseIcon from '@mui/icons-material/Close';



const Collage = ({data, id}) => {

    const [infoBox, setInfoBox] = useState(false)
    const handleInfo = () => {
        if (infoBox === false) {
            setInfoBox(true)
        } else {
            setInfoBox(false)
        }
    }

    return (
        <div className="main-collage">
            <div className="c-container">
                <div className="c-desc" onClick={handleInfo} >
                    <div className="c-desc-wrap">
                        <h3 className="c-item-name c-cont">
                            {data.name}
                        </h3>
                        <span className="c-cont c-span">See more</span>
                    </div>
                </div>
                <div className="photo">
                    <img src={data.photo2} alt="desc" className="pic" />
                </div>
            </div>
            {infoBox === true ? (
                <>
                    <div className="info-card">
                        <div className="info-wrapper">
                                <CloseIcon className="icon" onClick={handleInfo} />
                            <div className="left">
                                <img src={slider4} alt="" className="work" />
                            </div>
                            <div className="right">
                                <h2 className="title col">
                                    {data.name}
                                </h2>
                                <div className="description col">
                                    {data.mainDescription}
                                </div>
                                <span className="contact col"> Call Now </span>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    )
}

export default Collage
