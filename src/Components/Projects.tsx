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

const Projects = () => {
  return (
    <>
      <div className="mt-40 text-center mt-14 mb-10">
        <Typography variant="h2">Projects</Typography>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-2 ">
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
              View
            </Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-96 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
          <CardHeader
            floated={false}
            color="blue-gray"
            className="relative h-56.9 overflow-hidden"
          >
            <img
              style={{
                height: "280px",
              }}
              src={projectPic2}
              alt="card-image"
              className=" w-full h-full object-cover object-top"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              NC News APP
            </Typography>
            <Typography
              className="overflow-auto max-h-30"
              style={{ maxHeight: "6rem" }}
            >
              NC News is a sample project that provides a fully functional core
              feature set, showcasing a streamlined and efficient initial
              version. This application allows users to:
              <br />- View all articles
              <br />- Filter articles by topics
              <br />- Sort articles by various criteria
              <br />- Change the sort order (ascending or descending)
              <br />- Post and delete comments (based on the logged-in user)
              <br />- Upvote and downvote articles
              <br />
              The project includes the following default logged-in users:
              'jessjelly', 'cooljmessy', 'happyamy2016', 'weegembump',
              'grumpy19', 'tickle122.
            </Typography>
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
        <Card className="mt-6 w-96 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
          <CardHeader
            floated={false}
            color="blue-gray"
            className="relative h-56.9 overflow-hidden"
          >
            <img
              style={{
                height: "280px",
              }}
              src={projectPic2}
              alt="card-image"
              className=" w-full h-full object-cover object-top"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              NC News APP
            </Typography>
            <Typography
              className="overflow-auto max-h-30"
              style={{ maxHeight: "6rem" }}
            >
              NC News is a sample project that provides a fully functional core
              feature set, showcasing a streamlined and efficient initial
              version. This application allows users to:
              <br />- View all articles
              <br />- Filter articles by topics
              <br />- Sort articles by various criteria
              <br />- Change the sort order (ascending or descending)
              <br />- Post and delete comments (based on the logged-in user)
              <br />- Upvote and downvote articles
              <br />
              The project includes the following default logged-in users:
              'jessjelly', 'cooljmessy', 'happyamy2016', 'weegembump',
              'grumpy19', 'tickle122.
            </Typography>
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
      </div>
    </>
  );
};

export default Projects;
