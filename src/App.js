import { useState } from 'react';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import MainLayout from './components/MainLayout/MainLayout';
function App() {
  let [openSideDrawer, setOpenSideDrawer] = useState(false);
  function handleSideDrawer() {
if (window.innerWidth < 786) {
    setOpenSideDrawer((prevState) => {
      return prevState ? false : true;
    });
}
  }

  return (
    <div className="App">
      <Sidebar isSideDrawer={openSideDrawer} handleSideDrawer={handleSideDrawer}/>
      <MainLayout isSideDrawer={openSideDrawer} handleSideDrawer={handleSideDrawer}/>
      {openSideDrawer && (
        <div className="backdrop-side open" onClick={handleSideDrawer}></div>
      )}
    </div>
  );
}

export default App;
