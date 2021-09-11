import { Component } from "react";
import './Portfolio.css'

class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio">
                <div className="projects">
                    <h3>Projects I've worked on</h3>
                    <ul className="projects-list">
                        <li>Project 1</li>
                        <li>Project 2</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export { Portfolio }