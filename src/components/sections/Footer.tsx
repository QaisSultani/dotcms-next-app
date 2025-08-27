"use client";

import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone } from "lucide-react";
import { FOOTER_QUICK_LINKS, FOOTER_SOCIAL_LINKS } from "@/constants/links";
import Logo from "@/components/shared/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-background border-t flex justify-center">
      <div className="container px-4 sm:pt-20 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3>
              <Logo />
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Discover amazing products, events, and experiences. Join our
              community for unforgettable adventures and lasting memories.
            </p>
            <address className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Adventure Street, Explorer City</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>hello@mysite.com</span>
              </div>
            </address>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              {FOOTER_QUICK_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold">Stay Connected</h4>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <form
                className="flex gap-2 flex-col"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address for newsletter subscription
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-input rounded-md bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>

              {/* Social Links */}
              <div className="flex gap-4">
                {FOOTER_SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={social.label}
                      onClick={(e) => e.preventDefault()}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <small className="text-sm text-muted-foreground">
            © {currentYear} MySite. All rights reserved.
          </small>
          <small className="text-sm text-muted-foreground">
            Built with Next.js and dotCMS
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
