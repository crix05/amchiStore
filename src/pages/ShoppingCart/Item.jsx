import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const Item = ({ title, description, price, img, quantity }) => {
  return (
    <>
      <div className="border-2 border-neutral-200 rounded-md h-auto py-5 px-8 flex justify-between items-center my-4 overflow-x-scroll scrollbar-hide ">
        <div className=" flex min-w-[300px] max-md:min-w-[200px] max-md:max-w-[200px] items-center">
          <img className="w-12 h-12 mx-2 rounded-full" src={img} />
          <div className="text-md">
            <h2 className="h2-title">{title}</h2>
          </div>
        </div>
        <div className="min-w-[200px] max-md:min-w-[100px]">$170</div>

        <div className="min-w-[200px] max-md:min-w-[100px] text-center">
          <input
            type="number"
            min="1"
            max="10"
            className="border-2 text-center border-neutral-200 py-2 rounded-md focus:outline-none text-neutral-500 px-1"
          />
        </div>
        <div className="min-w-[200px] max-md:min-w-[100px] text-right">
          <h3 className="h3-price-cart">{price}</h3>
        </div>
      </div>
    </>
  );
};

export default Item;
