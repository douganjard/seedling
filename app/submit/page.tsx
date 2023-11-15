// pages/survey.tsx
import React from "react";

const Survey: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="bg-white p-8 rounded shadow-md w-96"
        // onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-700">
          Prompt Submission
        </h2>

        {/* Employer Name */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="employerName"
          >
            Employer Name
          </label>
          <input
            className="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-700"
            id="employerName"
            type="text"
            placeholder="Enter the employer name"
          />
        </div>

        {/* Talent Prompt */}
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="talentPrompt"
          >
            Talent Prompt
          </label>
          <textarea
            className="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-700"
            id="talentPrompt"
            placeholder="Type your talent prompt here..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Survey;
