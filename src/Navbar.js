import React from 'react';
import logo from './logo.png';
const Navbar =(props)=>{
return(
    <>
    <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <a  className="navbar-brand" href="http://localhost:3001/"><img className="mb-1 " style={{width:"25px"}} src={logo}/> Movie</a>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={props.change} />

    </form>
  </div>
</nav>
    </>
)
}
export default Navbar;