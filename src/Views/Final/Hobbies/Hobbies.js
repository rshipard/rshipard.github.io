import './Hobbies.css'
import theatrePoster from '../../../images/hobbies/frankensteins_children_poster.jpeg'
import boardGamePhoto from '../../../images/hobbies/board_game.jpeg'


function Hobbies(props) {

    return (
        <div className="HobbiesFinal">
            <section className="content">
                <h3>Some of my hobbies include</h3>
                <div className="hobby">
                    <h4>Theatre</h4>
                    <img className="float-left" src={theatrePoster} alt="" />
                    <p>Ever since Highschool I've loved theatre.</p>
                    <p>I have been able to have some of the best experiences of my life both on stage and off. I've acted, rigged lighting, created props and directed. All of which are completely different and completely rewarding.</p>
                    <p>Some of my favourite memories are being able to play as a villian with Castlemaine Theate Company which was a long term goal and a truly dark horror with Frankensteins Children.</p>
                    <p>Or the time I was asked to be the Technical Director for Bendigo Theatrre Company's TenX10 series of plays. Which was such a great learning experience and gave me new ways to stretch my skills in a really supportive environment.</p>
                </div>
                <div className="hobby">
                    <h4>Board Games</h4>
                    <img className="float-right boardgame-photo" src={boardGamePhoto} alt="" />
                    <p>Ever since I was really young I played games. First Checker with my grandfather and chess with my Dad.</p>
                    <p>When I was in my mid twenties I discovered so called "hobby" boardgames which turned first into a shelf, then a whole bookshelf, then a gaming club, and now the "shame cupboard".</p>
                    <p>We don't speak about the shame cupboard.</p>
                </div>
                <div className="hobby">
                    <h4>Dance</h4>
                    <p>In the last 6 years I've discovered the world of Ballroom and Latin dance. Due to little things like a pandemic I haven't been able to do it for the last 2 years. I can't wait for the post COVID world where I get to go back out and move across the dancefloor!</p>
                    <figure>
                        <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/BFaA8Mm1syk?start=18" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <figcaption>Disclaimer - this is <i>not</i> me, but is from the same dance studio!</figcaption>
                    </figure>
                    
                </div>
            </section>
            
        </div>
    )

}

export { Hobbies }