import { Category } from "./common/business-models/Category";
import { Product } from "./common/business-models/Product";

const categories: Category[] = [
  {
    id: "1",
    name: "Softice",
    imageUrl: "msedge_KsLFWrHMHF.png",
  },
  {
    id: "2",
    name: "Gelato",
    imageUrl: "msedge_KHZjP8dCBB.png",
  },
  {
    id: "3",
    name: "Frozen Yogurt",
    imageUrl: "msedge_6kQB6Ta7iW.png",
  },
];

const products: Product[] = [
  {
    productid: "eee69b14-0ad4-e911-a81c-000d3a1ca508",
    name: "MUSTERBOX PLEXIGLAS® HI-GLOSS",
    productnumber: "1960-S",
    description: "",
    webfile_name: "plexiglas_hi-gloss_produktfamilie.jpg",
    webfile_partialurl: "plexiglas_hi-gloss_produktfamilie.jpg",
    amount: "192.8000",
  },
  {
    productid: "8f69f308-0ad4-e911-a81f-000d3a1ca860",
    name: "MUSTERBOX PLEXIGLAS® LED",
    productnumber: "MARY",
    description: "",
    webfile_name: "plexiglas_satinice_produktfamilie.jpg",
    webfile_partialurl: "plexiglas_satinice_produktfamilie.jpg",
    amount: "185.0000",
  },
  {
    productid: "8169f308-0ad4-e911-a81f-000d3a1ca860",
    name: "MUSTERBOX PLEXIGLAS® SATINICE",
    productnumber: "MARK",
    description: "",
    webfile_name: "plexiglas_parapan_produktfamilie.jpg",
    webfile_partialurl: "plexiglas_parapan_produktfamilie.jpg",
    amount: "139.0000",
  },
  {
    productid: "f055ea0e-0ad4-e911-a81f-000d3a1ca860",
    name: "MUSTERBOX PLEXIGLAS® STEGPLATTEN",
    productnumber: "1929-W",
    description: "",
    webfile_name: "plexiglas_steg-und-wellplatten_produktfamilie.jpg",
    webfile_partialurl: "plexiglas_steg-und-wellplatten_produktfamilie.jpg",
    amount: "233.8000",
  },
  {
    productid: "9869f308-0ad4-e911-a81f-000d3a1ca860",
    name: "MUSTERBOX PLEXIGLAS® TEXTURES",
    productnumber: "1988-S",
    description: "",
    webfile_name: "plexiglas_steg-und-wellplatten_produktfamilie.jpg",
    webfile_partialurl: "plexiglas_steg-und-wellplatten_produktfamilie.jpg",
    amount: "192.8000",
  },
  {
    productid: "a369f308-0ad4-e911-a81f-000d3a1ca860",
    name: "MUSTERBOX PLEXIGLAS® TEXTURES",
    productnumber: "1928-S",
    description: "",
    webfile_name: "plexiglas_textures_produktfamilie.jpg",
    webfile_partialurl: "plexiglas_textures_produktfamilie.jpg",
    amount: "54.9000",
  },
  {
    productid: "82995902-0ad4-e911-a81c-000d3a1ca508",
    name: "MUSTERKETTE PLEXIGLAS® GS/XT (ALLROUND)",
    productnumber: "4701",
    description: "",
    webfile_name: "plexiglas_gs_produktfamilie.jpg",
    webfile_partialurl: "plexiglas_gs_produktfamilie.jpg",
    amount: "154.0000",
  },
  {
    productid: "6f1fee0e-0ad4-e911-a820-000d3a1cac04",
    name: "PLEXIGLAS BOX",
    productnumber: "1920-S",
    description: "",
    webfile_name: "Plexiglas_Hi-Gloss_full_WEB_1600px.jpg",
    webfile_partialurl: "Plexiglas_Hi-Gloss_full_WEB_1600px.jpg",
    amount: "647.8000",
  },
  {
    productid: "b59f810b-0ad4-e911-a81e-000d3a1cadb6",
    name: "PLEXIGLAS XT-D",
    productnumber: "1906-S",
    description: "",
    webfile_name: "Plexiglas_XT1_full_WEB_1600px49.jpg",
    webfile_partialurl: "Plexiglas_XT1_full_WEB_1600px49.jpg",
    amount: "433.6000",
  },
];

export const getCategories = () =>
  new Promise<Category[]>((resolve) => {
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

export const getDetails = (id: string) =>
  new Promise<Category>((resolve) => {
    setTimeout(() => {
      resolve(categories.filter((category) => category.id === id)[0]);
    }, 200);
  });

export const getProducts = () =>
  new Promise<Product[]>((resolve) => {
    setTimeout(() => {
      resolve(products.map((product) => product));
    }, 200);
  });
