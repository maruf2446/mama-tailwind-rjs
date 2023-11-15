
const Put = () => {
  return (
    <div className=" max-w-[1240px] mx-auto py-20 px-32 bg-black">
      <div className="flex flex-row">
        <div>
          <img className="" src="src/assets/img/put.png" alt="Album" />
        </div>
        <div className="mt-24 pl-20">
          <div className="text-white flex flex-row items-center space-x-2">
            <img className="bg-white w-[10px] h-[10px]" src="src/assets/img/arrow01.svg.svg" alt="" />
            <p className="text-xs font-bold tracking-widest uppercase">why optinet</p>
          </div>

          <div className="text-white space-y-1 pt-3">
            <h2 className="text-4xl  font-light ">Put your network</h2>
            <h1 className="text-4xl font-bold ">in safe hands</h1>
            <p className="text-sm text-slate-400 font-normal leading-7 pt-6">Our loyal customers trust us to manage some of their most business-critical systems.</p>
          </div>

          <a href="#" className="mt-6  bg-white text-black uppercase rounded-3xl py-3 px-6 inline-block hover:bg-transparent hover:border-blue-300 hover:text-white duration-300 hover:border font-normal text-xs tracking-widest">learn more</a>
        </div>
      </div>
    </div>
  );
};

export default Put;