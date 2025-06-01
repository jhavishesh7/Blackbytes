import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import { Frameworks } from "../components/Frameworks";
import { Mail, Instagram, Linkedin } from "lucide-react";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About BlackBytes</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Welcome to BlackBytes</p>
            <p className="subtext">
              BlackBytes is a tech revolution. We empower developers through hands-on learning and cutting-edge project development in Web Development, AI/ML, IoT, and Python. We also offer top-tier tech services including software and web development.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "10deg", top: "30%", left: "15%" }}
              text="React"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-15deg", top: "60%", left: "45%" }}
              text="Next.js"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", bottom: "30%", left: "70%" }}
              text="Web3"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-20deg", top: "10%", left: "38%" }}
              text="Python"
              containerRef={grid2Container}
            />
             <Card
              style={{ rotate: "-20deg", top: "25%", left: "50%" }}
              text="Node.js"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Global Reach</p>
            <p className="subtext">
              BlackBytes collaborates with global talent and clients, delivering impactful solutions no matter where you're located.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Want to collaborate or learn with us?
            </p>
            <div className="flex gap-6 text-black font-bold">
              <a href="https://www.instagram.com/blackbytes_np/?e=eea30dd2-3bac-46ac-93c7-c2188631aa76&g=5" target="_blank" className="flex items-center gap-2 hover:underline">
                <Instagram size={20} /> Instagram
              </a>
              {/* <a href="https://linkedin.com/company/blackbytes" target="_blank" className="flex items-center gap-2 hover:underline">
                <Linkedin size={20} /> LinkedIn
              </a> */}
              <a href="blackbytenp@gmail.com" className="flex items-center gap-2 hover:underline">
                <Mail size={20} /> Email
              </a>
            </div>
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              We specialize in a wide range of technologies — from frontend frameworks to AI tools — enabling us to deliver modern, scalable, and reliable digital solutions.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
