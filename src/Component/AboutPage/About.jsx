const About = () => {
  return (
    <section className="w-full py-10 text-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="text-center" data-aos="fade-down">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-400 tracking-wide transition duration-500">
            About Me
          </h1>
        </div>

        <div
          className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20"
          data-aos="fade-up">
          <div className=" max-w-sm overflow-hidden rounded-2xl border-2 border-blue-400">
            <img
              src="/images/Profile.jpg"
              alt="Profile"
              width={350}
              className="shadow-lg transform transition duration-700 hover:scale-110"
            />
          </div>

          <div className="flex flex-col gap-6 text-gray-300 max-w-2xl">
            <h2
              className="text-2xl sm:text-3xl font-semibold text-white transition duration-500"
              data-aos="fade-right">
              Hello! I'm <span className="text-blue-400">Bansi Raval</span>
            </h2>

            <p
              className="text-base sm:text-lg leading-relaxed"
              data-aos="fade-left">
              I'm a passionate Frontend Developer focused on building modern,
              responsive web applications using React.js. I love crafting clean
              user interfaces and ensuring smooth user experiences.
            </p>

            <p
              className="text-base sm:text-lg leading-relaxed"
              data-aos="fade-left"
              data-aos-delay="100">
              My journey in web development began with a curiosity about how
              websites are made, which soon turned into a deep passion for
              creating intuitive, engaging digital products.
            </p>

            <p
              className="text-base sm:text-lg leading-relaxed"
              data-aos="fade-left"
              data-aos-delay="200">
              When I’m not coding, you’ll find me exploring design inspiration,
              learning new technologies, or sharing knowledge through blogs and
              community events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
