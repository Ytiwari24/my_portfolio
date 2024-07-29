// // src/Navbar/index.js
// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <div className="navbar-root">
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" className="navbar-title">
//             MyApp
//           </Typography>
//           <Button color="inherit">Home</Button>
//           <Button color="inherit">About</Button>
//           <Button color="inherit">Contact</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// };

// export default Navbar;

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">MySoftwareCo</div>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#home">Home</a></li>
          <li className="navbar-item"><a href="#services">Services</a></li>
          <li className="navbar-item"><a href="#about">About</a></li>
          <li className="navbar-item"><a href="#testimonials">Testimonials</a></li>
          <li className="navbar-item"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
