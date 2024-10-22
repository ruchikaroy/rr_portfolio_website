import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import projectPic from "../assets/Screenshot 2024-10-21 at 11.28.46.png";
import projectPic2 from "../assets/Screenshot 2024-10-21 at 14.18.45.png";
import projectPic3 from "../assets/Screenshot 2024-10-21 at 16.49.02.png";
import { FaNode } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiJest } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";
import { SiExpo } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

const Projects = () => {
  return (
    <>
      <div className="text-center mt-12 mb-6">
        <Typography variant="h2">Projects</Typography>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-0 ">
        <Card
          style={{ height: "510px" }}
          className="mt-6 w-96 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
        >
          <CardHeader
            floated={false}
            color="blue-gray"
            className="relative h-56.9"
          >
            <img src={projectPic} alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              NC News API
            </Typography>
            <Typography variant="small">
              A CRUD API that lets the users query the database to create,
              read,update and delete data. All the endpoints have been tested
              for standard errors....
            </Typography>
            <a href="https://github.com/ruchikaroy/nc-news" target="blank">
              <button className="text-gray-500 hover:text-black text-sm mb-2">
                Read More
              </button>
            </a>
            <div className="flex gap-2 mt-3">
              <FaNode
                size="20"
                style={{
                  backgroundColor: "black",
                  color: "#519942",
                  borderRadius: "5px",
                }}
              />
              <TbBrandJavascript
                size="20"
                style={{
                  backgroundColor: "black",
                  color: "#ffff00",
                  borderRadius: "5px",
                }}
              />
              <BiLogoPostgresql size="20" style={{ color: "#31648c" }} />
              <SiJest size="20" style={{ color: "#944058" }} />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              onClick={() =>
                window.open("https://news-api-ibvn.onrender.com/api", "_blank")
              }
            >
              View
            </Button>
          </CardFooter>
        </Card>
        <Card
          style={{ height: "510px" }}
          className="mt-6 w-96 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
        >
          <CardHeader
            floated={false}
            color="blue-gray"
            className="relative h-56.9"
          >
            <img
              style={{
                height: "220px",
              }}
              src={projectPic2}
              alt="card-image"
              className=" w-full h-full object-cover object-top"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              NC News App
            </Typography>
            <Typography variant="small">
              NC News is a sample project that provides a fully functional core
              feature set, showcasing a streamlined and efficient initial
              version.
            </Typography>
            <a
              href="https://github.com/ruchikaroy/fe-project-nc-news"
              target="blank"
            >
              <button className="text-gray-500 hover:text-black text-sm mb-2">
                Read More
              </button>
            </a>
            <div className="flex gap-2 mt-3">
              <FaNode
                size="20"
                style={{
                  backgroundColor: "black",
                  color: "#519942",
                  borderRadius: "5px",
                }}
              />
              <SiVite
                size="20"
                style={{
                  backgroundColor: "black",
                  color: "#f5ca26",
                  borderRadius: "5px",
                }}
              />
              <FaReact
                size="20"
                style={{
                  backgroundColor: "black",
                  color: "#00d8fe",
                  borderRadius: "5px",
                }}
              />
              <TbBrandJavascript
                size="20"
                style={{
                  backgroundColor: "black",
                  color: "#ffff00",
                  borderRadius: "5px",
                }}
              />
              <SiChakraui
                size="20"
                style={{
                  color: "#2bbfb3",
                  borderRadius: "5px",
                }}
              />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              onClick={() =>
                window.open("https://rroy-nc-news.netlify.app/", "_blank")
              }
            >
              View
            </Button>
          </CardFooter>
        </Card>
        <Card
          style={{ height: "510px" }}
          className="mt-6 w-96 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
        >
          <CardHeader
            floated={false}
            color="blue-gray"
            className="relative h-56.9"
          >
            <img
              style={{
                height: "220px",
                background: "#d9d9d9",
              }}
              src={projectPic3}
              alt="card-image"
              className=" w-full h-full object-contain object-top"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Whimsy Date App
            </Typography>
            <Typography variant="small">
              Whimsydate is a React Native app that allows users to generate
              suggestions for date nights, whether with a partner, friend, or
              for a solo outing.
            </Typography>
            <a href="https://github.com/ruchikaroy/WhimsyDate" target="blank">
              <button className="text-gray-500 hover:text-black text-sm mb-2">
                Read More
              </button>
            </a>
            <div className="flex gap-2 mt-3">
              <FaNode
                size="20"
                style={{
                  backgroundColor: "black",
                  color: "#519942",
                  borderRadius: "5px",
                }}
              />
              <SiVite
                size="20"
                style={{
                  backgroundColor: "black",
                  color: "#f5ca26",
                  borderRadius: "5px",
                }}
              />
              <FaReact
                size="20"
                style={{
                  backgroundColor: "black",
                  color: "#00d8fe",
                  borderRadius: "5px",
                }}
              />
              <TbBrandJavascript
                size="20"
                style={{
                  backgroundColor: "black",
                  color: "#ffff00",
                  borderRadius: "5px",
                }}
              />
              <SiExpo
                size="20"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "5px",
                }}
              />
              <SiTailwindcss
                size="20"
                style={{
                  backgroundColor: "white",
                  color: "#36b7f0",
                  borderRadius: "5px",
                }}
              />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              onClick={() =>
                window.open(
                  "https://github.com/ruchikaroy/WhimsyDate",
                  "_blank"
                )
              }
            >
              View
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Projects;
