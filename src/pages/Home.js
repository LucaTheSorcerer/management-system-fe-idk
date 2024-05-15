// import React, { useState } from 'react';

// const Home = () => {
//   const [createDeptName, setCreateDeptName] = useState('');
//   const [updateDeptId, setUpdateDeptId] = useState('');
//   const [updateDeptName, setUpdateDeptName] = useState('');
//   const [updateDeptIdPython, setUpdateDeptIdPython] = useState('');
//   const [updateDeptNamePython, setUpdateDeptNamePython] = useState('');
//   const [dirtyReadDeptId, setDirtyReadDeptId] = useState('');
//   const [dirtyReadDeptIdPython, setDirtyReadDeptIdPython] = useState('');
//   const [expandedSection, setExpandedSection] = useState(null);

//   const handleCreateDepartment = async () => {
//     const response = await fetch('https://localhost:8443/api/departments', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ departmentName: createDeptName }),
//     });

//     if (response.ok) {
//       alert('Department created successfully');
//     } else {
//       alert('Failed to create department');
//     }
//   };

//   const handleUpdateDepartment = async () => {
//     const response = await fetch(`https://localhost:8443/api/departments/${updateDeptId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ departmentName: updateDeptName }),
//     });

//     if (response.ok) {
//       alert('Department updated successfully');
//     } else {
//       alert('Failed to update department');
//     }
//   };

//   const handleUpdateDepartmentPython = async () => {
//     const response = await fetch(`https://localhost:5001/departments/${updateDeptIdPython}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ department_name: updateDeptNamePython }),
//     });

//     if (response.ok) {
//       alert('Department updated successfully (Python)');
//     } else {
//       alert('Failed to update department (Python)');
//     }
//   };

//   const handleDirtyRead = async () => {
//     const response = await fetch(`https://localhost:8443/api/departments/dirty-read/${dirtyReadDeptId}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       const data = await response.json();
//       alert(`Department data (Java): ${JSON.stringify(data)}`);
//     } else {
//       alert('Failed to read department (Java)');
//     }
//   };

//   const handleDirtyReadPython = async () => {
//     const response = await fetch(`https://localhost:5001/departments/dirty-read/${dirtyReadDeptIdPython}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       const data = await response.json();
//       alert(`Department data (Python): ${JSON.stringify(data)}`);
//     } else {
//       alert('Failed to read department (Python)');
//     }
//   };

//   const toggleSection = (section) => {
//     setExpandedSection(expandedSection === section ? null : section);
//   };

//   return (
//     <div className="flex flex-col h-screen items-center justify-center animated-gradient p-5 overflow-hidden">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full mb-4">
//         <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Home</h1>
//         <div className="mb-4">
//           <h2 className="text-xl font-semibold mb-2 text-gray-700">Create Department</h2>
//           <input
//             type="text"
//             placeholder="Department Name"
//             className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline mb-2"
//             value={createDeptName}
//             onChange={(e) => setCreateDeptName(e.target.value)}
//           />
//           <button
//             onClick={handleCreateDepartment}
//             className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 focus:outline-none focus:shadow-outline"
//           >
//             Create Department
//           </button>
//         </div>
//       </div>

//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full mb-4">
//         <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Dirty Write</h1>
//         <div className="mb-4">
//           <button
//             className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:shadow-outline"
//             onClick={() => toggleSection('dirtyWrite')}
//           >
//             Toggle Dirty Write Section
//           </button>
//           {expandedSection === 'dirtyWrite' && (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               <div className="update-department">
//                 <h2 className="text-xl font-semibold mb-2 text-gray-700">Update Department (Java)</h2>
//                 <input
//                   type="text"
//                   placeholder="Department ID"
//                   className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline mb-2"
//                   value={updateDeptId}
//                   onChange={(e) => setUpdateDeptId(e.target.value)}
//                 />
//                 <input
//                   type="text"
//                   placeholder="New Department Name"
//                   className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline mb-2"
//                   value={updateDeptName}
//                   onChange={(e) => setUpdateDeptName(e.target.value)}
//                 />
//                 <button
//                   onClick={handleUpdateDepartment}
//                   className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:shadow-outline"
//                 >
//                   Update Department (Java)
//                 </button>
//               </div>

