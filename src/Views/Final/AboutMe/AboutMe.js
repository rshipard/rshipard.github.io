import './AboutMe.css'

function AboutMe(props) {
    return (
        <div className="AboutMeFinal">
            <div className="coding">
                <h3>Coding Skills</h3>
                <p>As a graduate of the General Assembly Software Engineering program I have a broad range of full-stack skillsets.</p>
                <p>The short list is:</p>
                <div className="coding-skills">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Javascript</p>
                    <p>SQL</p>
                    <p>Ruby</p>
                    <p>React</p>
                    <p>PostgreSQL</p>
                    <p>CLI commands</p>
                    <p>RegEx</p>
                    <p>Jest Testing</p>
                    <p>Git/Github</p>
                </div>
                <p>Based on or using:</p>
                <ul className="coding-related-skills">
                    <li>RESTful routes</li>
                    <li>MVC architecture</li>
                    <li>API's</li>
                    <li>OOP</li>
                    <li>TDD</li>
                    <li>DOM Manipulation</li>
                </ul>
            </div>
            <div className="background">
                <h3>Background</h3>
                <p>After 10 years within the Automotive industry as a Parts Interpreter, I'm looking for a new challenge and coding seemed the perfect match of what I love and how I approach problems.</p>
                <p>Being a Software Engineer is exciting as it allows me to find solutions to problems every single day. I love looking for creative solutions and combined with the methodical, systemic approach that all coding requires, really lets me enjoy solving the problem.</p>
            </div>
            <div className="skills">
                <h3>Life Skills</h3>
                <ul className="life-skills no-bullets">
                    <li>
                        <h4>Multi-tasking</h4>
                        <p>While not something I recommend, I have had a lot of practise juggling, training staff, serving customers, technical interpretation, scheduling, longer-term projects and life in general!</p>
                    </li>
                    <li>
                        <h4>Constant learning</h4>
                        <p>Toyota (well Japanese, but I learnt it via Toyota) has a work for this "Kaizan". It means continious improvement. Constantly looking for small (or large) changes we can make to constantly improve our actions.</p>
                    </li>
                    <li>
                        <h4>Thinking Outside The Box</h4>
                        <p>Ever tried to break into a safe? Well I used to have to as a locksmith, which means looking for creative solutions. Sometime the problem you're asked to fix, isn't actually the problem. I learnt to ask questions and offer options people hadn't considered.</p>
                    </li>
                    <li>
                        <h4>Empathy</h4>
                        <p>I spent years as a Crisis Supporter for Lifeline, which sounds more stressful that it can be. But the core, absolutely cricial skill is empathy. Listening to people and being able to sit with them no matter how they feel.</p>
                    </li>
                    <li>
                        <h4>Tight Deadlines</h4>
                        <p>For the last few years I've been a Lighting Technician and then Tehcnical Director for the Bendigo Theatre Company. When you're looking at a series of 10 plays, work fulltime already, and have under week from rigging the lighting to performance, with 10 directors all with different requirements you get <b><i>very</i></b> good at figuring out just how much time you have to work with.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export { AboutMe }