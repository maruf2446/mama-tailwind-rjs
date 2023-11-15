
const Navigat = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-36 py-20">
      <div className="flex flex-row card">
        <figure><img className="h-[450px] w-[1400px]" src="src/assets/img/navigating.png" alt="Album" /></figure>
        <div className="mt-24 pl-20">
          <div className="flex flex-row items-center uppercase space-x-2 text-xs font-bold leading-3 tracking-widest pb-4">
            <img className="w-[10px] h-[10px]" src="src/assets/img/arrow01.svg.svg" alt="" />
            <p>about us</p>
          </div>
          <h2 className="text-4xl">Navigating the technology
            and communication provider marketplace shouldn’t be a complex and daunting process.</h2>
            <a href="#" className="mt-6  bg-black text-white uppercase rounded-3xl py-3 px-6 inline-block hover:bg-transparent hover:border-blue-300 hover:text-black duration-300 hover:border font-normal text-xs tracking-widest">about optinet</a>
        </div>
      </div>
    </div>
  );
};

export default Navigat;