import React, { useState, useEffect } from 'react';

export default function Search() {
  const [classes, setClasses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredClasses, setFilteredClasses] = useState([]);

  // Fetch data from class-names.json on component mount
  useEffect(() => {
    fetch('/class-names.json')
      .then(response => response.json())
      .then(data => {
        setClasses(data);  // Set all classes data
      })
      .catch(error => console.error('Error fetching the class data:', error));
  }, []);

  // Filter the classes based on the search term
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredClasses([]);  // Clear results if the search term is empty
    } else {
      const filtered = classes.filter(classItem => {
        const searchLower = searchTerm.toLowerCase();

        // Check if CSS Property, Tailwind class, Bootstrap class, or CSS Value matches the search term
        return (
          classItem.cssProperty?.toLowerCase().includes(searchLower) || // Check if cssProperty exists
          classItem.tailwind?.toLowerCase().includes(searchLower) ||     // Check if tailwind exists
          classItem.bootstrap?.toLowerCase().includes(searchLower)       // Check if bootstrap exists
        );
      });
      setFilteredClasses(filtered);  // Set the filtered class list
    }
  }, [searchTerm, classes]);

  return (
    <div className="mx-auto w-11/12">
      <form className="mb-2 w-full">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-5 py-2 rounded-md border-gray-300 w-full"
          placeholder="Search Here"
        />
      </form>

      {/* Show total count of classes under the search box */}
      <div className="mb-2 text-gray-700">
        <p>Total Classes: {classes.length}</p>
      </div>

      {/* Show "No match found" if no results */}
      {searchTerm && filteredClasses.length === 0 && (
        <div className="mb-2 text-red-500">
          <p>No match found</p>
        </div>
      )}

      {/* Conditionally render table only if there are filtered results */}
      {filteredClasses.length > 0 && (
        <div className="suggestion">
          <table className="border-collapse border border-gray-400 w-full">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">CSS Property</th>
                <th className="border border-gray-300 p-2">Tailwind</th>
                <th className="border border-gray-300 p-2">Bootstrap</th>
              </tr>
            </thead>
            <tbody>
              {filteredClasses.map((classItem, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{classItem.cssProperty}</td>
                  <td className="border border-gray-300 p-2">{classItem.tailwind}</td>
                  <td className="border border-gray-300 p-2">{classItem.bootstrap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
