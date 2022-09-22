import React, { useState } from "react";
import { FcCheckmark } from "react-icons/fc";

let planOne = [
  {
    id: 1,
    name: "Parked domains  help_outline",
    title: "100",
  },
  {
    id: 2,
    name: "Subdomains per account  help_outline",
    title: "100",
  },
  {
    id: 3,
    name: "DNS Editor  help_outline",
    title: "Full ",
  },
  {
    id: 4,
    name: "WordPress  help_outline",
    title: "Managed ",
  },
  {
    id: 5,
    name: "acceleration  help_outline",
    title: "WordPress ",
  },
  {
    id: 6,
    name: "acceleration  help_outline",
    title: "WordPress ",
  },
  {
    id: 7,
    name: "",
    title: " WP-CLI ",
  },
  {
    id: 8,
    name: "Auto Installer  help_outline",
    title: "1-click ",
  },
  {
    id: 9,
    name: "email storage",
    title: "1 GB  ",
  },
  {
    id: 10,
    name: " email mailboxes",
    title: "100 ",
  },
  {
    id: 11,
    name: "email aliases",
    title: "50 ",
  },
  {
    id: 12,
    name: "Forwarders",
    title: "5 ",
  },
  {
    id: 13,
    name: "Virus scanner",
    title: "Enterprise ",
  },
  {
    id: 14,
    name: " SPAM filter",
    title: "Enterprise ",
  },
  {
    id: 15,
    name: "Access",
    title: "WebMail ",
  },
  {
    id: 16,
    name: "Email Filters",
    title: "Custom ",
  },
  {
    id: 17,
    name: "/SMTP",
    title: "IMAP ",
  },
  {
    id: 18,
    name: "offers for Fiverr services",
    title: "Special  ",
  },
  {
    id: 19,
    name: "Database",
    title: "FAQ  ",
  },
];

let planTwo = [
  {
    id: 1,
    name: "Inodes  help_outline",
    title: "400 000 ",
  },
  {
    id: 2,
    name: " Cronjobs  help_outline",
    title: "Unlimited",
  },
  {
    id: 3,
    name: " Script Installer",
    title: "Auto ",
  },
  {
    id: 4,
    name: "WordPress  help_outline",
    title: "Managed ",
  },
  {
    id: 5,
    name: " Monitoring and Statistics",
    title: "Usage ",
  },
  {
    id: 6,
    name: "acceleration  help_outline",
    title: "WordPress ",
  },
  {
    id: 7,
    name: "",
    title: " WP-CLI ",
  },
  {
    id: 8,
    name: "Auto Installer  help_outline",
    title: "1-click ",
  },
  {
    id: 9,
    name: "email storage",
    title: "1 GB  ",
  },
  {
    id: 10,
    name: " email mailboxes",
    title: "100 ",
  },
  {
    id: 11,
    name: "email aliases",
    title: "50 ",
  },
  {
    id: 12,
    name: "Forwarders",
    title: "5 ",
  },
  {
    id: 13,
    name: "Base  help_outline",
    title: "Knowledge  ",
  },
  {
    id: 14,
    name: "help_outline",
    title: "Tutorials ",
  },
  {
    id: 15,
    name: "",
    title: "Webinars ",
  },
];

