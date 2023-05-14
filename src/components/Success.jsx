import React from 'react';

const Success = () => {
  const handleCheckEmail = () => {
    // Assuming the user's email is stored in the 'email' variable
    const email = 'user@example.com';

    // Create a mailto link with the user's email address
    const mailtoLink = `mailto:${email}`;

    // Open the user's default email client or email provider website
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex mf:flex-row flex-col items-center justify-center">
      <p className="sm:text-6xl text-[#0d0630] pt-80 text-3xl text-center my-20 gothic break-words" style={{ fontSize: '48px' }}>
        Thanks for your order!
      </p>
      <p className='roboto'>Check your email for order details</p>
      {/* <button
        className="text-center break-words justify-center items-center roboto text-white px-8 py-1 rounded-full font-semibold shadow-xl bg-[#3A86FF] hover:bg-[#FFBE0B]"
        onClick={handleCheckEmail}
      >
        Check Email
      </button> */}
    </div>
  );
};

export default Success;
