import { Component } from "react";
import './Hobbies.css'

class Hobbies extends Component {
    render() {
        return (
            <div className="hobbies">
                <h3>Some of my hobbies include</h3>
                <ul className="hobbies-list">
                    <li>Boardgames</li>
                    <li>Amateur Theatre</li>
                </ul>
            </div>
        )
    }
}

export { Hobbies }