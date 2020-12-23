import React, { Suspense } from "react";

import Categories from "./Categories";
import StyledCategoryList from "./styles/StyledCategoryList";
import { Transition, Backdrop } from "@windmill/react-ui";

interface Props {
  isOpen: boolean;
  handleClose: any;
}

export const CategoryList = ({ isOpen, handleClose }: Props) => {
  const overlayClasses = isOpen
    ? "fixed inset-0 overflow-hidden bg-black opacity-25 blur"
    : "";
  return (
    <Transition show={isOpen}>
      <>
        <Transition
          enter="transition ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Backdrop
            className="blur bg-gray-600"
            onClick={handleClose}
          ></Backdrop>
          {/* <div className="blur fixed inset-0 bg-gray-400 opacity-50"></div> */}
        </Transition>

        <Transition
          enter="transition ease-in-out duration-500"
          enterFrom="opacity-0 transform translate-x-20"
          enterTo="opacity-100"
          leave="transition ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0 transform translate-x-20"
        >
          <aside className="fixed inset-y-0 right-0 z-50 flex-shrink-0 w-64 overflow-y-auto bg-white shadow-xl">
            <div className="absolute inset-0 overflow-hidden">
              <section
                className="absolute inset-y-0 right-0 max-w-full flex"
                aria-labelledby="slide-over-heading"
              >
                <div className="w-screen max-w-md">
                  <div className="h-full flex flex-col py-6 bg-white  ">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2
                          id="slide-over-heading"
                          className="text-lg font-medium text-gray-900"
                        >
                          Filter Products
                        </h2>
                        <div className="ml-3 h-7 flex items-center">
                          <button
                            className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={handleClose}
                          >
                            <span className="sr-only">
                              Close Filter Products
                            </span>
                            <svg
                              className="h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 relative flex-1 px-4 sm:px-6">
                      <div className="mx-auto mt-6">
                        <Suspense fallback={<h3>Loading Categories...</h3>}>
                          <div className="">
                            <Categories></Categories>
                          </div>
                        </Suspense>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </aside>
        </Transition>
      </>
    </Transition>
  );
};

export default CategoryList;
