function Hero() {
  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center text-center px-4"
      style={{
        backgroundImage: `url('/assets/background.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-0"></div>

      <div className="relative z-10">
        <h1 className="text-5xl font-bold text-teal-700 mb-4">
          Hi, I'm Autumn Anderson!
        </h1>
        <p className="text-xl text-teal-600 mb-8">
          Self-taught. Coffee-fueled. Pursuing my passions.
        </p>

        <a
          href="#resume"
          className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-500 transition"
        >
          View My Resume
        </a>
      </div>
    </div>
  );
}

export default Hero;