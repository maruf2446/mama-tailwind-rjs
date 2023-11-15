

const ConnectivCard = () => {
  return (
    <div className="max-w-[1240px] mx-auto pb-20 px-36">
      <div className=" flex flex-row">
        <figure><img className="h-[550px] w-[850px]" src="src/assets/img/connectiv.png" alt="Album" /></figure>
        <div className="card-body pl-20 mt-16">

          <div className="flex flex-row items-center uppercase text-xs font-bold leading-3 tracking-widest pb-4">
            <img className="w-[28px] h-[19px] ml-4" src="src/assets/img/conne.svg" alt="" />
            <p className="text-4xl font-bold leading-8 tracking-wider pl-3">Connectivity</p>
          </div>
          <p className="mt-3 text-sm font-normal ml-16">Last mile or first mile, fibre or copper, Ethernet or wireless, 20Mbs or 100Gbs - well always find the best-performing connectivity to fit your needs and location.</p>
          <div className="">

            <a href="#" className="mt-4  bg-black text-white uppercase rounded-3xl py-3 px-8 inline-block ml-16 hover:bg-transparent hover:border-blue-300 hover:text-red-600 duration-300 hover:border font-normal text-xs tracking-widest">Learn More</a>
          </div>
          <div className="mt-20 ml-4 font-serif text-3xl uppercase tracking-wider leading-normal space-y-1">
            <p className="w-auto h-[2px] bg-gray-200"></p>
            <h1 className="">Network Technologies</h1>
            <p className="w-auto h-[2px] bg-gray-200"></p>
            <h1>Managed Services</h1>
            <p className="w-auto h-[2px] bg-gray-200"></p>
            <h1>CLOUD CONNECTIVITY</h1>
            <p className="w-auto h-[2px] bg-gray-200"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectivCard;