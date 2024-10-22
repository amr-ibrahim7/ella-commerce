<template>
  <div class="home">
    <UpperBanner />
    <TheFeatures />
    <TopOffers />
    <ProductsComponent
      :products="flashDeals"
      title="Flash Deals"
      titleColor="red"
      :index="0"
    />
    <TopCategories />
    <NewProducts :products="newProducts" :index="1" />
    <QualityFeatures />
    <ProductsComponent
      :products="fragrances"
      title="Top Fragrances"
      titleColor="#404040"
      :index="2"
    />
    <v-container fluid>
      <v-row>
        <v-col cols="6" class="pr-5">
          <img
            src="@/assets/images/band-left-cover.webp"
            alt=""
            class="w-100"
          />
        </v-col>
        <v-col cols="6" class="pl-5">
          <img
            src="@/assets/images/band-right-cover.webp"
            alt=""
            class="w-100"
          />
        </v-col>
      </v-row>
    </v-container>
    <ProductsComponent
      :products="beauty"
      title="Top Beauty"
      titleColor="#404040"
      :index="3"
    />
    <img src="@/assets/images/tv-banner.webp" alt="" class="w-100" />
    <ProductsComponent
      :products="furniture"
      title="Top Furniture"
      titleColor="#404040"
      :index="6"
    />
    <WhyShopWithUs />
  </div>
</template>

<script>
import UpperBanner from "@/components/home_page/UpperBanner";
import TheFeatures from "@/components/home_page/TheFeatures";
import TopOffers from "@/components/home_page/TopOffers";
import TopCategories from "@/components/home_page/TopCategories";
import NewProducts from "@/components/home_page/NewProducts";
import ProductsComponent from "@/components/home_page/ProductsSwiper";
import QualityFeatures from "@/components/home_page/QualityFeatures";
import WhyShopWithUs from "@/components/home_page/WhyShopWithUs";

import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    ProductsComponent,
    TopCategories,
    NewProducts,
    QualityFeatures,
    WhyShopWithUs,
  },
  computed: {
    ...mapState(productsModule, [
      "flashDeals",
      "newProducts",
      "fragrances",
      "beauty",
      "furniture",
    ]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
