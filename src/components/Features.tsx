
const Features = () => {
  const features = [
    {
      title: "Real-time Translation",
      description: "Instantly converts sign language gestures into text with minimal delay, enabling natural conversation flow.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "High Accuracy",
      description: "Advanced machine learning algorithms deliver up to 95% recognition accuracy for common sign language phrases.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Multi-platform Support",
      description: "Works seamlessly across desktop, mobile, and tablet devices with a responsive design.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Voice Output",
      description: "Optional text-to-speech functionality pronounces translated content for hearing individuals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      )
    },
    {
      title: "Custom Gesture Support",
      description: "Allows users to add personalized signs and expressions to the recognition database.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      )
    },
    {
      title: "Offline Capability",
      description: "Basic functionality works without internet connection after initial setup and model download.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="bg-background py-24 relative overflow-hidden">
      {/* Dynamic section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/30 section-gradient"></div>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title text-foreground">Key Features</h2>
        <p className="section-description text-blue-100/80">
          Our sign language translator comes equipped with powerful features designed to enhance accessibility and user experience.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-effect rounded-xl p-6 hover:bg-gradient-to-br hover:from-blue-800/30 hover:to-purple-900/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 reveal card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 bg-blue-900/30 p-3 rounded-lg inline-block group-hover:scale-110 transition-transform group-hover:bg-blue-800/50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 gradient-text">{feature.title}</h3>
              <p className="text-blue-100/70 group-hover:text-blue-50/90 transition-colors">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
