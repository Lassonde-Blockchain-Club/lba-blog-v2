"use client";
import React from "react";
import Link from "next/link";
import { IoCallSharp } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

function NewsletterSection() {
  return (
    <section className="bg-gray-800 text-white p-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold">Welcome to LBA - Blog</h2>
          <p className="mt-3">
            Don't just learn – share. Your articles can turn your profile into a
            hub for like-minded professionals, enhancing collaborations and
            knowledge exchange.
          </p>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <div className="flex flex-col items-center md:items-middle">
            <input
              type="email"
              placeholder="Your email address"
              className="p-1 text-black mb-2 w-1/2 rounded-lg text-sm" // Adjusted padding, width, and added border-radius
            />
            <button className="p-1 bg-red-600 text-white font-bold w-1/2 rounded-lg text-sm">
              Join Us
            </button>{" "}
            {/* Adjusted padding, width, and added border-radius */}
          </div>
        </div>
      </div>
    </section>
  );
}


function NewsletterSection() {
  return (
    <section className="bg-gray-900 text-white py-8 px-4 md:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-900 p-6 md:p-8 rounded-full" style={{
          borderImage: 'linear-gradient(to left, orange, indigo) 1',
          borderWidth: '2px',
          borderStyle: 'solid'
        }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex-1 items-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                <p>Welcome to LBA - Blog</p>
                <p className="text-lg">a continuous improvement</p>
              </h2>
              <p className="mb-4 text-sm">
                Don't just learn – share. Your articles can turn your profile into a hub for like-minded professionals, enhancing collaborations and knowledge exchange.
              </p>
            </div>
            <div className="flex-1">
               
              {/* <div className="flex flex-row justify-center items-end rounded-l"> */}
                <div className="flex justify-center">
                  <form>
                  <input
      
                    type="email"
                    placeholder="Your email address"
                    className="w-[50%] items-right p-2 text-black flex-1 rounded-l-lg"
                    style={{ minWidth: '200px' }}
                  />
                  <button className="bg-white text-orange-700 hover:text-orange-600 font-bold py-2 px-4 rounded-r-lg transition-colors duration-300">
                    Join Us {">"}
                  </button>
                  </form>
                </div>
                <div className="flex justify-center">
                  <p className="text-xs text-center">
                    Share your journey through engaging articles and videos that capture your discoveries, experiences, and insights within this vibrant community, fostering a cycle of perpetual growth and learning.
                  </p>
                </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



function Footer() {
  return (
    <footer className="bg-gray-950 text-white p-20 relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1">
          <h1 className="font-bold text-2xl">
            <img src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d275875e.png&amp;w=1080&amp;q=75" alt="LBA Logo" width="80"></img>
          </h1>
          <ul>
              <li><Link href="#">
                <div>Lassonde</div> 
                <div>Blockchain Association</div> 
                </Link>
              </li>
            </ul> 

        </div>
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <h2 className="font-bold mb-2 text-xl">About</h2>
            <ul>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Main Website</Link>
              </li>
              <li>
                <Link href="#">UI/UX Design</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-2 text-xl">Pages</h2>
            <ul>
              <li>
                <Link href="#">NFT</Link>
              </li>
              <li>
                <Link href="#">Team</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Demo</Link>
              </li>
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
                <Link href="mailto:lassondeblockchain@contact.com">
                  Email Us
                </Link>
              </li>
              <li>
                <FaMapMarkerAlt className="w-fit h-fit inline-block mr-2" />
                <Link href="https://goo.gl/maps/p4cjTFxrPgbEqGKh7">
                  York University, Toronto, Canada
                </Link>
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

export default function Layout() {
  return (
    <>
      <NewsletterSection />
      <Footer />
    </>
  );
}

