import React, { useEffect } from "react";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

function Layout({ children }) {
  const currentDate = new Date();

  const navigate = useNavigate();


  useEffect(() => {
    navigate("/html", { replace: true });
  }, []); 

  return (
    <>
      
        <header>
          <Nav/>
        </header>
        <main>{children}</main>
      
      <footer>&copy; {currentDate.getFullYear()}</footer>
    </>
  );
}

export default Layout;
