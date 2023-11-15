import './Hero.css'
const Hero = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <div className='hero'>
        <img className='w-[100%] h-[69%]' src="/src/assets/img/div.png" alt="" />
        <div id='text' className=''>
          <h2 className="">Turning complex network technology</h2>
          <p className=''>into <span className='font-bold'>business solutions that save you <br /> time money and stress</span></p>
        </div>
      </div>
    </div>
  );
};

export default Hero;