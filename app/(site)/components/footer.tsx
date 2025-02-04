"use client";
import React from "react";
import Link from "next/link";
import { IoCallSharp } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-20 relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1">
          <h1 className="font-bold text-2xl">LBA</h1>
          <ul>
              <li><Link href="#">Lassonde Blockchain Association</Link></li>
            </ul>
        </div>
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <h2 className="font-bold mb-2 text-xl">About</h2>
            <ul>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Main Website</Link></li>
              <li><Link href="#">UI/UX Design</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-2 text-xl">Pages</h2>
            <ul>
              <li><Link href="#">NFT</Link></li>
              <li><Link href="#">Team</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Demo</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-2 text-xl">Contact</h2>
            <ul>
              <li>
                <IoCallSharp className="w-fit h-fit inline-block mr-2" />
                <a href="tel:(406) 555-0120">(406) 555-0120</a>
              </li>
              <li>
                <MdEmail className="w-fit h-fit inline-block mr-2" />
                <Link href="mailto:lassondeblockchain@contact.com">Email Us</Link>
              </li>
              <li>
                <FaMapMarkerAlt className="w-fit h-fit inline-block mr-2" />
                <Link href="https://goo.gl/maps/p4cjTFxrPgbEqGKh7">York University, Toronto, Canada</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-white mt-8" />
      <div className="social-icons mt-8 flex justify-center">
        <Link href="https://www.instagram.com/lassondeblockchain/">
          <AiFillInstagram className="w-fit h-fit inline-block mx-2 text-4xl" />
        </Link>
        <Link href="https://twitter.com/lassondeLBA">
          <AiOutlineTwitter className="w-fit h-fit inline-block mx-2 text-4xl" />
        </Link>
        <Link href="https://www.linkedin.com/company/lassonde-blockchain-association">
          <AiFillLinkedin className="w-fit h-fit inline-block mx-2 text-4xl" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;