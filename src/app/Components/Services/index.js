import React from "react";

let serItem = [
  {
    id: 1,
    title: "Free SSL",
    img: "https://assets.hostinger.com/images/homepage2021/services/free-ssl-c672bc7cfb.svg",
  },
  {
    id: 2,
    title: "Free Migration",
    img: "https://assets.hostinger.com/images/homepage2021/services/free-migration-913e6bfab2.svg",
  },
  {
    id: 3,
    title: "PHP Speed Boost",
    img: "https://assets.hostinger.com/images/homepage2021/services/php-speed-boost-f7850027dc.svg",
  },
  {
    id: 4,
    title: "24/7/365 Tech Support",
    img: "https://assets.hostinger.com/images/homepage2021/services/tech-support-ebf15a3d83.svg",
  },
  {
    id: 5,
    title: "Access Management",
    img: "https://assets.hostinger.com/images/homepage2021/services/access-management-01f91d3436.svg",
  },
  {
    id: 6,
    title: "Automated backups",
    img: "https://assets.hostinger.com/images/homepage2021/services/backups-2d6e895cf1.svg",
  },
  {
    id: 7,
    title: "LiteSpeed Cache Plugin",
    img: "https://assets.hostinger.com/images/homepage2021/services/litespeed-wp-module-e0e9453f3c.svg",
  },
  {
    id: 8,
    title: "Auto Script Installer",
    img: "https://assets.hostinger.com/images/homepage2021/services/script-installer-6fe9e03c5c.svg",
  },
  {
    id: 9,
    title: "eCommerce Optimization",
    img: "https://assets.hostinger.com/images/homepage2021/services/ecommerce-c7adac5be7.svg",
  },
  {
    id: 10,
    title: "DDoS Protection",
    img: "https://assets.hostinger.com/images/homepage2021/services/cloudflare-d1bcbdabc9.svg",
  },
  {
    id: 11,
    title: "One-Click WordPress Installation",
    img: "https://assets.hostinger.com/images/homepage2021/services/wp-installation-2161a49ee3.svg",
  },
  {
    id: 12,
    title: "99.9% Uptime Guarantee",
    img: "https://assets.hostinger.com/images/homepage2021/services/uptime-guarantee-1e9eae1cb0.svg",
  },
];
const Services = () => {
  return (
    <div className="bg-white">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="w-full py-10">
          <h1 className="md:text-4xl text-3xl text-center font-bold text-[#2f1c6a] ">
            Our services include:
          </h1>
          <div className="md:grid lg:grid-rows-4 md:grid-rows-6 grid-flow-col gap-4 mt-6">
            {serItem.map((item) => (
              <div
                key={item.id}
                className="flex gap-2 justify-start items-center"
              >
                <img src={item.img} alt="" />
                <h4 className="text-xl font-semibold text-[#2f1c6a]">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
