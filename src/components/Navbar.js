export default function Navbar({ onClick, currentPage}) {
  return (
    <nav>
      <ul>
        <li onClick={() => onClick("About Me")} className={currentPage === "About Me"?"Highlight":""}>AboutMe</li>
        <li onClick={() => onClick("Portfolio")}className={currentPage === "Portfolio"?"Highlight":""}>Portfolio</li>
        <li onClick={() => onClick("Contact")}className={currentPage === "Contact"?"Highlight":""}>Contact</li>
        <li onClick={() => onClick("Resume")}className={currentPage === "Resume"?"Highlight":""}>Resume</li>
      </ul>
    </nav>
  );
}
