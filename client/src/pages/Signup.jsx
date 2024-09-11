import React from "react";

const Signup = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input type="text" id="username" placeholder="username" className="border p-3 rounded-lg" />
        <input type="email" id="email" placeholder="email" className="border p-3 rounded-lg" />
        <input type="password" id="password" placeholder="password" className="border p-3 rounded-lg" />
      </form>
    </div>
  );
};

export default Signup;
