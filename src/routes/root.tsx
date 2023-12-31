import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { cateogories, foodItems } from "../lib/constants";
import {  Cateogry, Food } from "../lib/types";
import { useAuthContext } from "../providers/FirebaseProvider";
import { useEffect, useState, useRef, useCallback } from "react";
import debounce from "lodash.debounce";
import FoodCard from "../components/FoodCard";

export default function Root() {
  const { user } = useAuthContext();
  const [filteredItems, setFilteredItems] = useState<Food[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setFilteredItems(foodItems);
  }, []);

  const handleSearch = useCallback(
    debounce(() => {
      if (searchRef.current) {
        const searchValue = searchRef.current.value.toLowerCase();
        const filtered = foodItems.filter((item) =>
          item.title.toLowerCase().includes(searchValue)
        );
        setFilteredItems(filtered);
      }
    }, 300),
    []
  );

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="mt-7  mx-4 md:mx-0">
        <h1 className="font-medium text-xl">Cateogories : </h1>

        <div className="flex gap-6 my-4 overflow-scroll">
          {cateogories.map((cateogory: Cateogry) => (
            <div
              className="py-2 px-3 flex gap-2 items-start rounded-xl w-44 h-20 overflow-hidden relative min-w-44 "
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
      <div className="mt-12 mb-10 flex justify-between items-center flex-col md:flex-row w-full  mx-4 md:mx-0">
      <div className="w-full md:w-auto">
          <h1 className="font-semibold text-2xl">Hey {user?.email.split('@')[0]} 👋</h1>
          <span className="text-xs">It’s dinner time!</span>
        </div>
        <div className="w-full md:w-auto mt-4">
          <form className="flex gap-2 md:gap-4 max-w-[560px] mx-auto ">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search for Chicken Biriyani , Karahi , Pizza"
              className="p-2 px-4 rounded-md border outline-none focus-within:border-bg-primary border-gray-200 grow w-full"
              ref={searchRef}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-primary basis-2/12 text-center text-white p-2 flex justify-center gap-2 items-center md:px-8 rounded-md text-sm md:text-base"
            >
              <MagnifyingGlassIcon className="w-4 h-4" />
              <span className="hidden md:block">Search</span>
            </button>
          </form>
        </div>
      </div>
      <div className="mt-12 mb-10  mx-4 md:mx-0">
        <div>
          <h1 className="font-medium text-xl">Recommended Items : </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center items-center w-full mt-10">
            {filteredItems.map(
              (food: Food) => {
                return (
         <FoodCard food={food} key={food.id}/>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
}
