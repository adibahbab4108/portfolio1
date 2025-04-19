/* eslint-disable react/prop-types */
import Marquee from "react-fast-marquee";

const SkillTechMarquee = ({ title, category, direction }) => {
 
    return (
        <div className=" pb-10">
            <h1 className="text-center font-bold text-purple-700 underline underline-offset-4">{title}</h1>
            <Marquee
                pauseOnHover
                direction={direction}
                speed={40} gradient={true}
                gradientColor={'#0A0214'}
                autoFill
            >
                {category.map((skill, index) => (
                    <div key={index} className="mx-4 py-4 group">
                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center
                             bg-slate-900 w-40 h-40 rounded-2xl
                             transition-all group-hover:scale-110
                              group-hover:bg-white group-hover:ring-2
                               group-hover:ring-purple-400
                               hover:bg-gradient-to-bl from-[#7F4BEA] to-[#0F0715]
                               " 
                               >
                                <figure>
                                    <img src={skill.logo} className="w-26 p-2 opacity-50 group-hover:opacity-100" alt={skill.name} />
                                </figure>
                            </div>
                            <p className="text-purple-400 text-lg text-center mt-3 font-semibold">
                                {skill.name}
                            </p>
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default SkillTechMarquee;