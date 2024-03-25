import React from "react";

const Employee = ({ employees, addToTeam }) => {
  return (
    <div className="max-w-md  mx-auto mt-8">
      <h2 className="text-3xl text-teal-600 underline font-semibold mb-4">
        Employee's List
      </h2>
      {employees.map((employee) => (
        <div key={employee.id} className="mb-4 p-4 bg-gray-100 rounded">
          <p className="text-slate-600">
            {employee.first_name} {employee.last_name}, Age: {employee.age}
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            onClick={() => addToTeam(employee)}
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
};

export default Employee;
