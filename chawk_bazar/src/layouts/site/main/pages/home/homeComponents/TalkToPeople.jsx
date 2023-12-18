import React from "react";
import img from "../../../../../../assets/support.webp";

export default function TalkToPeople() {
  return (
    <section>
      <div className="px-4 mb-4 md:px-8 2xl:px-16 py-6 md:py-8 lg:py-10 xl:py-12">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-5">Talk To A Real Person</h3>
          <p className="text-sm text-gray-600">
            Are you on the fence? Have a question? Need a recommendation? <br />
            Member Services is always here to help. Send us a message.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img src={img} />
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-black cursor-pointer text-white px-8 py-4 rounded-md">
            Chat With Member Services
          </div>
        </div>
      </div>
    </section>
  );
}
