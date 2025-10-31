import { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";

import SkillTechMarquee from "./SkillTechMarquee";


const Skills = () => {
    const [skills, setSkills] = useState(null);

    useEffect(() => {
        fetch("/myskills.json")
            .then(res => res.json())
            .then(data => {
                setSkills(data.myskill_data || []); // Ensuring default array if undefined
            })
            .catch(error => console.error("Error fetching skills:", error));
    }, []);

    // Handle the case where skills data is not yet loaded
    if (!skills) {
        return <p>Loading skills...</p>;
    }

    // Extract different skill categories safely
    const frontEnd = skills.find(skill => skill.slug === "frontend")?.skills || [];
    const backEnd = skills
        .filter(skill => skill.slug === "backend" || skill.slug === "security")
        .flatMap(skill => skill.skills) || [];
    const toolsUtils = skills.find(skill => skill.slug === "tools-utilities")?.skills || [];
    const securityAndPayments = skills.find(skill => skill.slug === "security-payment")?.skills || [];
    const clouldDeployments = skills.find(skill => skill.slug === "cloud-deployment")?.skills || [];


    return (
        <div id="skills" className="pb-20">
            <SectionTitle title="My Skills" subtitle="Transform your ideas and desires into a distinctive web project that not only inspires you but also captivates your customers." />
            {/* Front End */}
            <SkillTechMarquee title={"Front End"} category={frontEnd} direction={"right"} />
            {/* Backend */}
            <SkillTechMarquee title={"Back End"} category={backEnd} direction={"left"} />
            {/* Tools And Utilities */}
            <SkillTechMarquee title={"Tools And Utilities "} category={toolsUtils} direction={"right"} />
            {/* Other Languages */}
            <SkillTechMarquee title={"Security and Payments"} category={securityAndPayments} direction={"left"} />
            <SkillTechMarquee title={"Clould & Deployment"} category={clouldDeployments} direction={"left"} />

        </div >
    );
};

export default Skills;