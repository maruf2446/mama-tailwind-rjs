import './Hood.css'
const Hood = () => {
  return (
    <div className='max-w-[1240px] mx-auto'>
      <div className=" min-h-screen" style={{ backgroundImage: 'url(src/assets/img/hood.png)' }}>
        <div className="pt-64">
          <div className="flex flex-row justify-center items-center pb-4 space-x-2">
            <img className="w-2.5 h-2.5" src="src/assets/img/arrow01.svg.svg" alt="" />
            <p className="uppercase text-xs font-bold leading-3 tracking-widest text-white">Hood group case study</p>
          </div>
          <div className="text-center text-white">
            <h1 className="uppercase mb-5 text-8xl font-light tracking-tighter">Hood Group</h1>

            <p className="mb-5 text-base font-normal leading-7">Optinet ensures contact centre agents maintain  <br /> uninterrupted conversation during network outages</p>
            <a href="#" className="mt-3  bg-white text-black uppercase rounded-3xl py-5 px-16 inline-block hover:bg-transparent hover:border-white hover:text-black duration-300 hover:border font-normal text-xs tracking-widest">Read more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hood;