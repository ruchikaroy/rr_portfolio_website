import { Card, Typography } from "@material-tailwind/react";

const ContactForm = () => {
  return (
    <Card className="mt-20 items-center" color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Contact Me
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to contact.
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        target="blank"
        action="https://formsubmit.co/9851a77ef8ae19ba7c5f84e7d7c5265c"
        method="POST"
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <input
            type="text"
            name="name"
            required
            className="text-md p-3 border border-2 border-blue-gray-200 rounded-md"
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <input
            type="email"
            name="email"
            className="text-md p-3 border border-2 border-blue-gray-200 rounded-md"
            required
          />
        </div>
        <div className="grid grid-col-1 mt-10">
          <Typography variant="h6" color="blue-gray" className="mb-3">
            Your Message
          </Typography>
          <textarea
            name="message"
            rows={5}
            className="text-md p-3 border border-2 border-blue-gray-200 rounded-md"
          ></textarea>
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-amber-500 p-4 rounded-lg"
        >
          <Typography variant="h5" color="blue-gray">
            Submit
          </Typography>
        </button>
      </form>
    </Card>
  );
};

export default ContactForm;
