import './LandingPage.css'
import downArrow from '../../../images/landing_page/baseline_arrow_downward_black_36dp.png'

function LandingPage(props) {

    return (
        <div className="LandingPageTwo">
            <h3>Welcome!</h3>
            <p>I'd like to take you on a journey, but first feel free to click the links to the left, I think you'll get the idea.</p>
            <p>When you're ready to continue come back to the Home section and scroll down some more.</p>
            <br />
            <p>
                <img src={downArrow} alt="" />
            </p>
            <br />
            <p>
                <img src={downArrow} alt="" />
            </p>
            <br />
            <p>
                <img src={downArrow} alt="" />
            </p>
            <br />
            <p>
                <img src={downArrow} alt="" />
            </p>
            <br />
            <p>
                <img src={downArrow} alt="" />
            </p>
            <br />
            <p>
                <img src={downArrow} alt="" />
            </p>
            <br />
            <p>
                <img src={downArrow} alt="" />
            </p>
            <br />
            <p>
                <img src={downArrow} alt="" />
            </p>


        </div>
    )
}

export {LandingPage} 