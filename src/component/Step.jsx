import React from "react";
import { useNavigate } from "react-router-dom";

function StepOne() {
  const navigate = useNavigate();

  const showForm = () => {
    navigate("/step-two");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="uppercase bg-red-500 rounded-md w-[250px] h-[40px] text-white"
        onClick={showForm}
      >
        Start now!
      </button>
    </div>
  );
}

export default StepOne;
