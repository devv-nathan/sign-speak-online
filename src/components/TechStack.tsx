
const TechStack = () => {
  const technologies = [
    {
      category: "Frontend",
      items: [
        { name: "React", description: "UI component library" },
        { name: "TensorFlow.js", description: "Browser-based ML execution" },
        
      ]
    },
    {
      category: "Machine Learning",
      items: [
        { name: "TensorFlow", description: "Neural network framework" },
        { name: "OpenCV", description: "Computer vision processing" },
        { name: "MediaPipe", description: "Sequence recognition" },
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", description: "Server runtime" },
        { name: "MongoDB", description: "Data storage" },
      ]
    },
  /*  {
      category: "DevOps",
      items: [
        { name: "Docker", description: "Containerization" },
        { name: "GitHub Actions", description: "CI/CD pipeline" },
        { name: "AWS", description: "Cloud hosting" },
      ]
    }*/
  ];

  return (
    <section id="tech-stack" className="bg-background/80 py-24 relative overflow-hidden">
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-description">
          Our project leverages cutting-edge technologies across the full development stack.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="bg-secondary/80 rounded-xl shadow-lg overflow-hidden reveal card-hover backdrop-blur-sm border border-white/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 py-4 px-5">
                <h3 className="text-xl font-semibold text-white">{tech.category}</h3>
              </div>
              <div className="p-5">
                <ul className="space-y-4">
                  {tech.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="group hover:bg-blue-900/20 p-2 rounded-lg transition-colors">
                      <div className="font-semibold text-blue-200 group-hover:text-blue-100 transition-colors">{item.name}</div>
                      <div className="text-sm text-blue-100/70">{item.description}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-8 bg-secondary/50 rounded-xl shadow-lg reveal card-hover backdrop-blur-sm border border-white/5">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Development Process</h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 p-4 bg-blue-900/20 rounded-xl hover:shadow-md transition-shadow border border-white/5">
              <h4 className="text-lg font-semibold text-blue-300 mb-3">Data Collection</h4>
              <p className="text-blue-100/70">
                We collected and annotated over 10,000 sign language gestures to train our machine learning models, 
                ensuring diversity in signers, lighting conditions, and backgrounds.
              </p>
            </div>
            <div className="flex-1 p-4 bg-blue-900/20 rounded-xl hover:shadow-md transition-shadow border border-white/5">
              <h4 className="text-lg font-semibold text-blue-300 mb-3">Model Training</h4>
              <p className="text-blue-100/70">
                Our CNN+LSTM hybrid model was trained on GPU clusters for 72 hours, achieving 95% accuracy on
                our test dataset of common ASL signs and phrases.
              </p>
            </div>
            <div className="flex-1 p-4 bg-blue-900/20 rounded-xl hover:shadow-md transition-shadow border border-white/5">
              <h4 className="text-lg font-semibold text-blue-300 mb-3">Optimization</h4>
              <p className="text-blue-100/70">
                We optimized the model for real-time performance on consumer hardware, reducing latency to under 100ms
                while maintaining high accuracy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
