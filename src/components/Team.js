import React, { useEffect, useState } from "react";

const Team = ({ teamMembers, removeFromTeam, setTeamMembers }) => {
  const [averageAge, setAverageAge] = useState(0);

  // Calculate average age
  const calculateAverageAge = (members) => {
    if (members.length === 0) {
      setAverageAge(0);
    } else {
      const totalAge = members.reduce((acc, member) => acc + member.age, 0);
      const avg = totalAge / members.length;
      setAverageAge(avg.toFixed(2));
    }
  };

  // Sort team by age
  const sortTeam = () => {
    const sortedTeam = [...teamMembers].sort((a, b) => a.age - b.age);
    setTeamMembers(sortedTeam);
  };

  useEffect(() => {
    calculateAverageAge(teamMembers);
  }, [teamMembers]);

  return (
    <div className=" mx-auto mt-8">
      <h2 className="text-3xl text-teal-600 underline  font-semibold mb-4 ">
        Team Members
      </h2>
      <button
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={sortTeam}
      >
        Sort By Age
      </button>

      {teamMembers.map((member) => (
        <div key={member.id} className="mb-4 p-4 bg-gray-100 rounded">
          <p>
            <span className="underline text-md">Full Name :</span>
            <span className="uppercase ml-4 text-green-700">
              {member.first_name} {member.last_name}
            </span>
          </p>
          <p>
            <span className="underline text-md"> Age : </span>
            <span className="text-blue-600 ml-4">{member.age} </span> yrs.
          </p>
          <p>
            <span className="underline text-md"> Email Id : </span>
            <span className="text-teal-700 ml-4">{member.email}</span>
          </p>
          <p className=" text-purple-600 text-md uppercase">{member.gender}</p>
          <button
            className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-24 my-2"
            onClick={() => removeFromTeam(member)}
          >
            Remove
          </button>
        </div>
      ))}
      <p className="text-gray-800 text-center text-lg">
        Average Age of Team Members:
        <span className="text-teal-800">{averageAge}</span> yrs.
      </p>
    </div>
  );
};

export default Team;
