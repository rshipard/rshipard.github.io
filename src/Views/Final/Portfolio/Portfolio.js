import './Portfolio.css'
import quizwatchScreenshot from '../../../images/portfolio/quizwatch.png'
import ticTacToeScreenshot from '../../../images/portfolio/tic_tac_toe.png'
import DIYGenieScreenshot from '../../../images/portfolio/diy_genie.png'

function Portfolio(props) {

    return (
        <div className="PortfolioFinal">
            <div className="projects">
                <h3>Projects I've worked on</h3>
                <div className="project">
                    <h4>Project 1: Tic Tac Toe</h4>
                    <div>
                        <a href="https://rshipard.github.io/tictactoe/" target="_blank">
                            <img src={ticTacToeScreenshot} alt="" />
                        </a>
                        <br />
                        <h4>Lessons learnt:</h4>
                        <p>My first attempt at DOM manipulation. During which I learn how valuable event listeners are and possibly more importantly when to disable them. I am sure there are 100 ways this could have been done, but I was particularly happy with how I analysed win conditions.</p>
                        <p>This taught me a great deal about simply concepts that can be surprisingly hard to grasp, like the myriad ways people can and will click on something out of order and how you need to allow for that while not necessarily adjusting your code, but possibly adjusting HOW you allow people to interact with the page.</p>
                        <h4>What I'd like to improve</h4>
                        <ul>
                            <li>The page looks flat and the colour scheme is a bit to dark</li>
                            <li>When the game is over I would like to add a reset feature</li>
                            <li>Scoring that tracks between rounds</li>
                        </ul>
                        <h4>Bugs:</h4>
                        <p>You can overwrite a another players selection, and this will still increment the turn counter. I would like to go back and change these but given it's a first project I'm not likely to do so anytime soon.</p>
                    </div>
                </div>
                <br />
                <div className="project">
                    <h4>Project 2: DIY Genie</h4>
                    <div>
                        <a href="https://morning-island-37915.herokuapp.com/">
                            <img src={DIYGenieScreenshot} alt="" />
                        </a>
                        <br />
                        <p>I wanted to make a way for friends and family to create wishlists, stating exactly what they want, then for the rest of us to collaborate on getting them, without ruining the surprise for the one who had made the wishlist.</p>
                        <h4>Lessons learnt:</h4>
                        <p>Displaying information that collates information from multiple database tables and then calculating things from them is not that hard IF you have set up the tables thoughtfully.</p>
                        <p>When trouble-shooting it is a massive advantage to constantly check exactly what it is your various functions and data queries are returning.</p>
                        <h4>What I'd like to improve</h4>
                        <ul>
                            <li>The actual lists and CSS were rushed, and they need work to improve the user experience.</li>
                            <li>The names for the various categories need improvement and honestly I'd like to go back and rework the whole database with the benefit of hindsight.</li>
                            <li>I wanted to add a lit more categories like "size", "colour" and the ability for people to upload images and links to exactly what they wanted.</li>
                        </ul>
                        <h4>Bugs:</h4>
                        <p>None that I am aware of the but core functions are very bare bones.</p>
                    </div>
                </div>
                <br />
                <div className="project">
                    <h4>Project 3: QuizWatch</h4>
                    <div>
                        <a href="https://afternoon-sands-32182.herokuapp.com/" target="_blank">
                            <img src={quizwatchScreenshot} alt="" />
                        </a>
                        <br />
                        <p>This was a group project to create a flashcard program to aid in learning new information. Given that we had not seen or used React prior it turns out we had created a servicable clone on our own!</p>
                        <h4>Lessons learnt:</h4>
                        <p>When you're trying to add multiple features the first thing you need to do as a group is clearly communicate and break the wrok apart. That said we got pretty good at resolving git merge conflicts, and then creating systems so they happened less and less.</p>
                        <p>Managing a large team project is a job unto itself and apparently I love refactoring code. Something I hadn't fully realised until now.</p>
                        <h4>What I'd like to improve</h4>
                        <ul>
                            <li>The site itself prbably needs a more interactive and detailed walkthrough of it's functions</li>
                            <li>I'd love to create an e-mail notification system you can customies to how many flashcards you have due, or how long they've been "waiting" for you</li>
                            <li>The "intro" flashcards should be more generic in their questions and hints, to aid in the user easily understanding the concepts of the program.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )

}

export { Portfolio }