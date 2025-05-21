function Hero() {
  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen bg-cover bg-no-repeat text-center px-4"
      style={{
        backgroundImage: `url('/assets/background.png')`,
        backgroundPosition: 'center 40%',
        backgroundSize: 'cover',
      }}
    >
      {/* Optional: Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white/30 z-0"></div>

      <div className="relative z-10">
        <h1 className="text-5xl font-bold text-teal-700 mb-4 drop-shadow-lg">
          Hi, I'm Autumn Anderson!
        </h1>
        <p className="text-xl text-teal-600 mb-8 drop-shadow-md">
          Self-taught. Coffee-fueled. Pursuing my passions.
        </p>

        <a
          href="#resume"
          className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-500 transition shadow-md"
        >
          View My Resume
        </a>
      </div>
    </div>
  );
}

export default Hero;
