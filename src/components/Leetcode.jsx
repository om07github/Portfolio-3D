import React from "react";

const Leetcode = () => {
  const leetcode = import.meta.env.VITE_LEETCODE_LINK;
  return (
    <section className="w-full py-10 px-4 md:px-10 mt-8 md:mt-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 ">
          LeetCode Progress
        </h2>
        <p className=" text-sm md:text-lg text-gray-600">
          Solving challenges. Sharpening skills. Climbing the LeetCode ladder
          one problem at a time.
        </p>

        {/* LeetCode Badge */}
        <div className="flex justify-center">
          <img
            src={leetcode}
            className="rounded-lg shadow-lg w-full my-10 md:h-[450px] bg-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Leetcode;
