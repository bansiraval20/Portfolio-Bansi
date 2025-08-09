const About = () => {
  return (
    <section className="w-full py-14 text-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 px-4">
        
        {/* Heading */}
        <div className="text-center" data-aos="fade-down">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-400 tracking-wide relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-1/2 w-16 h-1 bg-blue-500 rounded-full transform -translate-x-1/2"></span>
          </h1>
        </div>

        {/* Content */}
        <div
          className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20"
          data-aos="fade-up"
        >
          {/* Profile Image */}
          <div className="max-w-sm overflow-hidden rounded-2xl border-2 border-blue-400 shadow-xl hover:shadow-blue-500/40 transition-all duration-500">
            <img
              src="/images/Profile.jpg"
              alt="Profile"
              className="w-full h-auto object-cover transform transition duration-700 hover:scale-105"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-6 text-gray-300 max-w-2xl">
            <h2
              className="text-2xl sm:text-3xl font-semibold text-white"
              data-aos="fade-right"
            >
              Hello! I'm{" "}
              <span className="text-blue-400 underline decoration-blue-500 decoration-2 underline-offset-4">
                Bansi Raval
              </span>
            </h2>

            <p
              className="text-base sm:text-lg leading-relaxed"
              data-aos="fade-left"
            >
              I’m a passionate <span className="text-blue-400 font-medium">Frontend Developer</span> 
              dedicated to building modern, responsive web applications with 
              <span className="text-blue-400"> React.js</span>. My work focuses on creating clean 
              user interfaces and ensuring smooth, delightful user experiences.
            </p>

            <p
              className="text-base sm:text-lg leading-relaxed"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              My journey began with curiosity about how websites work, which soon 
              evolved into a deep passion for crafting intuitive, high-quality 
              digital products that make a real impact.
            </p>

            <p
              className="text-base sm:text-lg leading-relaxed"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              When I’m not coding, I’m exploring design inspiration, learning 
              emerging technologies, or sharing knowledge with the developer 
              community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
