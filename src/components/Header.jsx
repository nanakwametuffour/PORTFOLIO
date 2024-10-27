import { Button, Navbar, NavbarToggle } from "flowbite-react";
 import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <Navbar className="bg-[#121212]/100 border-b border-[#33353F] py-5 px-4 sticky top-0 z-50">
      <div className="">
        <h1 className="text-3xl">NANAKWAME</h1>
      </div>
       <div clavssName=" border w-10 h-10">

      <Navbar.Toggle className=" border bg-transparent hover:bg-transparent p-2 "/>
       </div>
      <Navbar.Collapse>
        
        <Navbar.Link href="#about" className="bg-transparent" active>
          <span className="text-[#ADB7BE] hover:text-white text-base md:text-2xl lg:text-2xl">About</span>
        </Navbar.Link>
        <Navbar.Link href="#projects" className="bg-transparent" active>
          <span className="text-[#ADB7BE] hover:text-white text-base md:text-2xl lg:text-2xl">Projects</span>
        </Navbar.Link>
        <Navbar.Link href="#contact" className="bg-transparent " active>
          <span className="text-[#ADB7BE] hover:text-white text-base md:text-2xl lg:text-2xl">Contact</span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
