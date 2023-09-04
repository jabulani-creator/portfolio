"use client";
import "./Navbar.css";
import { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { minlinks, social } from "../data";

import Link from "next/link";

const MiniNav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav className="sticky top-0 ">
      <div className="nav-center">
        <div className="nav-header">
          {/* <Image src={logo} alt="logo" className="logo" /> */}
          <h1 className="bg-gradient-to-r from-cd-cta via-cd-cta to-bg-purple-600 bg-clip-text text-transparent text-3xl text:bold cursor-pointer">
            <Link href="/">Jabulani</Link>
          </h1>

          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {minlinks.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id} className="py-10  " onClick={toggleLinks}>
                  <a href={url} className="Li">
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <button className="bg-transparent hover:bg-cd-cta text-cd-cta font-semibold hover:text-white py-2 px-8 border border-cd-cta hover:border-transparent rounded  md:block hidden">
          <a href="https://www.linkedin.com/in/jabulani-charinga-33b030222">
            LinkedIn
          </a>
        </button>
        {/* <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul> */}
      </div>
    </nav>
  );
};

export default MiniNav;
