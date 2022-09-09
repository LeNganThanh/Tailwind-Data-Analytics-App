import React from "react";

export default function Newsletter() {
  return (
    <div className="w-full py-16 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 px-4">
        <div className="lg:col-span-2 my-4">
            <h1 className="md:text-4xl sm:text-3xl font-bold py-2 ">Want tips & tricks to optimize your flow?</h1>
            <p>Sign up to our newsletter and stay up to date.</p>  
            </div>
            <div className="my-4">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                    <input className="m-3 mx-0 px-2 flex w-full rounded-md text-black" type="email" placeholder="Enter email" />
                    <button className="bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 mx-auto py-3 text-black">Notify me</button>
                </div>
                <p>We care about the protection of your data. Read our <span className="text-[#00df9a]">Privacy Policy</span> </p>
            </div>
        </div>
    </div>
  );
}
