const categories = [
  {
    id: 1,
    name: "Softice",
    imageUrl: "msedge_KsLFWrHMHF.png",
  },
  {
    id: 2,
    name: "Gelato",
    imageUrl: "msedge_KHZjP8dCBB.png",
  },
  {
    id: 3,
    name: "Frozen Yogurt",
    imageUrl: "msedge_6kQB6Ta7iW.png",
  },
];

export const getCategories = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        categories.map((category) => ({
          id: category.id,
          name: category.name,
          imageUrl: category.imageUrl,
        }))
      );
    }, 200);
  });

export const getDetails = (id) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories.filter((category) => category.id === id)[0]);
    }, 200);
  });
