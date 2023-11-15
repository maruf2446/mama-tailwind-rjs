import img1 from "../assets/img/arrow01.svg.svg";

const Proctive = () => {
  return (
    <div className="text-center text-4xl font-light py-20">
      <div className="flex flex-row items-center justify-center uppercase space-x-2 text-xs font-bold leading-3 tracking-widest pb-3">
        <img className="w-[10px] h-[10px]" src={img1} alt="" />
        <p>solutions</p>
      </div>
      <h2 className="">Productivity solutions that <span className="font-bold">capitalise</span> <br /> on your network <span className="font-bold">investment</span></h2>
    </div>
  );
};

export default Proctive;