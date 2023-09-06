"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const router = useRouter();
  const [formValue, setFormValue] = useState({
    password: "1234",
  });

  const inputChange = (name, value) => {
    setFormValue((formValue) => ({
      ...formValue,
      [name]: value,
    }));
  };
  const Submit = async (e) => {
    e.preventDefault();
  };

  const handleSubmit = async () => {
    if (formValue.password.length === 0) {
      alert("Please Required password");
    } else {
      const response = await fetch("/api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValue),
      });
      // jodi condition true hoi ta hle dashboard page nia jabo.
      const data = await response.json();
      if (data["status"] === true) {
        router.replace("/dashboard");
      } else {
        alert(data["message"]);
      }
    }
  };
  return (
    <>
      <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="relative py-3 sm:w-96 mx-auto text-center">
          <span className="text-2xl font-light ">Verifications Code</span>
          <div className="mt-4 bg-white shadow-md rounded-lg text-left">
            <div className="h-2 bg-purple-400 rounded-t-md"></div>
            <div className="px-8 py-6 ">
              <label className="block font-semibold">
                {" "}
                Type Verifications Code{" "}
              </label>

              <form onSubmit={Submit} className="">
                <input
                  className=""
                  value={formValue.password}
                  onChange={(e) => inputChange("password", e.target.value)}
                  type="password"
                  placeholder="XXXXXXX"
                />
              </form>

              <div className="flex justify-between items-baseline">
                <button
                  onClick={handleSubmit}
                  className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 "
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
