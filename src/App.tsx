import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import TableUsers from './components/Table/Users';

function App() {
  
  return (
    <>
      <Navbar />
      <div className='mt-6 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <TableUsers />
      </div>
    </>
  );
}

export default App;
