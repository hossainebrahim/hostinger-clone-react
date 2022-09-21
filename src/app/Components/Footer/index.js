import React from "react";
import logo from "../../images/Hostinger-logo-1.png";
import visa from "../../images/visa.webp";
import mast from "../../images/mastercard.webp";
import dis from "../../images/discover.webp";
import dine from "../../images/dinersclub.webp";
import rup from "../../images/rupay.webp";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterSquare,
} from "react-icons/ai";

let links = [
  "Web Hosting",
  "VPS Hosting",
  "Minecraft Server Hosting",
  "CyberPanel Hosting",
  "Cloud Hosting",
  "WordPress Hosting",
  "Email Hosting",
  "  CMS Hosting",
  "Ecommerce Hosting",
  " Free Web Hosting",
  "Online Store",
  "Website Builder",
  "Buy Hosting",
];
let linksD = [
  "Domain Name Search",
  "Domain Transfer",
  "Free Domain Name",
  "XYZ Domain",
  "Cheap Domains",
  "Domain Extensions",
  "WHOIS Lookup",
  "Free SSL Certificate",
];
let linksI = [
  "Migrate to Hostinger",
  "System Status",
  "Affiliate Program",
  "Payment Methods",
  "Rewards",
  "Reviews",
  "Pricing",
  "Sitemap",
];
let linksCom = [
  "About Hostinger",
  "Our Technology",
  "Roadmap",
  "Customer Care",
  "Blog",
];
const Footer = () => {
  return (
    <div className="bg-[#f4f5ff]">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="flex flex-wrap gap-5 py-10">
          {/* footer 1*/}
          <div className="w-full lg:flex-1">
            <div>
              <img src={logo} alt="logo" className="w-44" />
              <p className="mt-4 text-[14px] text-[#2f1c6a]">
                We are a web hosting company with a mission to help everyone who
                goes online succeed. We accomplish this by continuously
                developing server technology, giving expert assistance, and
                ensuring a flawless online website hosting experience.
              </p>
              <div className="flex flex-wrap gap-4 mt-8 cursor-pointer">
                <img src={visa} alt="cart" />
                <img src={mast} alt="cart" />
                <img src={dis} alt="cart" />
                <img src={dine} alt="cart" />
                <img src={rup} alt="cart" />
                <p>And More</p>
              </div>
            </div>
          </div>
          {/* footer 2*/}
          <div className="w-full lg:w-2/3">
            <div className="flex flex-wrap gap-3">
              <div className="w-full md:flex-1">
                <h3 className="text-2xl text-[#2f1c6a] mb-2">HOSTING</h3>
                <ul className="flex flex-col">
                  {links.map((link) => (
                    <li className="text-[#2f1c6a] text-[14px] hover:text-gray-400 cursor-pointer transition-all ease-in duration-100 leading-7">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/4">
                <h3 className="text-2xl text-[#2f1c6a] mb-2">DOMAIN</h3>
                <ul className="flex flex-col">
                  {linksD.map((link) => (
                    <li className="text-[#2f1c6a] text-[14px] hover:text-gray-400 cursor-pointer transition-all ease-in duration-100 leading-7">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/4">
                <h3 className="text-2xl text-[#2f1c6a] mb-2">INFORMATION</h3>
                <ul className="flex flex-col">
                  {linksI.map((link) => (
                    <li className="text-[#2f1c6a] text-[14px] hover:text-gray-400 cursor-pointer transition-all ease-in duration-100 leading-7">
                      {link}
                    </li>
                  ))}
                </ul>
                <h3 className="text-2xl text-[#2f1c6a] mb-2 mt-4">LEGAL</h3>
                <ul className="flex flex-col">
                  <li className="text-[#2f1c6a] text-[14px] hover:text-gray-400 cursor-pointer transition-all ease-in duration-100 leading-7">
                    Privacy Policy
                  </li>
                  <li className="text-[#2f1c6a] text-[14px] hover:text-gray-400 cursor-pointer transition-all ease-in duration-100 leading-7">
                    Terms of Service
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/4">
                <h3 className="text-2xl text-[#2f1c6a] mb-2">COMPANY</h3>
                <ul className="flex flex-col">
                  {linksCom.map((link) => (
                    <li className="text-[#2f1c6a] text-[14px] hover:text-gray-400 cursor-pointer transition-all ease-in duration-100 leading-7">
                      {link}
                    </li>
                  ))}
                </ul>
                <h3 className="text-2xl text-[#2f1c6a] mb-2 mt-4">HELP</h3>
                <ul className="flex flex-col">
                  <li className="text-[#2f1c6a] text-[14px] hover:text-gray-400 cursor-pointer transition-all ease-in duration-100 leading-7">
                    Tutorials
                  </li>
                  <li className="text-[#2f1c6a] text-[14px] hover:text-gray-400 cursor-pointer transition-all ease-in duration-100 leading-7">
                    Knowledge Base
                  </li>
                  <li className="text-[#2f1c6a] text-[14px] hover:text-gray-400 cursor-pointer transition-all ease-in duration-100 leading-7">
                    Report Online Abuse
                  </li>
                </ul>
                <div className="flex flex-row gap-2 cursor-pointer mt-9">
                  <a href="">
                    <AiFillLinkedin size={28} />
                  </a>
                  <a href="">
                    <AiFillFacebook size={28} />
                  </a>
                  <a href="">
                    <AiFillInstagram size={28} />
                  </a>
                  <a href="">
                    <AiFillYoutube size={28} />
                  </a>
                  <a href="">
                    <AiFillTwitterSquare size={28} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-2 flex justify-between w-full pt-4 flex-wrap">
            <p className="text-sm text-gray-400">
              © 2004-2022 hostinger.in - India's #1 Web Hosting & Domains
              provider.
            </p>
            <p className="text-sm text-gray-400 cursor-pointer">
              Prices are listed without VAT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
