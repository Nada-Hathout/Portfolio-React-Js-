import '../styles/Projects.css'
function Projects() {
    const projects = [
        { title: "Shipping System", description: "Angular,HTML5, CSS3, Bootstrap,State Management,ASP.NET Core Web API​" ,color:'#494545ff' },
        { title: "E-Commerce Application ​", description: "Razor Views, Bootstrap,ASP.NET MVC (.NET Framework),​ Entity Framework,Microsoft SQL Server​", color:'#0e0d0dff' },
        { title: "Flower Shop System", description: "Angular,ASP.NET Core Web API​", color:'#494545ff' },
        { title: "Shopping System", description: "Angular,HTML5, CSS3, Bootstrap,State Management,ASP.NET Core Web API​", color:'#0e0d0dff' },
        { title: "Responsive Hotel Website​", description: "HTML, CSS, JS​,Bootstrap​", color:'#494545ff' },
        { title: "simple Shopping Application", description: "SQL,ADO.Net​​", color:'#0e0d0dff' },

    ]
    return (
        <>
            <div className="main-container">
                <h1 className='project-header'>Projects</h1>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        projects.map((project, index) => (
                            <div class="col" key={index}>
                                <div class="card" style={{backgroundColor:project.color,color:'white', height: '200px'}}>
                                    <div class="card-body">
                                        <h4 class="card-title">{project.title}</h4>
                                        <p class="card-text">{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>)
}

export default Projects;