import { Component } from "react";
import './Contact.css'

class Contact extends Component {
    render() {
        return (
            <div className="contact-me">
                <h3>Contact Me on:</h3>
                <ul className="hobbies-list">
                    <li>Email</li>
                    <li>LinkedIn</li>
                    <li>Phone</li>
                </ul>
            </div>
        )
    }
}

export { Contact }