import { Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import myImage from "../assets/C37AAC07-3D3A-455C-9A1B-DDCD8C6E701B_1_105_c.jpeg";

const Content = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center py-10 px-9">
        <div className="mb-12 overflow-hidden m-10">
          <img
            alt="my-pic"
            className="rounded-full object-cover object-center h-[25rem] lg:h-[30rem]"
            src={myImage}
          />
        </div>

        <div className="w-full text-center lg:w-auto lg:text-left ">
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
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1aVABOWWdm-h1lZ85onhL2PRoyHcup0xI/view?usp=sharing",
                  "_blank"
                )
              }
            >
              Resume
            </Button>
            <Link to="/projects">
              <Button
                style={{
                  border: "0.5px solid black",
                  letterSpacing: "2px",
                }}
                className=" bg-[#ff3b25] text-black rounded-full aspect-square h-[8rem] w-[8rem] text-lg ml-5 normal-case text-center hover:bg-white "
              >
                Projects
              </Button>
            </Link>
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
    </>
  );
};

export default Content;
