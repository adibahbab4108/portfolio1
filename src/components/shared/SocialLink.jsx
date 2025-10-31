import { FaDribbble, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialLink = () => {
    return (
        <div className="flex gap-4 text-lg">
            <a href="https://www.linkedin.com/in/adib-ahbab4108/" target="_blank" className="text-gray-300 text-3xl hover:text-purple-600">
                <FaLinkedin />
            </a>
            <a href="https://www.github.com/adibahbab4108" target="_blank" className="text-gray-300 text-3xl hover:text-purple-600">
                <FaGithub />
            </a>
        </div>
    );
};

export default SocialLink;