import React from 'react';

const GoogleFormEmbed = () => {
  return (
    <div className="bg-black py-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-blue-500 mb-6">
          Register for the BGMI Tournament
        </h2>
        <div className="overflow-hidden rounded-lg border-2 border-blue-500">
          <iframe
            src="https://forms.gle/v9GB7pPPDD5Hzx3a8"
            className="w-full h-96 sm:h-[30rem] md:h-[36rem] lg:h-[40rem]"
            frameBorder="0"
            allow="geolocation; microphone; camera"
            title="BGMI Tournament Registration"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GoogleFormEmbed;
