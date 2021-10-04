import './Contact.css'

function Contact(props) {
    return (
        <div className="ContactFinal">
            <h3>Contact Me on:</h3>
            <ul className="hobbies-list no-bullets">
                <li>Connect with me on 
                    <a href="https://www.linkedin.com/in/ralph-shipard-b58924200/" target="_blank"> LinkedIn</a>
                </li>
                <li>Phone: 
                    <a href="tel:0423626618"> 0423 626 618</a>
                </li>
                <li>Email: 
                    <a href="mailto:rshipard@gmail.com"> rshipard @ gmail dot com</a>
                </li>
            </ul>
        </div>
    )
}

export { Contact }