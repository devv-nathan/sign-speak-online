
const Team = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Project Lead & ML Engineer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      bio: "Computer Science senior with focus on machine learning and computer vision."
    },
    {
      name: "Taylor Rodriguez",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      bio: "HCI specialist building accessible and intuitive user interfaces."
    },
    {
      name: "Jordan Smith",
      role: "Backend Developer",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      bio: "Systems architecture specialist focusing on scalable and efficient solutions."
    },
    {
      name: "Casey Wilson",
      role: "Data Scientist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      bio: "Applied mathematics background with expertise in neural networks and data analysis."
    }
  ];

  return (
    <section id="team" className="bg-white py-24">
      <div className="section-container">
        <h2 className="section-title">Our Team</h2>
        <p className="section-description">
          Meet the talented students behind the Dynamic Sign Language Translator project.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center reveal card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4 shadow-md group hover:shadow-xl transition-all duration-300 hover:scale-105 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-blue-300 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1 gradient-text">{member.name}</h3>
              <p className="text-sm font-medium text-blue-500 mb-2">{member.role}</p>
              <p className="text-neutral-700 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-sm reveal card-hover">
          <h3 className="text-2xl font-bold text-center mb-6 gradient-text">Project Acknowledgements</h3>
          <div className="text-center">
            <p className="text-neutral-700 mb-4">
              This project was developed as part of the Senior Computer Science Capstone at University College.
              We'd like to thank our advisor, Dr. Emily Chen, for her invaluable guidance throughout the development process.
            </p>
            <p className="text-neutral-700">
              Special thanks to the National Association of the Deaf for their consultation and feedback during our
              testing phase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
