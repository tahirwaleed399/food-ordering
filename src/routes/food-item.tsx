
import { Link, useParams } from "react-router-dom";
import { foodItems } from "../lib/constants";

const FoodItem = () => {
  const { id } = useParams();
  const foodItem = foodItems.find((food)=> food.id === id);
  return (
    <div className="max-w-[850px]  mx-auto mt-6 mb-5">
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
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.7666 26.8238C15.2938 26.9988 14.5152 26.9988 14.0424 26.8238C10.0101 25.3803 1 19.3581 1 9.15105C1 4.64537 4.46222 1 8.7309 1C11.2615 1 13.5001 2.28317 14.9045 4.26625C15.6189 3.25412 16.5494 2.4315 17.6214 1.86431C18.6935 1.29711 19.8773 1.00111 21.0781 1C25.3468 1 28.809 4.64537 28.809 9.15105C28.809 19.3581 19.7989 25.3803 15.7666 26.8238Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
      <div className="flex gap-2  w-max-content mt-7 items-center">
        <div className="w-1/2 self-start">
          <h1 className="font-semibold text-xl mt-4 ">
           {foodItem?.title}
          </h1>
          <span className=" text-sm text-gray-400">By Waleed Tahir</span>
          <span className="flex gap-2 mt-3 items-center">
            <span>
              <svg
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.54894 0.927049C9.8483 0.0057385 11.1517 0.0057404 11.4511 0.927051L13.0819 5.9463C13.2158 6.35833 13.5997 6.63729 14.033 6.63729H19.3105C20.2792 6.63729 20.682 7.8769 19.8983 8.4463L15.6287 11.5484C15.2782 11.803 15.1315 12.2544 15.2654 12.6664L16.8963 17.6857C17.1956 18.607 16.1411 19.3731 15.3574 18.8037L11.0878 15.7016C10.7373 15.447 10.2627 15.447 9.91221 15.7016L5.64258 18.8037C4.85887 19.3731 3.80439 18.607 4.10374 17.6857L5.7346 12.6664C5.86847 12.2544 5.72181 11.803 5.37132 11.5484L1.10169 8.4463C0.317977 7.8769 0.720754 6.63729 1.68948 6.63729H6.96703C7.40026 6.63729 7.78421 6.35833 7.91809 5.9463L9.54894 0.927049Z"
                  fill="#FFB300"
                />
              </svg>
            </span>
            <span>4.5</span>
          </span>

          <div className="flex gap-4 items-center mt-4">
            <span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 21H29M21 29V13M21 41C32 41 41 32 41 21C41 10 32 1 21 1C10 1 1 10 1 21C1 32 10 41 21 41Z"
                  stroke="#E74C1B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span className="text-lg font-medium">1</span>

            <span>
              <svg
                width="38"
                height="39"
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.84 24.1429H31.84M23.84 44.1429C34.84 44.1429 43.84 35.1429 43.84 24.1429C43.84 13.1429 34.84 4.14285 23.84 4.14285C12.84 4.14285 3.84003 13.1429 3.84003 24.1429C3.84003 35.1429 12.84 44.1429 23.84 44.1429Z"
                  stroke="#E74C1B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold text-md">Description : </h3>
            <p className="text-gray-400 my-1 text-sm">
              {foodItem?.description}
            </p>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <img
            src={foodItem?.url}
            alt="Iamge"
            className="w-full h-full max-h-80 rounded-sm max-w-96 object-cover"
          />
        </div>
      </div>

      <div className="flex justify-between items-center my-6">
        <div className="flex flex-col mt-5">
          <span className="text-md text-gray-700 ">Price</span>
          <span className="flex gap-1 text-2xl ">
            <span className="font-bold">{foodItem?.price}</span>
            <span className="text-primary">$</span>
          </span>
        </div>
        <div>
        <Link to={'/cart'}>
        <button className="bg-primary text-white font-normal py-2 px-4 rounded-full">
  Add To Cart
</button></Link>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
