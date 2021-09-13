import { Component } from "react";
import './Contact.css'

function Contact(props) {
    return (
        <div className="contact-me">
            <h3>Contact Me on:</h3>
            <ul className="hobbies-list">
                <li>Connect with me on 
                    <a href="https://www.linkedin.com/in/ralph-shipard-b58924200/" target="_blank"> LindedIn</a>
                </li>
                <li>Phone: 
                    <a href="tel:0423626618"> 0423 626 618</a>
                </li>
                <li>Email: 
                    <a href="mailto:rshipard@gmail.com"> rshipard@gmail.com</a>
                </li>
            </ul>
        </div>
    )
}

export { Contact }