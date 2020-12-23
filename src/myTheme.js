export default {
  button: {
    primary: {
      base: "text-white bg-blue-600 border border-transparent",
      active:
        "active:bg-blue-600 hover:bg-blue-700 focus:shadow-outline-purple",
      disabled: "opacity-50 cursor-not-allowed",
    },
    outline: {
      base:
        "text-gray-600 border-gray-300 border dark:text-gray-400 focus:outline-none",
      active:
        "active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:shadow-outline-gray",
      disabled: "opacity-50 cursor-not-allowed bg-gray-300",
    },
  },
};
