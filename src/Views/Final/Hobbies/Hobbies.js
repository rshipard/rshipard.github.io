import './Hobbies.css'
import theatrePoster from '../../../images/hobbies/frankensteins_children_poster.jpeg'

function Hobbies(props) {

    return (
        <div className="HobbiesFinal">
            <h3>Some of my hobbies include</h3>
            <div className="hobby">
                <img className="float-left" src={theatrePoster} alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius nulla deleniti vel reiciendis incidunt, necessitatibus quod? Incidunt pariatur asperiores optio neque consectetur vero possimus repellendus officia maiores, accusantium modi ipsa!</p>
            </div>
            <div className="hobby">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est consequatur voluptatibus molestiae quaerat distinctio molestias cumque veritatis, ratione illo vero a. Exercitationem, earum obcaecati ratione perferendis quis nam quaerat aspernatur?</p>
                
            </div>
            <div className="hobby">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, incidunt cumque unde eum sequi tempore porro placeat repellat omnis excepturi debitis amet culpa nisi a repudiandae voluptas corrupti eveniet repellendus?</p>
                <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/BFaA8Mm1syk?start=18" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen autoPlay></iframe>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae repellendus maiores ad. Commodi est beatae praesentium minima, deserunt atque debitis pariatur eligendi totam nesciunt voluptates inventore tempora veritatis, dolorem fugit!</p>

                
                

            </div>
            <ul className="hobbies-list no-bullets">
                <li>Boardgames</li>
                <li>Theatre</li>
                <li>Dance</li>
                <li>Family</li>
                <li>Gaming</li>
            </ul>
        </div>
    )

}

export { Hobbies }