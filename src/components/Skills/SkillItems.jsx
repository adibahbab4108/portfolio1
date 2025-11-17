
const   SkillItems = ({ title, category }) => {
  return (
    <div className=" pb-10 h-100 overflow-auto no-scrollbar border-r border-purple-700/50 last:border-0 ">
      <h1 className="text-center font-bold text-purple-400 ">
        {title}
      </h1>

      {category.map((skill, index) => (
        <div key={index} className="mx-4 py-4 group flex flex-col items-center">
          <div className="">
            <div className="w-20 h-20 flex items-center justify-center mx-auto bg-slate-900 border border-purple-700 rounded-lg hover:scale-110 transition-transform duration-300">
              <figure>
                <img
                  src={skill.logo}
                  className="w-20 p-2 opacity-50 group-hover:opacity-100 group-hover:bg-purple-600"
                  alt={skill.name}
                />
              </figure>
            </div>
            {/* <p className="text-purple-800 text-lg text-center mt-3 font-semibold">
              {skill.name}
            </p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillItems;