//               <div className="update-department">
//                 <h2 className="text-xl font-semibold mb-2 text-gray-700">Update Department (Python)</h2>
//                 <input
//                   type="text"
//                   placeholder="Department ID"
//                   className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline mb-2"
//                   value={updateDeptIdPython}
//                   onChange={(e) => setUpdateDeptIdPython(e.target.value)}
//                 />
//                 <input
//                   type="text"
//                   placeholder="New Department Name"
//                   className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline mb-2"
//                   value={updateDeptNamePython}
//                   onChange={(e) => setUpdateDeptNamePython(e.target.value)}
//                 />
//                 <button
//                   onClick={handleUpdateDepartmentPython}
//                   className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:shadow-outline"
//                 >
//                   Update Department (Python)
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full mb-4">
//         <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Dirty Read</h1>
//         <div className="mb-4">
//           <button
//             className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:shadow-outline"
//             onClick={() => toggleSection('dirtyRead')}
//           >
//             Toggle Dirty Read Section
//           </button>
//           {expandedSection === 'dirtyRead' && (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               <div className="dirty-read-department">
//                 <h2 className="text-xl font-semibold mb-2 text-gray-700">Read Department (Java)</h2>
//                 <input
//                   type="text"
//                   placeholder="Department ID"
//                   className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline mb-2"
//                   value={dirtyReadDeptId}
//                   onChange={(e) => setDirtyReadDeptId(e.target.value)}
//                 />
//                 <button
//                   onClick={handleDirtyRead}
//                   className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:shadow-outline"
//                 >
//                   Read Department (Java)
//                 </button>
//               </div>

//               <div className="dirty-read-department">
//                 <h2 className="text-xl font-semibold mb-2 text-gray-700">Read Department (Python)</h2>
//                 <input
//                   type="text"
//                   placeholder="Department ID"
//                   className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline mb-2"
//                   value={dirtyReadDeptIdPython}
//                   onChange={(e) => setDirtyReadDeptIdPython(e.target.value)}
//                 />
//                 <button
//                   onClick={handleDirtyReadPython}
//                   className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:shadow-outline"
//                 >
//                   Read Department (Python)
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState } from 'react';

// const Home = () => {
//   const [createDeptName, setCreateDeptName] = useState('');
//   const [updateDeptId, setUpdateDeptId] = useState('');
//   const [updateDeptName, setUpdateDeptName] = useState('');
//   const [updateDeptIdPython, setUpdateDeptIdPython] = useState('');
//   const [updateDeptNamePython, setUpdateDeptNamePython] = useState('');
//   const [dirtyReadDeptId, setDirtyReadDeptId] = useState('');
//   const [dirtyReadDeptIdPython, setDirtyReadDeptIdPython] = useState('');
//   const [expandedSection, setExpandedSection] = useState(null);

//   const handleCreateDepartment = async () => {
//     const response = await fetch('https://localhost:8443/api/departments', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ departmentName: createDeptName }),
//     });

//     if (response.ok) {
//       alert('Department created successfully');
//     } else {
//       alert('Failed to create department');
//     }
//   };

//   const handleUpdateDepartment = async () => {
//     const response = await fetch(`https://localhost:8443/api/departments/${updateDeptId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ departmentName: updateDeptName }),
//     });

//     if (response.ok) {
//       alert('Department updated successfully');
//     } else {
//       alert('Failed to update department');
//     }
//   };

//   const handleUpdateDepartmentPython = async () => {
//     const response = await fetch(`https://localhost:5001/departments/${updateDeptIdPython}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ department_name: updateDeptNamePython }),
//     });

//     if (response.ok) {
//       alert('Department updated successfully (Python)');
//     } else {
//       alert('Failed to update department (Python)');
//     }
//   };

