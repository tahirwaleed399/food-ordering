import React from "react";

const Cart = () => {
  return (
    <div className="max-w-[850px]  mx-auto mt-6 mb-5">
      <div className="flex items-center justify-between ">
        <span>
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
        </span>
        <span>
          <h1 className="font-semibold text-xl ">My Cart</h1>
        </span>
        <span></span>
      </div>

      <div className="items flex flex-col gap-8 py-10">
        <div className="bg-white rounded-lg flex p-3 gap-8">
          <div>
            <img
              src="https://uizard.io/static/c83d44255adb4319b74d4b6e0e046911/4693b/Quick-Bite-Mobile-Checkout.webp"
              alt="image"
              className="h-28 w-28 rounded-md"
            />
          </div>
          <div className="flex-grow  flex flex-col justify-between h-28">
            <h1 className="font-medium text-lg ">
              Green salad with mashed potatots
            </h1>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Quantity 2</span>
              <span className="flex gap-1">
                <span className="text-primary">$</span>
                <span className="font-medium text-md">24.44</span>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg flex p-3 gap-8">
          <div>
            <img
              src="https://uizard.io/static/c83d44255adb4319b74d4b6e0e046911/4693b/Quick-Bite-Mobile-Checkout.webp"
              alt="image"
              className="h-28 w-28 rounded-md"
            />
          </div>
          <div className="flex-grow  flex flex-col justify-between h-28">
            <h1 className="font-medium text-lg ">
              Green salad with mashed potatots
            </h1>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Quantity 2</span>
              <span className="flex gap-1">
                <span className="text-primary">$</span>
                <span className="font-medium text-md">24.44</span>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg flex p-3 gap-8">
          <div>
            <img
              src="https://uizard.io/static/c83d44255adb4319b74d4b6e0e046911/4693b/Quick-Bite-Mobile-Checkout.webp"
              alt="image"
              className="h-28 w-28 rounded-md"
            />
          </div>
          <div className="flex-grow  flex flex-col justify-between h-28">
            <h1 className="font-medium text-lg ">
              Green salad with mashed potatots
            </h1>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Quantity 2</span>
              <span className="flex gap-1">
                <span className="text-primary">$</span>
                <span className="font-medium text-md">24.44</span>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg flex p-3 gap-8">
          <div>
            <img
              src="https://uizard.io/static/c83d44255adb4319b74d4b6e0e046911/4693b/Quick-Bite-Mobile-Checkout.webp"
              alt="image"
              className="h-28 w-28 rounded-md"
            />
          </div>
          <div className="flex-grow  flex flex-col justify-between h-28">
            <h1 className="font-medium text-lg ">
              Green salad with mashed potatots
            </h1>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Quantity 2</span>
              <span className="flex gap-1">
                <span className="text-primary">$</span>
                <span className="font-medium text-md">24.44</span>
              </span>
            </div>
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
        <button className="bg-primary text-white font-normal py-2 px-4 rounded-full">
  Checkout
</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
