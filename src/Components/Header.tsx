import { Typography } from "@material-tailwind/react";
const Header = () => {
  return (
    <>
      <div style={{ borderBottom: "solid 0.5px #c7c7c7" }}>
        <div className="flex items-center mb-2">
          <svg
            className="h-8 w-8 text-amber-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
          <Typography
            variant="h5"
            as="a"
            href="#"
            color="blue-gray"
            className="mr-4 cursor-pointer py-1.5 font-normal ml-3"
          >
            Ruchika Roy, Software Developer
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Header;
