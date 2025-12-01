import React from "react";
import UnderConstruction from "../assets/UnderConstruction/2414034.jpg";
import { Link } from "react-router-dom";
export default function UnserConstruction() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100 antialiased">
        <div className="bg-white/20 p-3 text-2xl text-center font-semibold">
          <h1>Project is Under Construnction</h1>
        </div>
        <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 lg:w-1/3 lg:my-10 mx-auto sm:my-24 md:my-24">
          <img src={UnderConstruction} alt="Under Construction img" className="w-full"/>
        </div>
        <div className="bg-white/20 fixed bottom-0 w-full text-center p-4">
          <Link to='/' className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-3 text-xl font-bold rounded-md underline">Go To Home</Link>
        </div>
      </div>
    </>
  );
}
