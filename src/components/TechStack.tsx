
const TechStack = () => {
  const technologies = [
    {
      category: "Frontend",
      items: [
        { name: "React", description: "UI component library" },
        { name: "TensorFlow.js", description: "Browser-based ML execution" },
        { name: "WebRTC", description: "Camera access and streaming" },
      ]
    },
    {
      category: "Machine Learning",
      items: [
        { name: "TensorFlow", description: "Neural network framework" },
        { name: "OpenCV", description: "Computer vision processing" },
        { name: "LSTM Networks", description: "Sequence recognition" },
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", description: "Server runtime" },
        { name: "Express", description: "Web framework" },
        { name: "MongoDB", description: "Data storage" },
      ]
    },
    {
      category: "DevOps",
      items: [
        { name: "Docker", description: "Containerization" },
        { name: "GitHub Actions", description: "CI/CD pipeline" },
        { name: "AWS", description: "Cloud hosting" },
      ]
    }
  ];

  return (
    <section id="tech-stack" className="bg-blue-50 py-24">
      <div className="section-container">
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-description">
          Our project leverages cutting-edge technologies across the full development stack.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-blue-600 py-3 px-5">
                <h3 className="text-xl font-semibold text-white">{tech.category}</h3>
              </div>
              <div className="p-5">
                <ul className="space-y-4">
                  {tech.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <div className="font-semibold text-neutral-900">{item.name}</div>
                      <div className="text-sm text-neutral-600">{item.description}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-8 bg-white rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-center mb-8">Development Process</h3>
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-4">
              <h4 className="text-lg font-semibold text-blue-600 mb-2">Data Collection</h4>
              <p className="text-neutral-700">
                We collected and annotated over 10,000 sign language gestures to train our machine learning models, 
                ensuring diversity in signers, lighting conditions, and backgrounds.
              </p>
            </div>
            <div className="flex-1 p-4">
              <h4 className="text-lg font-semibold text-blue-600 mb-2">Model Training</h4>
              <p className="text-neutral-700">
                Our CNN+LSTM hybrid model was trained on GPU clusters for 72 hours, achieving 95% accuracy on
                our test dataset of common ASL signs and phrases.
              </p>
            </div>
            <div className="flex-1 p-4">
              <h4 className="text-lg font-semibold text-blue-600 mb-2">Optimization</h4>
              <p className="text-neutral-700">
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
