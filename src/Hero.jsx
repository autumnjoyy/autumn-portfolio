function Hero() {
  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen bg-none bg-cover bg-center text-center px-4"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}assets/background.png)`,
      }}
    >
      {/* White overlay for readability */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

      {/* Hero content */}
      <div className="relative z-10">
        <h1
          className="text-6xl mb-4 text-teal-700"
          style={{ fontFamily: "'Monsieur La Doulaise', cursive" }}
        >
          Hi, I'm Autumn Anderson!
        </h1>

        <p
          className="text-xl text-teal-600 mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Self-taught. Coffee-fueled. Pursuing my passions.
        </p>

        <a
          href="#resume"
          className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-500 transition text-lg"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          View My Resume
        </a>
      </div>
    </div>
  );
}

export default Hero;
