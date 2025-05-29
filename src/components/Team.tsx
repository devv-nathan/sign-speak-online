
const Team = () => {
  const teamMembers = [
    {
      name: "Nathan Rodrigues",
      role: "Project Lead",
      image: "/images/team/nathan.JPG",
      bio: "Information Science student with focus on machine learning and computer vision."
    },
    {
      name: "Mayur Shet",
      role: "Frontend Developer",
      image: "/images/team/mayur.jpg",
      bio: "specialist in building accessible and intuitive user interfaces."
    },
    {
      name: "Shaun Karkada",
      role: "Backend Developer",
      image: "/images/team/shaun.jpg",
      bio: "Systems architecture specialist focusing on scalable and efficient solutions."
    },

  ];

  return (
    <section id="team" className="bg-background py-24">
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
              <p className="text-sm font-medium text-blue-400 mb-2">{member.role}</p>
              <p className="text-blue-100/70 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 glass-effect p-8 rounded-xl shadow-sm reveal card-hover">
          <h3 className="text-2xl font-bold text-center mb-6 gradient-text">Project Acknowledgements</h3>
          <div className="text-center">
            <p className="text-blue-100/70 mb-4">
              This project was developed as part of the Senior Computer Science Capstone at University College.
              We'd like to thank our advisor, Dr. Emily Chen, for her invaluable guidance throughout the development process.
            </p>
            <p className="text-blue-100/70">
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
