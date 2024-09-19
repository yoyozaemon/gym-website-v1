import React from "react";
import teamMembers from "./data/Data";

const Team = () => {
  // Separate the founder from the team members
  const founder = teamMembers.find((member) => member.role === "Founder");
  const team = teamMembers.filter((member) => member.role !== "Founder");

  return (
    <div className="py-8">
      <h2 className="text-2xl text-gray-800 text-center font-bold mb-6">
        Meet Our Founder
      </h2>
      <div className="flex justify-center mb-8">
        {founder && (
          <div className="max-w-sm m-4 p-4 bg-white rounded-lg shadow-lg">
            <img
              src={founder.photo}
              alt={`Photo of ${founder.name}`}
              className="w-full h-48 object-cover rounded-t-lg"
              style={{ objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{founder.name}</h3>
              <p className="text-gray-600">{founder.role}</p>
              <p className="text-gray-500 mt-2">{founder.bio}</p>
            </div>
          </div>
        )}
      </div>

      <h2 className="text-2xl text-gray-800 text-center font-bold mb-6">
        Meet Our Team
      </h2>
      <div className="flex flex-wrap justify-center">
        {team.map((member) => (
          <div
            key={member.name} // Use a unique identifier if available
            className="max-w-sm m-4 p-4 bg-white rounded-lg shadow-lg"
          >
            <img
              src={member.photo}
              alt={`Photo of ${member.name}`}
              className="w-full h-48 object-cover rounded-t-lg"
              style={{ objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <p className="text-gray-500 mt-2">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
