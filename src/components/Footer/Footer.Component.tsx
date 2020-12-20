import React from "react";

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="flex flex-wrap items-center py-4 px-4 border-b mt-12">
        <div className="w-full lg:w-1/5 text-center lg:text-left">
          <a
            className="text-xl text-blue-600 font-semibold font-heading"
            href="#"
          >
            Dunder Mifflin
          </a>
        </div>
        <div className="w-full lg:w-3/5 mt-4 lg:mt-0 text-center">
          <a
            className="inline-block mx-4 mb-4 lg:mb-0 text-blue-900 hover:text-blue-600"
            href="#"
          >
            Products
          </a>
          <a
            className="inline-block mx-4 mb-4 lg:mb-0 text-blue-900 hover:text-blue-600"
            href="#"
          >
            Team
          </a>
          <a
            className="inline-block mx-4 mb-4 lg:mb-0 text-blue-900 hover:text-blue-600"
            href="#"
          >
            Customers
          </a>
          <a
            className="inline-block mx-4 mb-4 lg:mb-0 text-blue-900 hover:text-blue-600"
            href="#"
          >
            Blog
          </a>
        </div>
        <div className="flex justify-center space-x-6 lg:justify-end w-full lg:w-1/5 my-2 lg:my-0">
          <a href="#">
            <svg
              className="text-blue-600 w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </a>
          <a href="#">
            <svg
              className="text-blue-600 w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              ></path>
            </svg>
          </a>
          <a href="#">
            <svg
              className="text-blue-600 w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="py-4 text-center">
        <span className="block md:inline-block mb-4 md:mb-0 mx-3">
          © 2020 Dunder Mifflin
        </span>
        <a
          className="inline-block mx-4 text-blue-900 hover:text-blue-600"
          href="#"
        >
          Privacy Policy
        </a>
        <a
          className="inline-block mx-4 text-blue-900 hover:text-blue-600"
          href="#"
        >
          Term of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
