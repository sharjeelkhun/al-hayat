'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';


const NavbarComponent = () => {
    return (
        <Navbar fluid rounded>
          <Navbar.Brand href="">
            <img src="/images/logo.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">AL HAYYAT EMBORIDERY</span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
              }
            >
             
             <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
        
        </Navbar>
      );
}

export default NavbarComponent