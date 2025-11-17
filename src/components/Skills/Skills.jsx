import { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";

import SkillTechMarquee from "./SkillItems";
import SkillItems from "./SkillItems";

const Skills = () => {
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    fetch("/myskills.json")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data.myskill_data || []); // Ensuring default array if undefined
      })
      .catch((error) => console.error("Error fetching skills:", error));
  }, []);

  // Handle the case where skills data is not yet loaded
  if (!skills) {
    return <p>Loading skills...</p>;
  }

//   // Extract different skill categories safely
//   const frontEnd =
//     skills.find((skill) => skill.slug === "frontend")?.skills || [];
//   const backEnd =
//     skills
//       .filter((skill) => skill.slug === "backend" || skill.slug === "security")
//       .flatMap((skill) => skill.skills) || [];
//   const toolsUtils =
//     skills.find((skill) => skill.slug === "tools-utilities")?.skills || [];
//   const securityAndPayments =
//     skills.find((skill) => skill.slug === "security-payment")?.skills || [];
//   const clouldDeployments =
//     skills.find((skill) => skill.slug === "cloud-deployment")?.skills || [];

  return (
    <div id="skills" className="pb-20">
      <SectionTitle
        title="My Skills"
        subtitle="Transform your ideas and desires into a distinctive web project that not only inspires you but also captivates your customers."
      />
      <div className="flex flex-col sm:flex-row justify-center max-w-6xl mx-auto">
        {skills.map((skillCategory, index) => (
          <SkillItems
            key={index}
            title={skillCategory.title}
            category={skillCategory.skills}
          />
        ))}

      </div>
    </div>
  );
};

export default Skills;
