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
import {
  FriendsIcon,
  MessageIcon,
  PrivacyIcon,
  ReportIcon,
  SettingIcon,
} from "./NavBarIcon";
import { usePathname } from "next/navigation";
const SideBar = () => {
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
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <Image src="/Logo.png" alt="logo" width={60} height={60}></Image>
        <p className="font-bold text-inherit">TuCu Chat</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((m, index) => {
          const isActive = pathName?.startsWith(m.link);
          return (
            <NavbarItem key={index}>
              <Link
                href={m.link}
                className={
                  isActive
                    ? "bg-primary-500 text-text-w rounded-3xl transition p-3 text-medium font-semibold hover:text-primary-400"
                    : "transition text-medium font-semibold hover:text-primary-400"
                }
              >
                {m.label}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent as="div" justify="end">
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
      <NavbarMenu className=" p-0 border-t-2 border-primary-200">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item.label}-${index}`}
            className="border-b-2 border-primary-200 border-opacity-20 group place-content-center justify-center transition hover:bg-primary-500 p-5"
          >
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full text-text-b justify-self-center place-items-center place-content-center group-hover:text-text-w"
              href={item.link}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
export default React.memo(SideBar);