//   const handleDirtyRead = async () => {
//     const response = await fetch(`https://localhost:8443/api/departments/dirty-read/${dirtyReadDeptId}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       const data = await response.json();
//       alert(`Department data (Java): ${JSON.stringify(data)}`);
//     } else {
//       alert('Failed to read department (Java)');
//     }
//   };

//   const handleDirtyReadPython = async () => {
//     const response = await fetch(`https://localhost:5001/departments/dirty-read/${dirtyReadDeptIdPython}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       const data = await response.json();
//       alert(`Department data (Python): ${JSON.stringify(data)}`);
//     } else {
//       alert('Failed to read department (Python)');
//     }
//   };

//   const handlePhantomRead = async () => {
//     const response = await fetch('https://localhost:8443/api/departments/phantom-read', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       const data = await response.json();
//       alert(`Initial data: ${JSON.stringify(data.initial)}\nUpdated data: ${JSON.stringify(data.updated)}`);
//     } else {
//       alert('Failed to perform phantom read');
//     }
//   };

//   const handleCreateDepartmentPython = async () => {
//     const response = await fetch('https://localhost:5001/departments', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ department_name: createDeptName }),
//     });

//     if (response.ok) {
//       alert('Department created successfully (Python)');
//     } else {
//       alert('Failed to create department (Python)');
//     }
//   };

//   const toggleSection = (section) => {
//     setExpandedSection(expandedSection === section ? null : section);
//   };

//   return (
//     <div className="flex flex-col h-screen items-center justify-center animated-gradient p-5 overflow-hidden">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full mb-4">
//         <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Home</h1>
//         <div className="mb-4">
//           <h2 className="text-xl font-semibold mb-2 text-gray-700">Create Department</h2>
//           <input
//             type="text"
//             placeholder="Department Name"
//             className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline mb-2"
//             value={createDeptName}
//             onChange={(e) => setCreateDeptName(e.target.value)}
//           />
//           <button
//             onClick={handleCreateDepartment}
//             className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 focus:outline-none focus:shadow-outline"
//           >
//             Create Department
//           </button>
//         </div>
//       </div>

//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full mb-4">
//         <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Dirty Write</h1>
//         <div className="mb-4">
//           <button
//             className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:shadow-outline"
//             onClick={() => toggleSection('dirtyWrite')}
//           >
//             Toggle Dirty Write Section
//           </button>
//           {expandedSection === 'dirtyWrite' && (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               <div className="update-department">
//                 <h2 className="text-xl font-semibold mb-2 text-gray-700">Update Department (Java)</h2>
//                 <input
//                   type="text"
//                   placeholder="Department ID"
//                   className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline mb-2"
//                   value={updateDeptId}
//                   onChange={(e) => setUpdateDeptId(e.target.value)}
//                 />
//                 <input
//                   type="text"
//                   placeholder="New Department Name"
//                   className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline mb-2"
//                   value={updateDeptName}
//                   onChange={(e) => setUpdateDeptName(e.target.value)}
//                 />
//                 <button
//                   onClick={handleUpdateDepartment}
//                   className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:shadow-outline"
//                 >
//                   Update Department (Java)
//                 </button>
//               </div>

