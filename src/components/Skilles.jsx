import '../styles/Skilles.css'
function Skilles() {
    const skills = [{ name: "HTML", level: 95, color: 'bg-danger' },
    { name: "CSS", level: 90, color: 'bg-primary' },
    { name: "JavaScript", level: 75, color: 'bg-warning' },
    { name: "React", level: 80, color: 'bg-info' },
    { name: 'Angular', level: 80, color: 'bg-info' },
    { name: '.NET Core Web API', level: 85, color: 'bg-success' },
    { name: 'SQL Server', level: 85, color: 'bg-secondary' },

    ]
    return (
        <>
            <div className="Skills-container justify-content-center align-items-center text-center">
                <div className="skilles-content justify-content-center align-items-center">
                        <h2 className="text-center mt-5 mb-4">Skills</h2>
                        <p className="skilles-description text-center">
                            My technical journey combines creativity with problem-solving.
                            From designing responsive interfaces to building solid APIs, I focus on quality and performance.
                            Below are the core skills that define my development stack.
                        </p>
                    
                            <div className="row justify-content-center align-items-center text-center">
                                <div className="skills-list text-start mt-5">
                                    {skills.map((skill, index) => (
                                        <div key={index} className="mb-3">
                                            <label>{skill.name}</label>
                                            <div className="progress">
                                                <div
                                                    className={`progress-bar ${skill.color}`}
                                                    style={{ width: `${skill.level}%` }}
                                                >
                                                    {skill.level}%
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                </div>

        </>
    )
}
export default Skilles;