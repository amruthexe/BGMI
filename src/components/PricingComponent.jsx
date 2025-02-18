import React, { useState } from "react";

const PricingComponent = () => {
  // State for dynamically adjusting the prize based on the number of registrations
  const [registrations, setRegistrations] = useState(50); // You can adjust this number as per your logic
  
  const calculatePrize = (basePrize) => {
    // Example: increase the prize by 10% for every 10 registrations
    const increaseFactor = Math.floor(registrations / 10);
    return basePrize + (basePrize * 0.1 * increaseFactor);
  };

  return (
    <section className="min-h-screen bg-black text-orange-600 py-10 px-5 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto bg-transparent p-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          We're thrilled to unveil the prize pool for #BECTAGON BGMI!
        </h2>

        {/* Pricing Options */}
        <div className="space-y-6">
          <div className="bg-red-700 text-white p-6 rounded-xl shadow-xl flex justify-between items-center">
            <span className="text-lg font-semibold">1st Winner</span>
            <span className="text-3xl font-bold">₹ 750</span>
          </div>
          <div className="bg-orange-600 text-white p-6 rounded-xl shadow-xl flex justify-between items-center">
            <span className="text-lg font-semibold">2nd Winner</span>
            <span className="text-3xl font-bold">₹ 500</span>
          </div>
          <div className="bg-orange-400 text-white p-6 rounded-xl shadow-xl flex justify-between items-center">
            <span className="text-lg font-semibold">3rd Winner</span>
            <span className="text-3xl font-bold">₹ 250</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Note: Prize pool will vary according to registrations
          </p>

          {/* Blinking Red Text */}
          <p className="text-red-600 font-bold text-xl mt-4 animate-pulse">
            Hurry up! The prize pool increases with more registrations!
          </p>

          <div className="mt-4 flex justify-center gap-4">
            <a
              href="https://instagram.com/_star__obito_"
              target="_blank"
              className="text-orange-500 hover:text-orange-700"
            >
              <i className="fab fa-instagram"></i> _star__obito_
            </a>
            <a
              href="tel:+918008640916"
              className="text-orange-500 hover:text-orange-700"
            >
              <i className="fas fa-phone"></i> +91 8008640916
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComponent;
