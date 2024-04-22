import React, { useState } from "react";
import { useFormContext, useForm } from "react-hook-form";

function StepTwo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Enter you name"
          {...register("name", { required: true })}
          className="border rounded-md p-[10px] outline-none"
        />
        {errors.name && <p className="text-red-500">This field is required</p>}
        <button
          type="submit"
          className="bg-red-500 text-white uppercase mt-[15px] rounded-md h-[40px]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default StepTwo;
