
const Designed = () => {
  return (
    <div className="bg-black max-w-[1240px] mx-auto text-white  py-40">
      <div className="text-4xl text-center font-light">

        <div className="flex flex-row items-center justify-center uppercase space-x-2 text-xs font-bold leading-3 tracking-widest pb-4">
          <img className="bg-white w-[10px] h-[10px]" src="src/assets/img/arrow01.svg.svg" alt="" />
          <p>our network</p>
        </div>
        <h1>Designed With the latest technoogy for</h1>
        <p className="font-bold mt-2">performance, fexibility and high capacity.</p>
      </div>
      <div className="flex flex-row items-center text-center ">
        <a href="#" className="mt-8  bg-green-400 text-white uppercase rounded-3xl py-3 px-6 inline-block ml-96 hover:bg-transparent hover:border-blue-300 hover:text-red-600 duration-300 hover:border font-normal text-xs tracking-widest">Learn More</a>
        <p className="text-xs font-bold leading-8 tracking-widest uppercase ml-12 mt-7">our looking glass</p>
      </div>
    </div>
  );
};

export default Designed;