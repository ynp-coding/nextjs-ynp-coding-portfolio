"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
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

import { Home, Info, Folder, Brain, Phone } from "lucide-react"; // ✅ ใช้ไอคอนจาก lucide-react

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

  const router = useRouter();
  const pathname = usePathname();

  // ✅ ป้องกันการ redirect ระหว่าง render
  useEffect(() => {
    if (pathname === "/") {
      router.replace("#home");
    }
  }, [pathname, router]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = "home";
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop - 100 <= scrollY) current = id;
      }

      setActive((prev) => {
        if (prev !== current) {
          if (window.history.pushState) {
            window.history.pushState(null, "", `#${current}`);
          } else {
            window.location.hash = `#${current}`;
          }
          return current;
        }
        return prev;
      });
    };

    // เช็ค hash ตอนเริ่มต้น
    const hash = window.location.hash.replace("#", "");
    if (sections.some((s) => s.id === hash)) {
      setActive(hash);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavbarUI isBordered position="sticky" onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
        <p className="font-bold text-inherit">YP Engineering</p>
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
          <Button as={Link} href="#contact" color="primary" variant="flat">
            ติดต่อเรา
          </Button>
        </NavbarItem>
        <NavbarMenuToggle className="sm:hidden" />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        {sections.map(({ id, label, icon }) => (
          <NavbarMenuItem key={id}>
            <Link
              href={`#${id}`}
              onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
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
