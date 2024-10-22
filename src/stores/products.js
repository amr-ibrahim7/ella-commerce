import axios from "axios";
import { defineStore } from "pinia";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
    newProducts: [],
    fragrances: [],
    beauty: [],
    furniture: [],
    categoryProducts: [],
    singleProduct: "",
    categories: [
      {
        title: "Smart Phones",
        route: "smartphones",
      },
      {
        title: "Groceries",
        route: "groceries",
      },
      {
        title: "Fragrances",
        route: "fragrances",
      },
      {
        title: "Beauty",
        route: "beauty",
      },
      {
        title: "Womens Dresses",
        route: "womens-dresses",
      },
      {
        title: "Tablets",
        route: "tablets",
      },
      {
        title: "Furniture",
        route: "furniture",
      },
    ],
  }),
  // url": "https://dummyjson.com
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          console.log(res.data.products);
          this.newProducts = res.data.products.filter(
            (el) => el.category === "groceries"
          );
          this.beauty = res.data.products.filter(
            (el) => el.category === "beauty"
          );
          this.furniture = res.data.products.filter(
            (el) => el.category === "furniture"
          );
          this.flashDeals = res.data.products.slice(7, 15);
          this.fragrances = res.data.products.filter(
            (el) => el.category === "fragrances"
          );
        })
        .catch((err) => console.error(err));
    },
    async getProductsByCategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => (this.categoryProducts = res.data));
    },
    async getSingleProduct(productId) {
      await axios
        .get(`https://dummyjson.com/products/${productId}`)
        .then((res) => {
          console.log(res.data);
          this.singleProduct = res.data;
        });
    },
  },
});
