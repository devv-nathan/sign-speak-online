
const Overview = () => {
  return (
    <section id="overview" className="bg-white py-24">
      <div className="section-container">
        <h2 className="section-title">Project Overview</h2>
        <p className="section-description">
          The Dynamic Sign Language Translator is a cutting-edge application designed to bridge communication gaps between the deaf community and those unfamiliar with sign language.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <div className="reveal">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Empowering Communication</h3>
            <p className="text-neutral-700 mb-6">
              Our project aims to create an accessible, real-time translation system that converts American Sign Language (ASL) gestures into text and speech, enabling seamless communication between deaf and hearing individuals.
            </p>
            <p className="text-neutral-700">
              Developed as part of our senior computer science project, this translator combines computer vision, machine learning, and natural language processing to create an intuitive and accurate translation experience.
            </p>
          </div>
          <div className="bg-card-gradient p-8 rounded-xl shadow-sm reveal card-hover transition-all duration-300">
            <h4 className="text-xl font-semibold mb-4 text-blue-700">Project Goals</h4>
            <ul className="space-y-4">
              {[
                "Create an accessible tool for real-time sign language translation",
                "Achieve high accuracy in gesture recognition across various lighting conditions",
                "Develop a user-friendly interface for both deaf and hearing users",
                "Build a foundation for future expansion to multiple sign languages",
                "Contribute to the growing field of accessibility technology"
              ].map((goal, index) => (
                <li key={index} className="flex items-start group">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 mr-3 group-hover:scale-110 transition-transform">
                    {index + 1}
                  </span>
                  <span className="text-neutral-700">{goal}</span>
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
