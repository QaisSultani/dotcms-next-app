"use client";

import Link from "next/link";

const links = [
  { href: "#home", label: "Home" },
  { href: "#activities", label: "Activities" },
  { href: "#events", label: "Events" },
  { href: "#blogs", label: "Blog" },
  { href: "#footer", label: "Quick Links" },
];

const Header = () => {
  return (
    <header id="home">
      <nav className="bg-white shadow-md top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="#home" className="text-xl font-bold text-red-500">
            MySite
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-red-500"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <select
              className="border rounded p-1"
              onChange={(e) => {
                if (e.target.value) {
                  document.querySelector(e.target.value)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }}
            >
              {links.map((link) => (
                <option key={link.href} value={link.href}>
                  {link.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
