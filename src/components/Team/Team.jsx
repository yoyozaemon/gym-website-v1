import React from "react";
import teamMembers from "./data/Data";

const Team = () => {
  return (
    <div className="py-8">
      <h2 className="text-2xl text-gray-800 text-center font-bold mb-6">
        Meet Our Team
      </h2>
      <div className="flex flex-wrap justify-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="max-w-sm m-4 p-4 bg-white rounded-lg shadow-lg"
          >
            <img
              src={member.photo}
              alt={member.name}
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
