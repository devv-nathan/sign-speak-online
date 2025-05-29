
const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Gesture Capture",
      description: "The webcam captures hand gestures and movements in real-time, creating a continuous stream of visual input."
    },
    {
      number: "02",
      title: "Image Processing",
      description: "Computer vision algorithms isolate hand shapes from the background and identify key points on the fingers and palm."
    },
    {
      number: "03",
      title: "Pattern Recognition",
      description: "Machine learning models classify the gestures by comparing them to thousands of training examples of sign language."
    },
    {
      number: "04",
      title: "Translation",
      description: "Recognized signs are converted to text and optionally speech, enabling real-time communication."
    }
  ];

  return (
    <section id="how-it-works" className="bg-background py-24 relative overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-blue-900/20 section-gradient"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title text-foreground">How It Works</h2>
        <p className="section-description text-blue-100/80">
          Our sign language translator uses a sophisticated pipeline of technologies to convert physical gestures into meaningful text.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {steps.map((step) => (
            <div 
              key={step.number} 
              className="glass-effect rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 reveal"
            >
              <div className="text-5xl font-bold text-blue-500/30 mb-4">{step.number}</div>
              <h3 className="text-xl font-bold gradient-text mb-3">{step.title}</h3>
              <p className="text-blue-100/70">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 glass-effect rounded-xl p-8 shadow-sm reveal card-hover">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Technical Process</h3>
              <p className="text-blue-100/70 mb-4">
                The system employs redacted model trained on over 10,000 sign language gestures. 
                When a user signs, their movements are captured, preprocessed to enhance features, and fed into the model.
              </p>
              <p className="text-blue-100/70">
                The translation process works continuously, analyzing frames at 30fps to catch dynamic gestures and subtle movements
                that make up sign language communication.
              </p>
            </div>
            <div className="lg:w-1/2 bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-xl flex flex-col space-y-4">
              <div className="flex items-center group">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                <p className="text-sm text-blue-100/70 group-hover:text-blue-100 transition-colors">Hand detection and landmark identification</p>
              </div>
              <div className="flex items-center group">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                <p className="text-sm text-blue-100/70 group-hover:text-blue-100 transition-colors">Feature extraction from hand posture and movement</p>
              </div>
              <div className="flex items-center group">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                <p className="text-sm text-blue-100/70 group-hover:text-blue-100 transition-colors">Classification through neural network processing</p>
              </div>
              <div className="flex items-center group">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                <p className="text-sm text-blue-100/70 group-hover:text-blue-100 transition-colors">Context-aware language modeling for improved accuracy</p>
              </div>
              <div className="flex items-center group">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                <p className="text-sm text-blue-100/70 group-hover:text-blue-100 transition-colors">Text generation and optional text-to-speech conversion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
