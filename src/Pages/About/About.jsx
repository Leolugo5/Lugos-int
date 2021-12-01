import './About.scss'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from './../../Components/Footer/Footer'

const About = () => {
    return (
        <div className="ab-main-container">
            <NavBar />
            <div className="ab-container">
                <div className="ab-top">
                    <img className="ab-top-img" src="https://images.pexels.com/photos/10305718/pexels-photo-10305718.jpeg?cs=srgb&dl=pexels-sof%C3%ADa-rabassa-10305718.jpg&fm=jpg" alt="about cover pic" />
                    <h1 className="page-title">
                        About us
                    </h1>
                </div>

                <div className="ab-body">
                    <div className="ab-our-history">
                        <h3 className="ab-title">
                            History
                        </h3>
                        <div className="our-history">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt nobis officiis corrupti, saepe vel tempore, atque fugiat dicta blanditiis hic accusantium eligendi necessitatibus. Voluptate iste natus quaerat impedit. Consectetur exercitationem nobis laudantium, sint qui quod ipsa aliquid reprehenderit numquam optio impedit repellendus est facilis dolorum. Vel iure quaerat aut eum?
                        </div>
                    </div>
                    <div className="ab-our-goals">
                        <h3 className="ab-title">
                            Vision
                        </h3>
                        <div className="ab-goals">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quaerat voluptatibus corporis aspernatur excepturi voluptates vero recusandae quos nam architecto.

                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa nobis ducimus animi cumque velit, omnis, totam amet hic laboriosam nemo, neque sapiente magni quas aspernatur provident maxime! Magnam perferendis mollitia commodi expedita cum animi, exercitationem error aliquid recusandae adipisci nam harum numquam sunt velit minima odio natus! Placeat, quia quisquam eos, incidunt at suscipit voluptates nemo unde pariatur velit alias qui voluptate eveniet est sint? Incidunt, animi. Molestiae praesentium sequi quibusdam eum blanditiis labore exercitationem corrupti adipisci culpa obcaecati non suscipit sit inventore, natus iure laborum temporibus voluptate cum tempora aperiam laboriosam odio esse. Ullam, vero? Facere ad odio ex.

                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consequuntur expedita aut neque nostrum! Quod incidunt beatae labore, neque ipsa error amet aliquid deserunt quas ut fugiat perspiciatis eius nostrum, quam atque? Assumenda necessitatibus illo, ipsam, ratione velit architecto recusandae minima provident voluptatum vitae molestias ducimus. Vel eius deserunt facere.
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default About
