
const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-20 bg-black">
      <div className="grid grid-cols-2 text-white px-36 space-x-20">
        <div>
          <h2 className="text-4xl  leading-10">Ready to <span className="font-bold">revolutionise </span>
            your business communications
            <span className="font-bold"> with unrivalled speed?</span></h2>

          <a href="#" className="mt-6  bg-white text-black uppercase rounded-3xl py-3 px-6 inline-block hover:bg-transparent hover:border-blue-300 hover:text-white duration-300 hover:border font-normal text-xs tracking-widest">get in touch</a>
        </div>

        <div className="grid grid-cols-2 space-x-14">
          <div className="mt-5">
            <h2 className="pb-7 text-base font-normal">Optinet UK Limited</h2>
            <div className="text-base font-normal leading-7 pb-7">
              <h2>HEAD OFFICE</h2>
              <p>Floor 37</p>
              <p>One Canada Sqare</p>
              <p>London E14 5AA</p>
            </div>
            <div className="text-base font-normal leading-7 pb-12">
              <h1>SOUTHEND </h1>
              <p>Skyline Plaza</p>
              <p>Victoria Avenue</p>
              <p>Southend Essex SS2 6BB</p>
            </div>
            <div>
              <h1 className="text-center uppercase text-xs font-bold leading-7 tracking-widest">Get directions</h1>
              <p className="text-center text-lg font-normal leading-7 mt-20">+8801720438804</p>
              <p className="text-center text-lg font-normal leading-7 mt-16">maruf2446@gmail.com</p>
            </div>
          </div>

          <div className="uppercase text-base font-normal mt-5">
            <h1>Aout us</h1>
            <p>careers</p>
            <p>partners</p>
            <p>privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;