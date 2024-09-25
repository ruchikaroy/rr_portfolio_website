import {
  Typography,
  MobileNav,
  Navbar,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

const StickyNavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth > 960 && setOpenNav(false)
    );
  }, []);
  const navList = (
    <ul className=" mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Resume
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="-m-5 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium ml-5"
          >
            Portfolio
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1"></div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav} className="px-5">
          {navList}
          <div className="flex items-center gap-x-1"></div>
        </MobileNav>
      </Navbar>
      <div className="flex items-center m-10 text-center">
        <Button className="bg-[#eea305] text-black rounded-full p-3 mr-3"></Button>
        <Typography color="blue-gray" className="text-xl font-wei">
          Ruchika Roy, Software Developer
        </Typography>
      </div>

      <div
        /*className=" mx-auto max-w-screen-md h-screen py-12"*/ /*className="grid grid-cols-3 justify-center items-center py-10 m-10 content-center"*/
        className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center py-10 px-9"
      >
        <div className="mb-12 overflow-hidden m-10">
          <img
            alt="my-pic"
            className="rounded-full object-cover object-center h-[25rem] lg:h-[30rem]"
            src="../../src/C37AAC07-3D3A-455C-9A1B-DDCD8C6E701B_1_105_c.jpeg"
          />
        </div>
        <div
          /*className="col-span-2 text-left"8*/ className="w-full text-center lg:w-auto lg:text-left "
        >
          <Typography variant="h2" color="blue-gray" className="mb-2">
            Hello
          </Typography>
          <Typography variant="h4" color="blue-gray" className=" mb-8">
            A bit about me
          </Typography>
          <Typography color="gray" className="font-normal overflow-hidden mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            aperiam, quis perspiciatis labore hic iste dolor, nemo voluptatem,
            beatae exercitationem libero quia assumenda totam magni cumque
            repudiandae laborum voluptate ducimus!
          </Typography>
          <div>
            <Button
              style={{
                border: "0.5px solid black",
                letterSpacing: "2px",
              }}
              className=" bg-[#eea305] text-black rounded-full h-[8rem] w-[8rem] text-lg normal-case text-center hover:bg-white"
            >
              Resume
            </Button>
            <Button
              style={{
                border: "0.5px solid black",
                letterSpacing: "2px",
              }}
              className=" bg-[#ff3b25] text-black rounded-full aspect-square h-[8rem] w-[8rem] text-lg ml-5 normal-case text-center hover:bg-white "
            >
              Projects
            </Button>
            <Button
              style={{
                border: "0.5px solid black",
                letterSpacing: "2px",
              }}
              className="bg-[#80d8da] text-black rounded-full aspect-square h-[8rem] w-[8rem] text-lg ml-5 normal-case text-center hover:bg-white"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyNavBar;