let planTopOne = [
  {
    id: 1,
    name: "traffic (Unlimited GB)",
    title: "Unmetered",
  },
  {
    id: 2,
    name: "Websites",
    title: "100",
  },
  {
    id: 3,
    name: "GB SSD Storage",
    title: "100 ",
  },
  {
    id: 4,
    name: "Weekly Backups",
    title: "Free ",
  },
];
const PlanFeatures = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="flex flex-wrap gap-5 py-10">
          {/* head line*/}
          <div className=" flex flex-col text-center">
            <h2 className="text-4xl text-[#2f1c6a] font-bold">
              All-In-One Web Hosting
            </h2>
            <p
              className="text-md text-gray-500 lg:px-80 sm:px-20 px-4 my-5 text-center
          "
            >
              We prepared the best web hosting plan for you to start. You will
              be able to adjust plans as you go - our custom-built algorithm
              will provide suggestions based on your usage.
            </p>
          </div>
          {/*best pricing*/}
          <div className="w-full shadow-md">
            <div className=" py-3 mb-6 bg-[#673de6] text-3xl font-bold text-white text-center">
              Best Web Hosting
            </div>
            <div className="flex gap-6 justify-between flex-wrap md:flex-nowrap">
              {/*first memu*/}
              <div className="hidden text-[#2f1c6a] md:block md:border-r-2 border-[#a288f1] lg:p-5 p-3 lg:px-12 px-1">
                <ul className="leading-10">
                  {planTopOne.map((plan) => (
                    <li
                      key={plan.id}
                      className="flex items-center gap-[4px] flex-wrap"
                    >
                      <FcCheckmark size={18} />
                      <span className="font-semibold text-lg">
                        {plan.title}
                      </span>
                      {plan.name}
                    </li>
                  ))}
                </ul>
              </div>
              {/*2nd memu*/}
              <div className="flex flex-col md:w-1/3 text-[#2f1c6a] md:border-r-2 border-[#a288f1] md:mx-0 mx-auto  w-auto leading-10">
                <div className="flex">
                  <span className="text-lg font-bold mr-1">₹</span>
                  <h1 className="lg:text-6xl md:text-5xl text-4xl  font-bold">
                    149.00
                  </h1>
                  <span className="text-md mt-3 ml-1 font-bold">/mo</span>
                </div>
                <span className="text-md font-semibold mb-2">
                  ₹249.00/mo when you renew
                </span>
                <button className="bg-[#673de6] text-white p-2 rounded-full text-xl flex justify-center items-center w-2/3">
                  Select
                </button>
              </div>
              {/*3rd memu*/}
              <div className=" text-[#2f1c6a] lg:p-2 p-3 lg:px-5 px-1 md:mx-0 mx-auto">
                <ul>
                  <li className="flex items-center gap-[4px] flex-wrap">
                    <FcCheckmark size={18} />
                    <span className="font-semibold text-lg">
                      Unlimited
                    </span>{" "}
                    Free SSL
                  </li>
                  <li className="flex items-center gap-[4px] flex-wrap">
                    <FcCheckmark size={18} />
                    <span className="font-semibold text-lg">Free</span> Domain
                  </li>
                  <li className="flex items-center gap-[4px] flex-wrap">
                    <FcCheckmark size={18} />
                    <span className="font-semibold text-lg">Free</span> Email
                  </li>
                  <li className="flex items-center gap-[4px] flex-wrap">
                    <FcCheckmark size={18} />
                    <span className="font-semibold text-lg">Optimized</span> for
                    WordPress
                  </li>
                </ul>
              </div>
            </div>

            {/*Plan Features*/}
            <div className={`${open ? "block" : "hidden"}`}>
              <div className="text-center py-5">
                <h1 className="text-3xl font-bold text-[#2f1c6a]">
                  Plan Features
                </h1>
              </div>
              <div className="flex gap-6 justify-between flex-wrap md:flex-nowrap">
                {/*first memu*/}
                <div className="text-[#2f1c6a] md:border-r-2 border-[#a288f1] lg:p-5 p-3 lg:px-8 px-1 md:mx-0 mx-auto">
                  <ul className="leading-10">
                    {planOne.map((plan) => (
                      <li
                        key={plan.id}
                        className="flex items-center gap-[4px] flex-wrap"
                      >
                        <FcCheckmark size={18} />
                        <span className="font-semibold text-lg">
                          {plan.title}
                        </span>
                        {plan.name}
                      </li>
                    ))}
                  </ul>
                </div>
                {/*2nd memu*/}
                <div className="flex flex-col md:w-1/3 text-[#2f1c6a] md:border-r-2 border-[#a288f1] lg:p-5 p-3 lg:px-8 px-1 leading-10 md:mx-0 mx-auto w-auto">
                  <ul className="leading-10">
                    {planTwo.map((plan) => (
                      <li
                        key={plan.id}
                        className="flex items-center gap-[4px] flex-wrap"
                      >
                        <FcCheckmark size={18} />
                        <span className="font-semibold text-lg">
                          {plan.title}
                        </span>
                        {plan.name}
                      </li>
                    ))}
                  </ul>
                </div>
                {/*3rd memu*/}
                <div className=" text-[#2f1c6a] lg:p-2 p-3 lg:px-5 px-1 md:mx-0 mx-auto  w-auto">
                  <ul className="leading-10">
                    {planTwo.map((plan) => (
                      <li
                        key={plan.id}
                        className="flex items-center gap-[4px] flex-wrap"
                      >
                        <FcCheckmark size={18} />
                        <span className="font-semibold text-lg">
                          {plan.title}
                        </span>
                        {plan.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center p-4">
              <p
                onClick={() => setOpen(!open)}
                className="text-lg underline cursor-pointer"
              >
                {open ? "See Less" : " See All Features"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanFeatures;
