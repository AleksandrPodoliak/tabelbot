<template>
  <div class="presentation container container-inner">
    <div class="content">
      <div class="content__logo">
        <img class="content__logo-img" src="../assets/images/present-logo.png" alt="logo">
        <div class="content__logo-text"> {{ this.$t('presentation.text') }} </div>
        <customButton 
          :width="'330px'"
          :icon="require('../assets/images/present-icon.svg')"
          :text="'TELEGRAM BOT'"
          @click="openTelegramLink"
        />
      </div>
      <div class="content__image">
        <img src="../assets/images/present-phone.png" alt="phone">
      </div>
    </div>
  </div>
</template>

<script>

import customButton from './customButton.vue';

export default {
  name: "presentationBlock",
  components: {
    customButton,
  },
  methods: {
    openTelegramLink() {
      window.open('https://t.me/kodoffice');
    }
  },
}
</script>

<style lang="scss" scoped>

.presentation {
  background-image: url('../assets/images/present-bg.png');
  background-repeat: no-repeat;
  background-size: cover;

  .content {
    position: relative;
    display: flex;
    justify-content: space-between;

    &__logo {
      width: 775px;
      display: flex;
      flex-direction: column;
      margin-top: 45px;
      margin-bottom: 160px;

      &-img {
        width: 646px;
        height: 100px;
        margin-bottom: 145px;
      }

      &-text {
        width: 100%;
        font-weight: 300;
        font-size: 2rem;
        line-height: 200%;
        margin-bottom: 145px;
      }
    }

    &__image {
      position: absolute;
      z-index: 3;
      right: -240px;
      top: -80px;
    }
  }
}
</style>