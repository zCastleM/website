"use client";
import Logo from "@/assets/logo/logo";
import { Button } from "@workspace/ui/components/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@workspace/ui/components/navigation-menu";
import { cn } from "@workspace/ui/lib/utils";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { NavigationData } from "@/types";

type NavigationSection = {
  title: string;
  href: string;
};

const CollaborateButton = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => (
  <Button
    className={className}
    onClick={onClick || (() => console.log("Collaborate clicked"))}
    size="lg"
    variant="default"
  >
    <Icon icon="mdi:handshake" className="mr-2 size-5" />
    Collaborate
  </Button>
);

export function Navbar({
  navbarData: initialNavbarData,
  settingsData: initialSettingsData,
}: NavigationData) {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { columns = null } = initialNavbarData || {};
  const { logo = null, siteTitle = null } = initialSettingsData || {};

  // Convert Sanity columns to navigation sections
  const navigationData: NavigationSection[] =
    columns
      ?.filter((column) => column.type === "link")
      .map((column) => ({
        title: column.name || "",
        href: column.href || "#",
      })) || [];

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) setIsOpen(false);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  useEffect(() => {
    // Throttle scroll handler to improve performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll);
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleScroll, handleResize, handleKeyDown]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        sticky
          ? "bg-background/95 shadow-md backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            {logo && (
              <Logo
                alt={siteTitle || ""}
                height={40}
                image={logo}
                priority
                width={120}
              />
            )}
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navigationData.map((section, index) => (
                <NavigationMenuItem key={`${section.title}-${index}`}>
                  <Link href={section.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 font-medium text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      )}
                    >
                      {section.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 md:flex">
            <CollaborateButton />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Button
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen(!isOpen)}
              size="icon"
              variant="ghost"
            >
              <Icon
                icon={isOpen ? "mdi:close" : "mdi:menu"}
                className="size-6"
              />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="border-t bg-background py-4 md:hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col gap-2" role="menu">
              {navigationData.map((section, index) => (
                <Link
                  key={`mobile-${section.title}-${index}`}
                  className="rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  href={section.href}
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                >
                  {section.title}
                </Link>
              ))}
              <div className="mt-4 px-4">
                <CollaborateButton className="w-full" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
