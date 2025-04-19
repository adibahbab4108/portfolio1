import { useState } from "react";

const SectionTitle = ({ title = "", subtitle = "" }) => {
    const [isExpended, setIsExpended] = useState(false)

    return (
        <div className="pt-20 pb-12 text-center">
            <h1 className="text-5xl md:text-6xl font-bold py-3
            bg-gradient-to-r from-purple-600 from-40% to-white to-70%
            bg-clip-text text-transparent">{title}</h1>
            <p className="text-gray-400 mt-4 text-lg font-bold max-w-3xl mx-auto">
                {isExpended ? subtitle : subtitle.slice(0, 150)}
                {
                    subtitle.length >= 150 && (
                        <button onClick={() => setIsExpended(!isExpended)} className="btn btn-xs mx-1 bg-transparent text-white">
                            {isExpended ? " Read less..." : " Read more..."}
                        </button>
                    )
                }
            </p>
        </div>
    );
};

export default SectionTitle;