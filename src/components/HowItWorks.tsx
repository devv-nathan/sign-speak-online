
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
    <section id="how-it-works" className="bg-blue-50 py-24">
      <div className="section-container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-description">
          Our sign language translator uses a sophisticated pipeline of technologies to convert physical gestures into meaningful text.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl font-bold text-blue-100 mb-4">{step.number}</div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">{step.title}</h3>
              <p className="text-neutral-700">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-white rounded-lg p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Technical Process</h3>
              <p className="text-neutral-700 mb-4">
                The system employs a convolutional neural network (CNN) trained on over 10,000 sign language gestures. 
                When a user signs, their movements are captured, preprocessed to enhance features, and fed into the model.
              </p>
              <p className="text-neutral-700">
                The translation process works continuously, analyzing frames at 30fps to catch dynamic gestures and subtle movements
                that make up sign language communication.
              </p>
            </div>
            <div className="lg:w-1/2 bg-blue-100 p-6 rounded-lg flex flex-col space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <p className="text-sm text-neutral-700">Hand detection and landmark identification</p>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <p className="text-sm text-neutral-700">Feature extraction from hand posture and movement</p>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <p className="text-sm text-neutral-700">Classification through neural network processing</p>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <p className="text-sm text-neutral-700">Context-aware language modeling for improved accuracy</p>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <p className="text-sm text-neutral-700">Text generation and optional text-to-speech conversion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
