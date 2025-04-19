import { useEffect, useState } from "react";

const WorksGallary = () => {
    const [volunteeringData, setVolunteeringData] = useState([])
    const fetchVolunteering = async () => {
        const res = await fetch('/volunteering.json');
        const data = await res.json();
        setVolunteeringData(data)
    };

    useEffect(() => {
        fetchVolunteering()
    }, [])

    return (
        <div>
            <div className={`relative flex flex-wrap items-center justify-center h-64 overflow-hidden gap-1 transition-all duration-500`}>

                {volunteeringData.map((data) => {

                    return (
                        <div key={data.id} className="">
                            <img
                                src={data.image}
                                alt="img"
                                className="object-cover h-23 md:h-36 transition-all hover:scale-105 grayscale hover:grayscale-0 active:grayscale-0"
                            />
                        </div>)
                })}
                {/* <h2 className="absolute
                 text-white md:text-3xl
                 backdrop-blur-sm
                  border px-3 py-2 
                  rounded-sm 
                  shadow-2xl shadow-accent-content  bg-purple-950/50 cursor-pointer active:scale-90 transition-all">View in Gallary</h2> */}
            </div>

        </div>
    );
};

export default WorksGallary;