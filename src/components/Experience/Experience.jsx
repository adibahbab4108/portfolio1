import SectionTitle from "../shared/SectionTitle";
import WorksGallary from "./WorksGallary";
const Experience = () => {
    return (
        <div>
            <SectionTitle title="Experience" subtitle="" />
            <div className="flex justify-center gap-6 overflow-hidden py-8">
                <div className="border w-80 h-48 text-white p-4 rounded-br-4xl transition-all duration-300  hover:bg-violet-700 shadow-lg shadow-purple-300">
                    <h1 className="sm:text-2xl font-bold mt-2">Webmaster</h1>
                    <p className=" font-bold text-gray-300 mt-2">IEEE Communication Scociety IIUC SBC</p>
                    <p className="sm:text-lg font-bold text-violet-400">2024-2025</p>
                </div>
                <div className="border h-48 w-80 text-white p-4  rounded-br-4xl transition-all duration-300  hover:bg-violet-700 shadow-lg shadow-purple-300">
                    <h1 className="sm:text-2xl font-bold mt-2">Webmaster Executive</h1>
                    <p className="font-bold text-gray-300 mt-2">IEEE Computer Scociety IIUC SBC</p>
                    <p className="sm:text-lg font-bold text-violet-400">2023-2024</p>
                </div>
            </div>
            <WorksGallary/>
        </div>
    );
};

export default Experience;