const Navbar = () => {
  return (<>
  <nav className="navbar navbar-expand-lg bg-body-tertiary nav-component">
  <div className="container-fluid navbar-container" >
    <a className="navbar-brand" href="#"><img src="logo.png"alt="logo" /></a>
    
    <form className="d-flex" role="search">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">About Us</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">More options</a>
        <a className="nav-link disabled" aria-disabled="true">Contact Us</a>
        <a className="nav-link disabled" aria-disabled="true"><button type="button" className="btn btn-outline-warning">Log In</button></a>
        <a className="nav-link disabled" aria-disabled="true"><button type="button" className="btn btn-warning">Sign Up</button></a>
      </div>
    </form>
  </div>
</nav>
  </>);
};
export default Navbar;
