import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.tsx";
import useDarkMode from "use-dark-mode";

/**
 * @returns Header components
 */
export default function Header() {
    const darkMode = useDarkMode(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Accueil",
        "Parcours",
        "Formations",
        "Déconnexion",
    ];

    return (
        <>
            <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll isBordered>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand>
                        <AcmeLogo />
                        <p className="font-bold text-inherit">WebVerse</p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="sm:flex gap-4" justify="center">
                    <NavbarItem isActive>
                        <Link href="#">
                            Accueil
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Parcours
                        </Link>
                    </NavbarItem>
                    <NavbarItem >
                        <Link color="foreground" href="#">
                            Formations
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="lg:flex">
                        <Link href="#">Se connecter</Link>
                    </NavbarItem>
                    <NavbarItem>
                        {/* <Button as={Link} color="primary" href="#" variant="flat"> */}
                        <Button color="primary" variant="flat" onPress={darkMode.toggle}>
                            S'inscrire
                        </Button>
                    </NavbarItem>
                </NavbarContent>
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 0 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </>
    );
}
