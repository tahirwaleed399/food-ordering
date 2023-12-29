import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { cateogories, foods } from "../lib/constants";
import { Cateogry } from "../lib/types";
import classNames from "classnames";

export default function Root() {
  return (
    <>
      <div className="mt-7">
        <h1 className="font-medium text-xl">Cateogories : </h1>

        <div className="flex gap-6 my-4">
          {cateogories.map((cateogory: Cateogry) => (
            <div
              className="py-2 px-3 flex gap-2 items-start rounded-xl w-44 h-20 overflow-hidden relative"
              style={{ background: cateogory.color }}
            >
              <span className="mt-2 font-medium">{cateogory.name}</span>
              <img
                src={cateogory.logo}
                alt="Image"
                className="max-h-full max-w-full self-end absolute -bottom-5 -right-3"
              />
            </div>
          ))}
        </div>
        <div></div>
      </div>
      <div className="mt-12 mb-10 flex justify-between items-center">
        <div>
          <h1 className="font-semibold text-2xl">Hey Danyal 👋</h1>
          <span className="text-xs">It’s dinner time!</span>
        </div>

        <div>
          <form
            // onSubmit={handleSearch}
            className="flex gap-2 md:gap-4 max-w-[560px] mx-auto "
          >
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search for Chicken Biriyani , Karahi , Pizza"
              className="p-2 px-4 rounded-md border outline-none focus-within:border-bg-primary border-gray-200 grow w-full"
              // ref={serachRef}
            />
            <button
              type="submit"
              className="bg-primary basis-2/12 text-center text-white p-2 flex justify-center gap-2 items-center md:px-8 rounded-md text-sm md:text-base"
            >
              <MagnifyingGlassIcon className="w-4 h-4" />{" "}
              <span className="hidden md:block">Search</span>
            </button>
          </form>
        </div>
      </div>
      <div className="mt-12 mb-10">
        <div>
          <h1 className="font-medium text-xl">Recommended Items : </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-between w-full mt-10">
            {foods.map(
              (food: {
                title: string;
                price: number;
                isFavourite: boolean;
                image: string;
              }) => {
                return (
                  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                    <a href="#">
                      <img
                        className="rounded-t-lg h-52 w-full object-cover"
                        src={food.image}
                        alt=""
                      />
                    </a>
                    <div className="p-2">
                      <a href="#">
                        <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-900 ">
                          {food.title}
                        </h5>
                        <div className="w-full flex justify-between items-center mt-3 mb-2">
                          <span className="flex gap-1">
                            <span className="text-primary">
                              $
                            </span>
                            <span className="font-normal">
                              {food.price}
                            </span>
                          </span>

                          <div>
                          <svg width="18" height="17" viewBox="0 0 18 17" fill={food.isFavourite ? 'red' : 'white'} xmlns="http://www.w3.org/2000/svg">
<path d="M9.496 15.9242C9.224 16.0253 8.776 16.0253 8.504 15.9242C6.184 15.0899 1 11.6096 1 5.71067C1 3.10674 2.992 1 5.448 1C6.904 1 8.192 1.74157 9 2.88764C9.41102 2.3027 9.94638 1.8273 10.5632 1.4995C11.18 1.17171 11.8611 1.00064 12.552 1C15.008 1 17 3.10674 17 5.71067C17 11.6096 11.816 15.0899 9.496 15.9242Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
}
