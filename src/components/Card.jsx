import React from "react";
import Button from "./Button";

function Card(props) {
  return (
    <>
      <div className="flex flex-col bg-white rounded-3xl max-w-xs w-64 h-auto  border border-transparent hover:border-yellow-500 p-4 shadow-lg transition duration-300 ">
        <div className="px-6  sm:p-10 sm:pb-6 flex-1">
          <div className="grid items-start justify-center w-full grid-cols-1 text-left">
            <div className="top-0"> 
              <h2 className="text-lg font-medium tracking-tighter text-black lg:text-2xl mb-4">
                {props.name}
              </h2>
              <p className="mt-2 text-sm  text-black mb-8">
                {props.description}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-end  bottom-4 left-0 w-full">
          <Button />
        </div>
      </div>
    </>
  );
}

export default Card;
