import { FaDownload } from "react-icons/fa";
import myProfile from "../../assets/profile.png"
import SocialLink from "../shared/SocialLink";
const Hero = () => {
    return (
        <section className=" md:h-[calc(100vh-66px)] flex flex-col justify-center  text-white px-6 ">
            <div className="flex flex-col md:flex-row items-center gap-12 mt-40 ">
                {/* Left Content */}
                <div className="text-center md:text-left max-w-2xl ">
                    <h2 className="text-3xl font-bold">I am Adib</h2>
                    <h1 className="text-5xl md:text-6xl font-bold mt-2 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">
                        Next-Level Web Developer.
                    </h1>

                    <p className="text-gray-300 mt-4 text-lg font-bold">
                        I craft seamless digital experiences, transforming complexity into intuitive solutions that empower and connect billions.
                    </p>
                    {/* Buttons & Social Icons */}
                    <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
                        <a href="#" download className="flex items-center gap-2 customized-btn">
                            Download CV <FaDownload />
                        </a>
                        <SocialLink />
                    </div>
                </div>
                {/* Right Image */}
                <div className="">
                    {/* Image container */}
                    <div className="w-72 h-72 md:w-96 md:h-96 
      lg:w-[30rem] lg:h-[30rem]
      bg-gradient-to-r from-purple-900 to-indigo-600 p-0.5 rounded-3xl
      brightness-70 hover:brightness-90
      rotate-6 hover:rotate-0 transition-all duration-1000 relative  overflow-hidden">
                        <div className="spining-card absolute "></div>
                        <img
                            src={myProfile}
                            alt="adibahbab4108"
                            className="w-full h-full object-cover rounded-3xl z-20"
                        />
                    </div>
                </div>

            </div>

            {/* Stats Section */}
            <div className="flex flex-wrap justify-evenly gap-8 py-10 bg-black/30 rounded-2xl my-20">
                <div className="text-center">
                    <h3 className="text-4xl font-bold">Ꝏ</h3>
                    <p className="text-gray-400">Years of Experience</p>
                </div>
                <div className="text-center">
                    <h3 className="text-4xl font-bold">6+</h3>
                    <p className="text-gray-400">Projects Completed</p>
                </div>
                <div className="text-center">
                    <h3 className="text-4xl font-bold">Ꝏ</h3>
                    <p className="text-gray-400">Happy Clients</p>
                </div>
                <div className="text-center">
                    <h3 className="text-4xl font-bold">10+</h3>
                    <p className="text-gray-400">Tech Stacks Mastered</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
