
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="max-w-[850px]  md:mx-auto mt-6 mb-5 mx-4 ">
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
          <h1 className="font-semibold text-xl ">Checkout</h1>
        </span>
        <span></span>
      </div>
      <div>
        <h1 className="font-semibold text-xl my-10 ">Payment</h1>

        <div className="bg-white rounded-xl shadow-sm">
          <div className="flex items-center gap-5 p-4 border-gray-200 border-b">
            <div>
              <img src="/visa.png" alt="visa" />
            </div>
            <div className="flex-grow flex justify-between items-center">
              <span className="font-semibold text-base">Debit/Credit card</span>
              <div>
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="radio"
                    name="flexRadioDefault"
                    id="radioDefault01"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 p-4 border-gray-200 border-b">
            <div>
              <img src="/paypal.png" alt="visa" />
            </div>
            <div className="flex-grow flex justify-between items-center">
              <span className="font-semibold text-base">PayPal</span>
              <div>
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="radio"
                    name="flexRadioDefault"
                    id="radioDefault01"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 p-4 border-gray-200 ">
            <div>
              <img src="/payoneer.png" alt="visa" />
            </div>
            <div className="flex-grow flex justify-between items-center">
              <span className="font-semibold text-base">Payoneer</span>
              <div>
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="radio"
                    name="flexRadioDefault"
                    id="radioDefault01"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-xl mb-3 mt-10 ">Delivery details</h1>
        <small className="text-gray-400 block">
          789 Maple Street, Los Angeles,
        </small>
        <small className="text-gray-400 block">CA 90001</small>

        <small className="text-gray-400">(888) 987-6543</small>
      </div>
      <div>
        <h1 className="font-semibold text-xl mb-3 mt-10 ">Order details</h1>
        <div className="flex gap-8 items-start">
          <div>
            <small className="text-gray-400 block">1x Green salad</small>
            <small className="text-gray-400 block">CA 90001</small>

            <small className="text-gray-400 block">(888) 987-6543</small>
          </div>
          <div>
            <small className="text-gray-400 block">3x Grilled steak</small>
            <small className="text-gray-400 block">1x vegan cake</small>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center my-6">
        <div className="flex flex-col mt-5">
          <span className="text-md text-gray-700 ">Total</span>
          <span className="flex gap-1 text-2xl ">
            <span className="font-bold">130</span>
            <span className="text-primary">$</span>
          </span>
        </div>
        <div>
        <Link to={'/success'}>
        <button className="bg-primary text-white font-normal py-2 px-4 rounded-full">
            Pay Now
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