//               <div className="update-department">
//                 <h2 className="text-xl font-semibold mb-2 text-gray-700">Update Department (Python)</h2>
//                 <input
//                   type="text"
//                   placeholder="Department ID"
//                   className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline mb-2"
//                   value={updateDeptIdPython}
//                   onChange={(e) => setUpdateDeptIdPython(e.target.value)}
//                 />
//                 <input
//                   type="text"
//                   placeholder="New Department Name"
//                   className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline mb-2"
//                   value={updateDeptNamePython}
//                   onChange={(e) => setUpdateDeptNamePython(e.target.value)}
//                 />
//                 <button
//                   onClick={handleUpdateDepartmentPython}
//                   className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:shadow-outline"
//                 >
//                   Update Department (Python)
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full mb-4">
//         <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Dirty Read</h1>
//         <div className="mb-4">
//           <button
//             className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:shadow-outline"
//             onClick={() => toggleSection('dirtyRead')}
//           >
//             Toggle Dirty Read Section
//           </button>
//           {expandedSection === 'dirtyRead' && (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               <div className="dirty-read-department">
//                 <h2 className="text-xl font-semibold mb-2 text-gray-700">Read Department (Java)</h2>
//                 <input
//                   type="text"
//                   placeholder="Department ID"
//                   className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline mb-2"
//                   value={dirtyReadDeptId}
//                   onChange={(e) => setDirtyReadDeptId(e.target.value)}
//                 />
//                 <button
//                   onClick={handleDirtyRead}
//                   className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:shadow-outline"
//                 >
//                   Read Department (Java)
//                 </button>
//               </div>

//               <div className="dirty-read-department">
//                 <h2 className="text-xl font-semibold mb-2 text-gray-700">Read Department (Python)</h2>
//                 <input
//                   type="text"
//                   placeholder="Department ID"
//                   className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline mb-2"
//                   value={dirtyReadDeptIdPython}
//                   onChange={(e) => setDirtyReadDeptIdPython(e.target.value)}
//                 />
//                 <button
//                   onClick={handleDirtyReadPython}
//                   className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:shadow-outline"
//                 >
//                   Read Department (Python)
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full mb-4">
//         <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Phantom Read</h1>
//         <div className="mb-4">
//           <button
//             className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:shadow-outline"
//             onClick={() => toggleSection('phantomRead')}
//           >
//             Toggle Phantom Read Section
//           </button>
//           {expandedSection === 'phantomRead' && (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               <div className="phantom-read-department">
//                 <h2 className="text-xl font-semibold mb-2 text-gray-700">Read Departments Twice (Java)</h2>
//                 <button
//                   onClick={handlePhantomRead}
//                   className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:shadow-outline"
//                 >
//                   Read Departments Twice (Java)
//                 </button>
//               </div>

//               <div className="phantom-read-department">
//                 <h2 className="text-xl font-semibold mb-2 text-gray-700">Create Departments (Python)</h2>
//                 <input
//                   type="text"
//                   placeholder="Department Name"
//                   className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline mb-2"
//                   value={createDeptName}
//                   onChange={(e) => setCreateDeptName(e.target.value)}
//                 />
//                 <button
//                   onClick={handleCreateDepartmentPython}
//                   className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:shadow-outline"
//                 >
//                   Create Departments (Python)
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from 'react';

