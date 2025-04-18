import SectionTitle from "../shared/SectionTitle";

const AboutMe = () => {
    return (
        <div id="about">
            <SectionTitle
                title="About Me"
                subtitle="Dedicated and curious web developer with a strong focus on the MERN Stack (MongoDB, Express.js, React, Node.js). I love building full-stack applications that are not only functional but also deliver a great user experience.
My journey into tech started with C++, where I developed a knack for problem-solving and algorithmic thinking—a skill that continues to guide me in writing efficient and clean code.
Over time, I've worked with various tools and technologies in both frontend and backend development, including REST APIs, React Router, Firebase Auth, and MongoDB CRUD operations. I'm particularly passionate about writing readable, maintainable code and turning ideas into reality through modern web technologies" />
            <div className="text-white text-center space-x-4 space-y-4 group">
                <div className="customized-btn p-2 skew-1 group-hover:skew-0">
                    Specializing in MERN Stack
                </div>
                <div className="customized-btn  skew-1 group-hover:skew-0">
                    Passionate about building scalable web applications
                </div>
                <div className="customized-btn  -skew-1 group-hover:skew-0">
                    Currently exploring Next.js
                </div>
                <div className="customized-btn -skew-1 group-hover:skew-0">
                    Lifelong learner, always excited to explore new technologies
                </div>
                <div className="customized-btn skew-1 group-hover:skew-0">
                    Open to collaborations, open-source contributions, and networking
                </div>
            </div>
        </div>
    );
};

export default AboutMe;