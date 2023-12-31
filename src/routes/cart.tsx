import { Link } from "react-router-dom";
import { foodItems } from "../lib/constants";


// Cart items
const cart = [
  { ...foodItems[0], quantity: 1 }, // 1 Steak
  { ...foodItems[1], quantity: 2 }, // 2 Soups
];

const Cart = () => {
  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="max-w-[850px] mx-4 md:mx-auto mt-6 mb-5">
      <div className="flex items-center justify-between">
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
        <h1 className="font-semibold text-xl">My Cart</h1>
        <span></span>
      </div>

      <div className="items flex flex-col gap-8 py-10">
        {cart.map((item, index) => (
        <div key={index} className="bg-white rounded-lg flex p-3 gap-8">
        <div>
          <img
            src={item.url}
            alt={item.title}
            className="h-28 w-28 rounded-md"
          />
        </div>
        <div className="flex-grow flex flex-col justify-between h-28">
          <h1 className="font-medium text-lg">{item.title}</h1>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Quantity {item.quantity}</span>
            <span className="flex gap-1">
              <span className="text-primary">$</span>
              <span className="font-medium text-md">{item.price.toFixed(2)}</span>
            </span>
          </div>
        </div>
      </div>
        ))}
      </div>

      <div className="flex justify-between items-center my-6">
        <div className="flex flex-col mt-5">
          <span className="text-md text-gray-700">Total</span>
          <span className="flex gap-1 text-2xl">
            <span className="font-bold">{totalPrice.toFixed(2)}</span>
            <span className="text-primary">$</span>
          </span>
        </div>
        <Link to={'/checkout'}>
        <button className="bg-primary text-white font-normal py-2 px-4 rounded-full">
          Checkout
        </button></Link>
      </div>
    </div>
  );
};

export default Cart;
