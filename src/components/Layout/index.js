import React, { useState } from "react";
import Navbar from '../Navbar';
import DropdownNav from '../DropdownNav';
import Background from '../../images/waitingroom2.jpg';
import Footer from '../Footer';


export const Layout = ({children}) => {
	  const [isOpen, setIsOpen] = useState(false);

		const toggle = () => {
			setIsOpen(!isOpen);
		}

    return (
      <>
        <Navbar toggle={toggle} />
        <DropdownNav toggle={toggle} isOpen={isOpen} />
        <div style={{minHeight: "100vh", backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover",backgroundAttachment: "fixed", backgroundPosition: "center"}}>
				  {children}
        </div>
      	<Footer />  
    </>
  )
}