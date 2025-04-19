import { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";

const Projects = () => {
    const [projects, setProjects] = useState(null);
    const [projectDetails, setProjectDetails] = useState({});
    const [showProjectDetails, setShowProjectDetails] = useState(false)

    useEffect(() => {
        fetch("myprojects.json")
            .then((response) => response.json())
            .then((data) => {
                const { projects } = data
                setProjects(projects);
            })
            .catch((error) => console.error("Error loading JSON:", error));
    }, []);
    if (!projects) return <p>Loading...</p>

    const handleShowProject = (title) => {
        const selecedProject = projects.find(project => project.title === title)
        setProjectDetails(selecedProject)
        setShowProjectDetails(true)
    }
    return (
        <div id="projects">
            <SectionTitle title="Projects" subtitle="We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers." />

            <div className={`grid grid-cols-1 ${showProjectDetails ? '' : 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'} gap-4  `}>
                {
                    !showProjectDetails ? projects.map((project, idx) => {
                        const { title, description, screenshot } = project;

                        return (
                            <div key={idx} className="flex flex-col justify-between bg-slate-900 text-white p-4 rounded-2xl shadow-lg  hover:shadow-xl group">
                                <div className="overflow-hidden rounded-lg transition-all">
                                    <img
                                        src={screenshot}
                                        alt={title}
                                        className=" object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <h2 className="text-xl  md:text-2xl font-bold mt-4 text-violet-400">{title}</h2>
                                <div className="">
                                    <p className=" text-gray-300 font-bold text-justify mt-2 text-sm
                                     group-hover:bottom-0">{description.slice(0, 100)}</p>
                                    <div className=" flex justify-between mt-2 ">
                                        <button
                                            onClick={() => handleShowProject(title)}
                                            className="btn btn-sm btn-secondary "
                                        >View More</button>
                                    </div>
                                </div>
                            </div>
                        );
                    }) : (
                        <>
                            <div className=" bg-slate-900 text-white p-6 rounded-2xl shadow-lg max-w-5xl mx-auto ">
                                <button className="btn btn-xs mb-4 bg-purple-700 border-0 text-white" onClick={() => setShowProjectDetails(false)}>← All Projects</button>
                                <div className="relative place-items-center  overflow-hidden rounded-lg transition-all">
                                    <img
                                        src={projectDetails.screenshot}
                                        alt={projectDetails.title}
                                        className="transition-transform duration-300 hover:scale-96"
                                    />
                                    <p className="absolute text-gray-300 font-bold text-justify mt-2 pt-8 px-2 text-sm z-10
                                     bg-gradient-to-t from-slate-900 via-slate-800 to-transparent to-95% 
                                     group-hover:bottom-0">{projectDetails.description}</p>
                                </div>

                                <h2 className="text-2xl font-bold mt-4 text-violet-400">{projectDetails.title}</h2>


                                <div className="mt-4 flex flex-wrap gap-2">
                                    {projectDetails.technologies.map((tech, index) => (
                                        <span key={index} className="bg-violet-700 text-white text-xs px-3 py-1 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <h2 className=" font-bold mt-4 text-violet-400">Challange Faced: <small className="text-gray-300 font-bold  my-2">{projectDetails.challenges_faced}</small></h2>
                                <h2 className=" font-bold mt-4 text-violet-400">Potential Improvements: <small className="text-gray-300 font-bold  my-2">{projectDetails.potential_improvements}</small></h2>

                                <p ></p>

                                <div className="mt-4 flex justify-between">
                                    <a
                                        href={projectDetails.github}
                                        target="_blank"
                                        className="btn-xs border rounded-full px-3 py-0.5 font-semibold text-violet-500 hover:text-violet-300"
                                    >
                                        GitHub Repo →
                                    </a>
                                    <a
                                        href={projectDetails.live_demo}
                                        target="_blank"
                                        className=" btn-xs border rounded-full px-3 py-0.5 font-semibold text-green-500 hover:text-green-300"
                                    >
                                        Live Demo →
                                    </a>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Projects;