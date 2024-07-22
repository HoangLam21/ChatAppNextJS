"use client";
import React, { useEffect } from "react";
import { useMemo } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavBarItems } from "@/types/icon-props";
const NavBar = () => {
  const navbarItems: NavBarItems[] = [
    {
      unselectedIcon: "/assets/icons/MessageUnselected.png",
      selectedIcon: "/assets/icons/MessageSelected.png",
      link: "/message",
    },
    {
      unselectedIcon: "/assets/icons/FriendsUnselected.png",
      selectedIcon: "/assets/icons/FriendsSelected.png",
      link: "/friends",
    },
    {
      unselectedIcon: "/assets/icons/GroupsUnselected.png",
      selectedIcon: "/assets/icons/GroupsSelected.png",
      link: "/groups",
    },
    {
      unselectedIcon: "/assets/icons/SettingUnselected.png",
      selectedIcon: "/assets/icons/SettingSelected.png",
      link: "/setting",
    },
  ];

  const menuItems = [
    { label: "Message", link: "/message" },
    { label: "Friends", link: "/friends" },
    { label: "Privacy", link: "/privacy" },
    { label: "Report", link: "/report" },
    { label: "Setting", link: "/setting" },
  ];
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = React.useState("");
  const iconSize = "30";
  const iconColor = "#301755";
  const pathName = usePathname();
  return (
    <Navbar
      className="border-b-2 border-primary-200"
      isBordered
    >
      <NavbarBrand className="hidden sm:flex">
        <Image src="/Logo.png" alt="logo" width={60} height={60}></Image>
        <p className="font-bold text-inherit hidden sm:block">TuCu Chat</p>
      </NavbarBrand>

      <NavbarContent className="sm:flex gap-4 justify-center w-full" justify="center">
        {navbarItems.map((m, index) => {
          const isActive = pathName?.startsWith(m.link);
          return (
            <NavbarItem key={index} className="justify-self-center">
              <Link
                href={m.link}
                className={
                  isActive
                    ? "bg-primary-500 text-text-w transition duration-150 p-3 text-medium font-semibold hover:text-primary-400 rounded-full"
                    : "transition duration-150 p-3 text-medium font-semibold hover:text-primary-400 rounded-full"
                }
              >
                <Image
                  alt="nav-icon"
                  src={isActive ? m.selectedIcon : m.unselectedIcon}
                  width={35}
                  height={40}
                ></Image>
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent
        as="div"
        justify="end"
        className="hidden sm:flex"
      >
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="/UserAvatar.jpg"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem
              key="profile"
              className="h-14 gap-2"
              color="secondary"
            >
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings" color="secondary">
              My Settings
            </DropdownItem>
            <DropdownItem key="team_settings" color="secondary">
              Team Settings
            </DropdownItem>
            <DropdownItem key="analytics" color="secondary">
              Analytics
            </DropdownItem>
            <DropdownItem key="system" color="secondary">
              System
            </DropdownItem>
            <DropdownItem key="configurations" color="secondary">
              Configurations
            </DropdownItem>
            <DropdownItem key="help_and_feedback" color="secondary">
              Help & Feedback
            </DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};
export default React.memo(NavBar);
