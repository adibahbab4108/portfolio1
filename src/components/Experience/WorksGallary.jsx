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
            <div className={` flex flex-wrap items-center justify-center h-64 overflow-hidden gap-1 transition-all duration-500`}>
                {volunteeringData.map((data) => {

                   return (<div key={data.id} className=" rounded shadow">
                        <img
                            src={data.image}
                            alt="img"
                            className="object-cover h-23 md:h-36 grayscale hover:grayscale-0"
                        />
                    </div>)
                })}
            </div>

        </div>
    );
};

export default WorksGallary;