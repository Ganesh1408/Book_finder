import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="h-screen w-screen">
      {/* <h3 className="pl-42 pt-10 text-2xl font-bold decoration-green-500">ReadNow</h3> */}
      <span className="ml-22 sm:ml-32 pt-10 md:ml-40 font-bold text-2xl inline-block relative after:content-[''] after:block after:absolute after:left-0 after:bottom-0 after:w-[50%] after:h-1 after:bg-teal-500">
        ReadNow
      </span>
      <div className=" flex flex-col sm:flex-col md:flex-row  justify-evenly items-center ">
        <div className="  overflow-hidden flex flex-col justify-center items-center order-2 sm:order-2 md:order-1">
          <div className="w-full max-w-[70%] sm:max-w-[70%] md:max-w-[60%] ">
            <h2 className="font-mono mt-4 sm:mt-4 md:mt-0 text-2xl sm:text-2xl md:text-3xl font-bold">
              <span className="text-teal-500">Every Book</span> You Want, One
              Search Away
            </h2>
            <p className=" text-left text-[14px] sm:text-[14px] md:text-[16px] mt-4">
              Book are the quitest and most constant of the friends,they are
              most accessible and wisest of counselors, and the most patient of
              the teachers
            </p>
            <Link to="/getBook">
              <button
  className="relative overflow-hidden w-[136px] h-[48px] font-semibold rounded-[6px] border-2 border-teal-500 shadow-lg text-teal-500 mt-6 transition-all duration-300 ease-in-out
             before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:bg-teal-500 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:text-white"
>
  <span className="relative z-10">Visit Library</span>
</button>

            </Link>
          </div>
        </div>
        <img
          src="/book.jpg"
          alt="landing_page_img"
          className="w-[420px] h-[320px] order-1 mt-4 sm:mt-4 md:mt-0  sm:order-1 md:order-2 sm:w-[550px] sm:h-[420px]  md:w-[700px] md:h-[600px] md:relative md:top-10 md:mr-30 "
        />
      </div>
    </div>
  );
}
export default LandingPage;
