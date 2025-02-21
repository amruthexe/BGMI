
import React from 'react';

import whatsappLogo from '../../public/img/whatsapp1.png';

const WhatsAppButton = () => {
  const whatsappGroupLink = "https://chat.whatsapp.com/FOdZOTLQeNBGIhB6vV1uie";

  const goToWhatsAppGroup = () => {
    window.open(whatsappGroupLink, '_blank');
  };

  return (
    <div
      className="fixed bottom-0 left-0 w-full border rounded-lg  bg-white/80 p-2 text-center z-50 cursor-pointer animate-blink hover:bg-gray-200"
      onClick={goToWhatsAppGroup}
    >
      <img src={whatsappLogo} alt="WhatsApp Logo" className="w-12 h-auto inline-block mr-2 align-middle" />
      <span className="text-lg font-bold align-middle">Join our WhatsApp Group!
      </span>
  

    </div>
  );
};

export default WhatsAppButton;

