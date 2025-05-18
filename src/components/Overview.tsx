
const Overview = () => {
  return (
    <section id="overview" className="bg-background py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-background/80 moving-gradient section-gradient"></div>
      
      {/* Subtle graphics */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full border border-blue-500/10 opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full border border-blue-500/10 opacity-30"></div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">Project Overview</h2>
        <p className="section-description">
          The Dynamic Sign Language Translator is a cutting-edge application designed to bridge communication gaps between the deaf community and those unfamiliar with sign language.
        </p>
        
        <div className="grid md:grid-cols-2 gap-16 items-center mt-20">
          <div className="reveal p-6">
            <h3 className="text-3xl font-bold mb-6 gradient-text">Empowering Communication</h3>
            <p className="text-xl text-blue-100/80 mb-8">
              Our project aims to create an accessible, real-time translation system that converts American Sign Language (ASL) gestures into text and speech, enabling seamless communication between deaf and hearing individuals.
            </p>
            <p className="text-xl text-blue-100/80">
              Developed as part of our senior computer science project, this translator combines computer vision, machine learning, and natural language processing to create an intuitive and accurate translation experience.
            </p>
          </div>
          <div className="glass-effect p-10 rounded-3xl shadow-lg reveal border border-white/5 bg-secondary/30 backdrop-blur-sm transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
            <h4 className="text-2xl font-semibold mb-8 gradient-text">Project Goals</h4>
            <ul className="space-y-6">
              {[
                "Create an accessible tool for real-time sign language translation",
                "Achieve high accuracy in gesture recognition across various lighting conditions",
                "Develop a user-friendly interface for both deaf and hearing users",
                "Build a foundation for future expansion to multiple sign languages",
                "Contribute to the growing field of accessibility technology"
              ].map((goal, index) => (
                <li key={index} className="flex items-start group">
                  <span className="bg-blue-500 text-white rounded-xl w-8 h-8 flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform shadow-md shadow-blue-500/30">
                    {index + 1}
                  </span>
                  <span className="text-blue-50/90 text-lg group-hover:text-blue-50 transition-colors">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
