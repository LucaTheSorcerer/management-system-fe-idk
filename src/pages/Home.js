// import React, { useState } from 'react';

// const Home = () => {
//   const [createDeptName, setCreateDeptName] = useState('');
//   const [updateDeptId, setUpdateDeptId] = useState('');
//   const [updateDeptName, setUpdateDeptName] = useState('');

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

//   return (
//     <div className="home">
//       <h1>Home</h1>
      
//       <div className="create-department">
//         <h2>Create Department</h2>
//         <input
//           type="text"
//           placeholder="Department Name"
//           value={createDeptName}
//           onChange={(e) => setCreateDeptName(e.target.value)}
//         />
//         <button onClick={handleCreateDepartment}>Create Department</button>
//       </div>

//       <div className="update-department">
//         <h2>Update Department</h2>
//         <input
//           type="text"
//           placeholder="Department ID"
//           value={updateDeptId}
//           onChange={(e) => setUpdateDeptId(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="New Department Name"
//           value={updateDeptName}
//           onChange={(e) => setUpdateDeptName(e.target.value)}
//         />
//         <button onClick={handleUpdateDepartment}>Update Department</button>
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

  const handleCreateDepartment = async () => {
    const response = await fetch('https://localhost:8443/api/departments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
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
      body: JSON.stringify({ departmentName: updateDeptName }),
    });

    if (response.ok) {
      alert('Department updated successfully');
    } else {
      alert('Failed to update department');
    }
  };

  const handleUpdateDepartmentPython = async () => {
    const response = await fetch(`https://localhost:5001/departments/${updateDeptIdPython}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ department_name: updateDeptNamePython }),
    });

    if (response.ok) {
      alert('Department updated successfully (Python)');
    } else {
      alert('Failed to update department (Python)');
    }
  };

  return (
    <div className="home">
      <h1>Home</h1>
      
      <div className="create-department">
        <h2>Create Department</h2>
        <input
          type="text"
          placeholder="Department Name"
          value={createDeptName}
          onChange={(e) => setCreateDeptName(e.target.value)}
        />
        <button onClick={handleCreateDepartment}>Create Department</button>
      </div>

      <div className="update-department">
        <h2>Update Department (Java)</h2>
        <input
          type="text"
          placeholder="Department ID"
          value={updateDeptId}
          onChange={(e) => setUpdateDeptId(e.target.value)}
        />
        <input
          type="text"
          placeholder="New Department Name"
          value={updateDeptName}
          onChange={(e) => setUpdateDeptName(e.target.value)}
        />
        <button onClick={handleUpdateDepartment}>Update Department (Java)</button>
      </div>

      <div className="update-department">
        <h2>Update Department (Python)</h2>
        <input
          type="text"
          placeholder="Department ID"
          value={updateDeptIdPython}
          onChange={(e) => setUpdateDeptIdPython(e.target.value)}
        />
        <input
          type="text"
          placeholder="New Department Name"
          value={updateDeptNamePython}
          onChange={(e) => setUpdateDeptNamePython(e.target.value)}
        />
        <button onClick={handleUpdateDepartmentPython}>Update Department (Python)</button>
      </div>
    </div>
  );
};

export default Home;
