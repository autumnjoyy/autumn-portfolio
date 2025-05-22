import React from 'react';

function Hero() {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-teal-800 text-center"
      style={{
        backgroundImage: "url('/assets/floral-bg.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-5xl mb-4 italic">Hi, I'm Autumn Anderson!</h1>
      <p className="text-xl">Self-taught. Coffee-fueled. Pursuing my passions.</p>
    </section>
  );
}

export default Hero;
