import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import {Button} from '../ui/button'
import CustomButton from "../ui/CustomButton";

const SecondNav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const [header, setHeader] = useState(false);
    useEffect(() => {
        const scrollYPos = window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        });
        return () => window.removeEventListener("scroll", scrollYPos);
    }, []);

  return (
    <div className={`${containerStyles}`}>
        <a href="#" className={`flex items-center gap-x-4 text-md ${linkStyles}` }><Phone  size={'20'}/>
        <span className="hover:text-primary">866-978-2220</span></a>

       <CustomButton color={header ? 'white' : 'black'} bg={header ? 'black' : 'white'} text={'Get in Touch'}/>
    </div>
  );
};

export default SecondNav;
