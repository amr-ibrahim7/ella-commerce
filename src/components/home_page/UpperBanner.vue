<template>
  <div class="banner">
    <div class="parent">
      <img src="@/assets/images/banner-bg.jpg" alt="" />
      <div class="cont">
        <h3>
          <span>Huge Saving</span>
          on <br />
          UHD Televisions
        </h3>
        <p class="hint">Sale up to 70% off on Selected items</p>
        <v-btn
          variant="outlined"
          height="50"
          width="160"
          density="compact"
          style="border-radius: 30px; text-transform: none"
        >
          Shop Now
          <v-icon right>mdi-cart-outline</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.banner {
  .parent {
    height: 390px;
    position: relative;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    .cont {
      color: white;
      padding: 40px 0 0 100px;
      position: absolute;
      left: 40px;
      top: 20px;
      width: 600px;
      h3 {
        font-size: 45px;
        font-weight: 900;
        span {
          color: rgb(45, 251, 223);
        }
      }
      .hint {
        margin: 20px 0 40px;
      }
    }
  }
}

// Media Queries

@media (max-width: 990px) {
  .banner {
    .parent {
      .cont {
        h3 {
          font-size: 35px;
        }
        width: 500px;
        left: 0;
      }
    }
  }
}
@media (max-width: 767px) {
  .banner {
    .parent {
      height: 320px;
      .cont {
        padding-left: 20px;
        h3 {
          font-size: 30px;
        }
        width: 500px;
        left: 0;
        .hint {
          font-size: 14px;
        }
      }
    }
  }
}
@media (max-width: 580px) {
  .banner {
    .parent {
      height: 250px;
      .cont {
        padding-left: 20px;
        padding-top: 20px;
        h3 {
          font-size: 24px;
        }
        width: 80%;
        left: 0;
        .hint {
          font-size: 12px;
        }
        button {
          height: 30px !important;
          width: 130px !important;
          font-size: 11px !important;
        }
      }
    }
  }
}
</style>
