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
                        <p>What I learnt:</p>
                        <p>words</p>
                        <p>What I'd do differently</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae necessitatibus nihil nam magnam? Delectus consequatur perspiciatis doloremque quo temporibus laborum obcaecati, recusandae ullam. Delectus eos soluta possimus cum suscipit eum?</p>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas repudiandae dolor voluptate excepturi error accusantium, architecto consectetur et nam, dignissimos suscipit? Error quisquam tempora repellat sit! Eaque, impedit eum?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cupiditate odio nulla, quos quasi labore in quibusdam vero eveniet quod tempora quia? Aut saepe voluptatibus, id odio illo eos nihil!</p>
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
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem praesentium labore architecto error veritatis, facilis cupiditate rerum voluptatem laudantium laborum atque obcaecati accusantium assumenda quis fugiat fuga itaque odio minus.</p>
                    </div>

                </div>
            </div>
        </div>
    )

}

export { Portfolio }