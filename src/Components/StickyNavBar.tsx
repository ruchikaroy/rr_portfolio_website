import {
  Typography,
  Navbar,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StickyNavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth > 960 && setOpenNav(false)
    );
  }, []);
  const navList = (
    <div className=" mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link to={"/"}>
        <Typography
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="#" className="flex items-center">
            Home
          </a>
        </Typography>
      </Link>
      <Typography variant="small" color="blue-gray" className="p-1 font-normal">
        <a
          href="https://drive.google.com/file/d/1aVABOWWdm-h1lZ85onhL2PRoyHcup0xI/view?usp=sharing"
          target="blank"
          className="flex items-center"
        >
          Resume
        </a>
      </Typography>
      <Link to="/projects">
        <Typography
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="#" className="flex items-center">
            Projects
          </a>
        </Typography>
      </Link>
      <Link to="/contact">
        <Typography
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="#" className="flex items-center">
            Contact
          </a>
        </Typography>
      </Link>
    </div>
  );

  return (
    <>
      <div className="-m-5 max-h-[768px] w-[calc(100% + 48px)] overflow-scroll">
        <Navbar className="sticky top-0 z-10 max-w-full rounded-none px-4 py-3 lg:px-8 lg:py-4">
          <div
            style={{ marginBottom: "-10px" }}
            className="flex items-center justify-between text-blue-gray-900"
          >
            <div className="flex items-center">
              <svg
                className="h-8 w-8 text-amber-800 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              <Typography className="mr-4 py-1.5 font-bold ml-3">
                Ruchika Roy, Software Developer
              </Typography>
            </div>
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
          <Collapse open={openNav} className="px-5">
            {navList}
            <div className="flex items-center gap-x-1"></div>
          </Collapse>
        </Navbar>
        <div className="border-b-2 border-gray-300"></div>
      </div>
    </>
  );
};

export default StickyNavBar;
