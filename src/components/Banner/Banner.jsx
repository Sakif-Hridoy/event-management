import banner from "../../assets/banner.jpg";
import "./Banner.css";

const Banner = (props) => {
  return (
    <div className="container">
      <img className="mx-auto w-[95%] h-[630px]" src={banner} alt="" />
      <h2 className="banner-txt text-3xl md:text-6xl lg:text-6xl font-semibold">
        Easy Way to Find a <br /> Perfect Property
      </h2>
      <p className="banner-txtp">
        Find and Book Your Dream House <br /> On This Big Event<br /> @realestateevent2023
      </p>
      <h2 className="text-4xl text-center mt-20 font-semibold">Properties are Increasing</h2>
    </div>
  );
};

export default Banner;
