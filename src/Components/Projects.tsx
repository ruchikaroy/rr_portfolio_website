import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import projectPic from "../assets/Screenshot 2024-10-21 at 11.28.46.png";

const Projects = () => {
  return (
    <>
      <div className="mt-40 text-center mt-20">
        <Typography variant="h2">Projects</Typography>
      </div>
      <div className="flex items-center justify-center gap-10 ">
        <Card className="mt-6 w-96 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
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
            <Typography>
              A CRUD API that lets the users query the database to create,
              read,update and delete data. All the endpoints have been tested
              for standard errors.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              onClick={() =>
                window.open("https://news-api-ibvn.onrender.com/api", "_blank")
              }
            >
              Read More
            </Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-96 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
          <CardHeader
            floated={false}
            color="blue-gray"
            className="relative h-56.9"
          >
            <img src={projectPic} alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Projects;