const Home = () => {
  const [createDeptName, setCreateDeptName] = useState('');
  const [updateDeptId, setUpdateDeptId] = useState('');
  const [updateDeptName, setUpdateDeptName] = useState('');
  const [updateDeptIdPython, setUpdateDeptIdPython] = useState('');
  const [updateDeptNamePython, setUpdateDeptNamePython] = useState('');
  const [dirtyReadDeptId, setDirtyReadDeptId] = useState('');
  const [dirtyReadDeptIdPython, setDirtyReadDeptIdPython] = useState('');
  const [expandedSection, setExpandedSection] = useState(null);

  const handleCreateDepartment = async () => {
    const response = await fetch('https://localhost:8443/api/departments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ departmentName: createDeptName }),
    });

    if (response.ok) {
      alert('Department created successfully');
    } else {
      alert('Failed to create department');
    }
  };

  const handleUpdateDepartment = async () => {
    const response = await fetch(`https://localhost:8443/api/departments/${updateDeptId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ departmentName: updateDeptName }),
    });

    if (response.ok) {
      alert('Department updated successfully');
    } else {
      alert('Failed to update department');
    }
  };

  const handleDirtyUpdatePython = async () => {
    const response = await fetch(`http://localhost:5001/departments/dirty-update/${updateDeptIdPython}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ department_name: updateDeptNamePython }),
    });

    if (response.ok) {
      alert('Department dirty updated successfully (Python)');
    } else {
      alert('Failed to dirty update department (Python)');
    }
  };

  const handleUpdateDepartmentPython = async () => {
    const response = await fetch(`http://localhost:5001/departments/${updateDeptIdPython}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ department_name: updateDeptNamePython }),
    });

    if (response.ok) {
      alert('Department updated successfully (Python)');
    } else {
      alert('Failed to update department (Python)');
    }
  };

  const handleDirtyRead = async () => {
    const response = await fetch(`https://localhost:8443/api/departments/dirty-read/${dirtyReadDeptId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      alert(`Department data (Java): ${JSON.stringify(data)}`);
    } else {
      alert('Failed to read department (Java)');
    }
  };

  const handleDirtyReadPython = async () => {
    const response = await fetch(`http://localhost:5001/departments/dirty-read/${dirtyReadDeptIdPython}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (response.ok) {
      const data = await response.json();
      alert(`Department data (Python): ${JSON.stringify(data)}`);
    } else {
      alert('Failed to read department (Python)');
    }
  };

  const handlePhantomRead = async () => {
    const response = await fetch('https://localhost:8443/api/departments/phantom-read', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (response.ok) {
      const data = await response.json();
      alert(`Initial data: ${JSON.stringify(data.initial)}\nUpdated data: ${JSON.stringify(data.updated)}`);
    } else {
      alert('Failed to perform phantom read');
    }
  };

  const handleCreateDepartmentPython = async () => {
    const response = await fetch('http://localhost:5001/departments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ department_name: createDeptName }),
    });

    if (response.ok) {
      alert('Department created successfully (Python)');
    } else {
      alert('Failed to create department (Python)');
    }
  };

  const handleLostUpdateJava = async () => {
    const response = await fetch('https://localhost:8443/api/departments/lost-update/1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (response.ok) {
      const data = await response.json();
      alert(`Initial Update: ${JSON.stringify(data.initialUpdate)}\nConcurrent Update: ${JSON.stringify(data.concurrentUpdate)}`);
    } else {
      alert('Failed to simulate lost update');
    }
  };

  const handleLostUpdatePython = async () => {
    const response = await fetch('http://localhost:5001/departments/concurrent-update/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (response.ok) {
      const data = await response.json();
      alert(`Concurrent Update (Python): ${JSON.stringify(data)}`);
    } else {
      alert('Failed to simulate lost update (Python)');
    }
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center animated-gradient p-5 overflow-hidden">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full mb-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Home</h1>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Create Department</h2>
          <input
            type="text"
            placeholder="Department Name"
            className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline mb-2"
            value={createDeptName}
            onChange={(e) => setCreateDeptName(e.target.value)}
          />
          <button
            onClick={handleCreateDepartment}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 focus:outline-none focus:shadow-outline"
          >
            Create Department
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full mb-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Dirty Write</h1>
        <div className="mb-4">
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:shadow-outline"
            onClick={() => toggleSection('dirtyWrite')}
          >
            Toggle Dirty Write Section
          </button>
          {expandedSection === 'dirtyWrite' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="update-department">
                <h2 className="text-xl font-semibold mb-2 text-gray-700">Update Department (Java)</h2>
                <input
                  type="text"
                  placeholder="Department ID"
                  className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline mb-2"
                  value={updateDeptId}
                  onChange={(e) => setUpdateDeptId(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="New Department Name"
                  className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline mb-2"
                  value={updateDeptName}
                  onChange={(e) => setUpdateDeptName(e.target.value)}
                />
                <button
                  onClick={handleUpdateDepartment}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:shadow-outline"
                >
                  Update Department (Java)
                </button>
              </div>

              <div className="update-department">
                <h2 className="text-xl font-semibold mb-2 text-gray-700">Update Department (Python)</h2>
                <input
                  type="text"
                  placeholder="Department ID"
                  className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline mb-2"
                  value={updateDeptIdPython}
                  onChange={(e) => setUpdateDeptIdPython(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="New Department Name"
                  className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline mb-2"
                  value={updateDeptNamePython}
                  onChange={(e) => setUpdateDeptNamePython(e.target.value)}
                />
                <button
                  onClick={handleUpdateDepartmentPython}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:shadow-outline"
                >
                  Update Department (Python)
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full mb-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Dirty Read</h1>
        <div className="mb-4">
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:shadow-outline"
            onClick={() => toggleSection('dirtyRead')}
          >
            Toggle Dirty Read Section
          </button>
          {expandedSection === 'dirtyRead' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="dirty-read-department">
                <h2 className="text-xl font-semibold mb-2 text-gray-700">Dirty Update (Python)</h2>
                <input
                  type="text"
                  placeholder="Department ID"
                  className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline mb-2"
                  value={updateDeptIdPython}
                  onChange={(e) => setUpdateDeptIdPython(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="New Department Name"
                  className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline mb-2"
                  value={updateDeptNamePython}
                  onChange={(e) => setUpdateDeptNamePython(e.target.value)}
                />
                <button
                  onClick={handleDirtyUpdatePython}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:shadow-outline"
                >
                  Dirty Update Department (Python)
                </button>
              </div>

              <div className="dirty-read-department">
                <h2 className="text-xl font-semibold mb-2 text-gray-700">Read Department (Java)</h2>
                <input
                  type="text"
                  placeholder="Department ID"
                  className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline mb-2"
                  value={dirtyReadDeptId}
                  onChange={(e) => setDirtyReadDeptId(e.target.value)}
                />
                <button
                  onClick={handleDirtyRead}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:shadow-outline"
                >
                  Read Department (Java)
                </button>
              </div>

              <div className="dirty-read-department">
                <h2 className="text-xl font-semibold mb-2 text-gray-700">Read Department (Python)</h2>
                <input
                  type="text"
                  placeholder="Department ID"
                  className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline mb-2"
                  value={dirtyReadDeptIdPython}
                  onChange={(e) => setDirtyReadDeptIdPython(e.target.value)}
                />
                <button
                  onClick={handleDirtyReadPython}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:shadow-outline"
                >
                  Read Department (Python)
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full mb-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Phantom Read</h1>
        <div className="mb-4">
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:shadow-outline"
            onClick={() => toggleSection('phantomRead')}
          >
            Toggle Phantom Read Section
          </button>
          {expandedSection === 'phantomRead' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="phantom-read-department">
                <h2 className="text-xl font-semibold mb-2 text-gray-700">Read Departments Twice (Java)</h2>
                <button
                  onClick={handlePhantomRead}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:shadow-outline"
                >
                  Read Departments Twice (Java)
                </button>
              </div>

              <div className="phantom-read-department">
                <h2 className="text-xl font-semibold mb-2 text-gray-700">Create Departments (Python)</h2>
                <input
                  type="text"
                  placeholder="Department Name"
                  className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline mb-2"
                  value={createDeptName}
                  onChange={(e) => setCreateDeptName(e.target.value)}
                />
                <button
                  onClick={handleCreateDepartmentPython}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:shadow-outline"
                >
                  Create Departments (Python)
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full mb-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Lost Update</h1>
        <div className="mb-4">
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:shadow-outline"
            onClick={() => toggleSection('lostUpdate')}
          >
            Toggle Lost Update Section
          </button>
          {expandedSection === 'lostUpdate' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="lost-update-department">
                <h2 className="text-xl font-semibold mb-2 text-gray-700">Update Department (Java)</h2>
                <button
                  onClick={handleLostUpdateJava}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:shadow-outline"
                >
                  Simulate Lost Update (Java)
                </button>
              </div>

              <div className="lost-update-department">
                <h2 className="text-xl font-semibold mb-2 text-gray-700">Concurrent Update (Python)</h2>
                <button
                  onClick={handleLostUpdatePython}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:shadow-outline"
                >
                  Simulate Concurrent Update (Python)
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
