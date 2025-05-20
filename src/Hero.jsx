function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100 text-center px-4">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">
        Hi, I'm Autumn Anderson!
      </h1>
      <p className="text-xl text-blue-600 mb-8">
        Self-taught. Coffee-fueled. Persuing my passions. 
      </p>

      <a
        href="#resume"
        className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition"
      >
        View My Resume
      </a>

      <div id="resume" className="mt-20 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Resume</h2>
        <p className="text-blue-600">
          This is where my full resume will go. Check back soon!
        </p>
      </div>
    </div>
  );
}

export default Hero;
