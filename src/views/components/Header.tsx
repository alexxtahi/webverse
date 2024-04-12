import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.tsx";
import useDarkMode from "use-dark-mode";

/**
 * @returns Header components
 */
export default function Header() {
    const darkMode = useDarkMode(false);


    return (
        <Navbar shouldHideOnScroll>
            <NavbarBrand>
                <AcmeLogo />
                <p className="font-bold text-inherit">ACME</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    {/* <Button as={Link} color="primary" href="#" variant="flat"> */}
                    <Button onClick={darkMode.toggle} color="primary" variant="flat">
                        Dark Mode
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
