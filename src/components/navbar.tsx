"use client";

import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";
import {
  Navbar as NavbarUI,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@heroui/react";

import { Home, Info, Folder, Brain, Phone } from "lucide-react";
import { ThemeSwitcher } from "./theme-switcher";

const sections = [
  { id: "home", label: "หน้าแรก", icon: <Home className="w-4 h-4 mr-1" /> },
  {
    id: "about",
    label: "เกี่ยวกับเรา",
    icon: <Info className="w-4 h-4 mr-1" />,
  },
  { id: "projects", label: "ผลงาน", icon: <Folder className="w-4 h-4 mr-1" /> },
  { id: "skills", label: "ทักษะ", icon: <Brain className="w-4 h-4 mr-1" /> },
  {
    id: "contact",
    label: "ติดต่อเรา",
    icon: <Phone className="w-4 h-4 mr-1" />,
  },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 📌 Scroll listener: update `active` section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = "home";
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop - 150 <= scrollY) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger once

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 💡 อัปเดต hash อย่างปลอดภัย (ไม่ทำใน render)
  useEffect(() => {
    const currentHash = window.location.hash.replace("#", "");
    if (currentHash !== active && typeof window !== "undefined") {
      history.replaceState(null, "", `#${active}`);
    }
  }, [active, isMenuOpen]);

  return (
    <NavbarUI
      isBordered
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <p className="font-bold text-inherit">YNP Coding</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {sections.slice(0, -1).map(({ id, label, icon }) => (
          <NavbarItem key={id} isActive={active === id}>
            <Link
              href={`#${id}`}
              className={cn(
                "flex items-center gap-1 transition-colors hover:text-primary",
                {
                  "text-primary font-semibold": active === id,
                }
              )}
            >
              {icon}
              {label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Button
            as={Link}
            href="#contact"
            color="primary"
            variant="flat"
            startContent={<Phone className="w-4 h-4 mr-1" />}
          >
            ติดต่อเรา
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarMenuToggle className="sm:hidden" />
      </NavbarContent>

      <NavbarMenu>
        {sections.map(({ id, label, icon }) => (
          <NavbarMenuItem key={id}>
            <Link
              href={`#${id}`}
              onClick={() => setIsMenuOpen(false)}
              className={cn("flex items-center gap-2 px-4 py-2 w-full", {
                "text-primary font-bold": active === id,
              })}
            >
              {icon}
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarUI>
  );
}
