import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { company } from "../../data/company";
import { navigation } from "../../data/navigation";
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);
  const { pathname } = useLocation();
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 35);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const before = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 901px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    const handle = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (event.key === "Tab") {
        const links = panel.current?.querySelectorAll<HTMLAnchorElement>("a");
        const last = links?.[links.length - 1];
        if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          toggle.current?.focus();
        } else if (
          event.shiftKey &&
          document.activeElement === toggle.current
        ) {
          event.preventDefault();
          last?.focus();
        }
      }
    };
    document.addEventListener("keydown", handle);
    return () => {
      document.body.style.overflow = before;
      document.removeEventListener("keydown", handle);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);
  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <Link
          to="/"
          aria-label={`${company.shortName} home`}
          onClick={() => setOpen(false)}
        >
          <img
            className="logo"
            src={company.logo}
            width="205"
            height="42"
            alt={company.legalName}
          />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((n) => (
            <NavLink end={n.to === "/"} key={n.to} to={n.to}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <Link className="button primary header-cta" to="/quote">
          Request a Quote
          <ArrowUpRight size={16} />
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          ref={panel}
          className="mobile-nav"
          id="mobile-nav"
          aria-label="Mobile navigation"
        >
          {navigation.map((n) => (
            <Link
              aria-current={pathname === n.to ? "page" : undefined}
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
            >
              {n.label}
              <ArrowUpRight size={18} />
            </Link>
          ))}
          <a href={`tel:${company.phones[0].replace(/[^+\d]/g, "")}`}>Call Gramvista</a>
          <a href={`https://wa.me/${company.whatsapp}`}>WhatsApp</a>
          <Link
            className="button primary"
            to="/quote"
            onClick={() => setOpen(false)}
          >
            Request a Quote
            <ArrowUpRight size={18} />
          </Link>
        </nav>
      )}
    </header>
  );
}
