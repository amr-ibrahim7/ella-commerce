<template>
  <div class="quick-view mt-16">
    <v-dialog v-model="dialog" max-width="900" max-height="500">
      <v-icon
        style="
          position: absolute;
          right: -14px;
          top: -14px;
          background-color: black;
          color: rgb(198, 198, 198);
          font-size: 18px;
          padding: 15px;
          z-index: 10;
          cursor: pointer;
          border-radius: 50%;
        "
        @click="dialog = false"
        >mdi-close</v-icon
      >
      <v-card elevation="0" class="content_card">
        <v-container fluid class="bg-white pt-10 px-10">
          <v-row>
            <v-col cols="12" md="7">
              <img
                :src="tab ? tab : product.thumbnail"
                class="w-100"
                alt=""
                height="400"
                v-if="!loading"
              />
              <VSkeletonLoader
                v-if="loading"
                type="image,image,image"
              ></VSkeletonLoader>
              <v-tabs center-active height="130" v-model="tab" class="mt-10">
                <v-tab
                  v-for="(img, i) in product.images"
                  :key="i"
                  class="mx-10"
                  :value="img"
                >
                  <img :src="img" alt="" width="70" height="100" />
                </v-tab>
              </v-tabs>
            </v-col>
            <v-col cols="12" md="5" class="pt-0 pl-6 mt-8 mt-md-0">
              <VSkeletonLoader
                v-if="loading"
                type="article,article,article"
              ></VSkeletonLoader>
              <v-card elevation="0" v-if="!loading">
                <v-card-title
                  class="px-0"
                  style="
                    font-size: 19px;
                    font-weight: bold;
                    white-space: pre-wrap;
                  "
                >
                  ({{ product.title }}) Sample - {{ product.category }} For Sale
                </v-card-title>
                <div
                  class="rating-parent d-flex align-center"
                  style="gap: 10px"
                >
                  <v-rating
                    v-model="product.rating"
                    half-increments
                    readonly
                    color="yellow-darken-2"
                    size="x-small"
                    density="cobact"
                  >
                  </v-rating>
                  <span
                    class="mt-1"
                    style="font-size: 13px; color: rgb(96, 96, 96)"
                  >
                    Stock: {{ product.stock }}
                  </span>
                </div>
                <v-card-text
                  class="px-0"
                  style="font-size: 13px; color: rgb(96, 96, 96)"
                >
                  {{ product.description }}
                </v-card-text>
                <v-card-text
                  class="px-0 pt-0"
                  style="font-size: 13px; color: rgb(96, 96, 96)"
                >
                  {{ product.brand }}
                </v-card-text>
                <v-card-text
                  class="px-0 pt-0"
                  style="font-size: 13px; color: rgb(96, 96, 96)"
                >
                  Availabilty:
                  {{ product.stock > 0 ? "In Stock" : "Out Of Stock" }}
                </v-card-text>
                <v-card-text class="pl-0 pt-0">
                  <del>${{ product.price }}</del> From
                  <span style="font-weight: 900; font-size: 16px">
                    ${{
                      Math.ceil(
                        product.price -
                          product.price * (product.discountPercentage / 100)
                      )
                    }}
                  </span>
                </v-card-text>
                <v-card-text class="pl-0 pt-0"> Quantity </v-card-text>
                <div
                  class="counter px-1"
                  style="
                    border-radius: 30px;
                    border: 1px solid rgb(201, 201, 201);
                    width: fit-content;
                  "
                >
                  <v-icon size="22" @click="quantity > 1 ? quantity-- : false"
                    >mdi-minus</v-icon
                  >
                  <input
                    style="
                      border: none;
                      outline: none;
                      width: 60px;
                      font-size: 13px;
                    "
                    class="text-center py-3"
                    type="number"
                    min="1"
                    v-model="quantity"
                  />
                  <v-icon size="22" @click="quantity++">mdi-plus</v-icon>
                </div>
                <v-card-text class="pl-0">
                  SubTotal: ${{
                    Math.ceil(
                      product.price -
                        product.price * (product.discountPercentage / 100)
                    ) * quantity
                  }}
                </v-card-text>
                <v-card-actions class="mt-2 w-100 px-0">
                  <v-btn
                    variant="outlined"
                    style="
                      text-transform: none;
                      border-radius: 30px;
                      background-color: rgb(34, 34, 34);
                    "
                    class="w-75 text-white"
                    density="compact"
                    height="50"
                    @click="addToCart(product)"
                    :loading="btnLoading"
                  >
                    Add To Cart
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";
import { cartStore } from "@/stores/cart";
import { mapActions } from "pinia";
export default {
  inject: ["Emitter"],
  components: {
    VSkeletonLoader,
  },
  methods: {
    ...mapActions(cartStore, ["addItem"]),
    addToCart(item) {
      item.quantity = this.quantity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItem(item);
        this.Emitter.emit("openCart");
        this.Emitter.emit("showMsg", item.title);
        this.dialog = false;
      }, 1000);
    },
  },
  data: () => ({
    loading: false,
    tab: "",
    quantity: 1,
    dialog: false,
    product: "",
    btnLoading: false,
  }),
  mounted() {
    this.Emitter.on("openQuickView", (data) => {
      this.loading = true;
      this.product = data;
      this.dialog = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    });
  },
};
</script>
<style lang="scss">
.content_card {
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    width: 5px;
  }
}
</style>
