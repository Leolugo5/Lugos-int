import './NavBar.scss'
import logoPurple from '../../Media/Tipografia/logoPurple.png'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="wrapper">
                <div className="left">
                    <Link to="/" className="logo"  >
                        <img src={logoPurple} alt="Lugos international logo" className="nav-logo" />
                    </Link>
                </div>
                <div className="right">
                    <Link to="/furniture-cleaning" className="router-link"  >
                        Furniture Cleaning
                    </Link>
                    <Link to="/house-maintenance" className="router-link"  >
                        House Maintenance
                    </Link>
                    {/* <Link to="/property-management" className="router-link"  >
                        Property Management
                    </Link> */}
                    <Link to="/about" className="router-link"  >
                        About
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar
