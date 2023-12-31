
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="max-w-[850px] md:mx-auto mt-6 mb-5 mx-4  ">
      <div className="flex items-center justify-between ">
        <span>
        <Link to="/">
          {/* SVG Back Button */}
          <svg
            width="30"
            height="30"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.95 9.88333L5.83331 20L15.95 30.1167M34.1666 20H6.11665"
              stroke="black"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
        </span>
        <span>
        </span>
        <span></span>
      </div>
      
     <div className="my-10">
     <h1 className="font-semibold text-xl text-center">"Congratulations! Your   Order Has Been Placed!" </h1>
     </div>
    
    <div className="flex justify-center">
        <img src="/rider.png" alt="" />
    </div>
    <p className="text-gray-400 text-center my-10 block">
    Thank you for choosing our services! Your order has been successfully placed and is now being processed. We appreciate your trust in us and look forward to serving you.
    </p>
    <div className="flex justify-center">
    <button className="bg-primary text-white font-normal py-2 px-4 rounded-full mx-auto my-6">
            Return to Home
          </button>

    </div>
      
    </div>
  );
};

export default Success;
