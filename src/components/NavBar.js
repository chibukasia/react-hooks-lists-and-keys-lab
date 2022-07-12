import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksElements = links.map(link=>{
    return <nav>
        <a key={link} href={link}>{link}</a>
      </nav>;
  })

  return <div>
    {linksElements}
  </div>
}

export default NavBar;
