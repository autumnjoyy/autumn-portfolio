import React from 'react';

function Hero() {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/floral-bg.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-green-100 bg-opacity-70 p-8 rounded-xl text-center text-teal-800">
        <h1 className="text-5xl mb-4 italic">Hi, I'm Autumn Anderson!</h1>
        <p className="text-xl">Self-taught. Coffee-fueled. Pursuing my passions.</p>
      </div>
    </section>
  );
}

export default Hero;
