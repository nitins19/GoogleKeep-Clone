import React from "react";
function Footer(){
    const year=new Date().getFullYear();
    return(
        
        <footer>
        <p className="footertag">copyright © {year}</p>
    </footer>
    );
    
}
export default Footer;