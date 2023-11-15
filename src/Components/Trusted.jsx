import img1 from "../assets/img/Corus-Hotels-logo-2020-greyscale.jpg.png"
import img2 from "../assets/img/siemens.png.png"
import img3 from "../assets/img/samsung.png.png"
import img4 from "../assets/img/bellway.png.png"
import img5 from "../assets/img/otis.png.png"
import img6 from "../assets/img/ncp.png.png"
import img7 from "../assets/img/Corus-Hotels-logo-2020-greyscale.jpg.png"
const Trusted = () => {
  return (
    <div className="max-w-[1240px] mx-auto pb-14">
      <h2 className="pb-10 uppercase text-center text-xs font-bold leading-3 tracking-widest">trusted by</h2>
      <div className="flex flex-row items-center justify-center space-x-16">
        <img className="h-14 w-24"  src={img1} alt="" />
        <img className="h-6 w-36" src={img2} alt="" />
        <img className="h-6 w-36" src={img3} alt="" />
        <img className="h-9 w-32" src={img4} alt="" />
        <img className="h-6 w-20" src={img5} alt="" />
        <img className="h-9 w-28" src={img6} alt="" />
        <img className="h-14 w-24" src={img7} alt="" />
      </div>
    </div>
  );
};

export default Trusted;