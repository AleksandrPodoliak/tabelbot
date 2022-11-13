<template>
  <div class="popup">
    <div class="popup-container">
      <img 
        class="popup-container__exit" 
        src="../assets/images/exit.svg" 
        alt="exit"
        @click="$emit('close')"
      >
      <div
        v-if="button_back"
        class="popup-container__back"
        @click="$emit('close')"
      >
        <img src="../assets/images/arrow-back.svg" alt="back">
        <span> {{ this.$t('popup.button_back') }} </span>
      </div>
      <div
        v-if="title"
        class="popup-container__title"
        v-html="title"
      >
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popUp',
  props: {
    title: String,
    button_back: {
      type: Boolean,
      default: true
    },
  },
}
</script>

<style lang="scss" scoped>

.popup {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 2, 14, 0.5);

  &-container {
    position: relative;
    width: 710px;
    padding: 60px 140px;
    background: #F6FAFF;
    box-shadow: 0px 4px 4px rgba(87, 115, 166, 0.25);
    border-radius: 10px;

    &__exit {
      position: absolute;
      width: 24px;
      height: 24px;
      top: 0;
      right: -40px;
      cursor: pointer;
      user-select: none;
    }

    &__back {
      display: none;
    }

    &__title {
      font-family: 'PlayfairDisplay';
      font-weight: 500;
      font-size: 1.25rem;
      line-height: 200%;
      text-align: center;
      text-transform: uppercase;
      color: #DE0707;
      margin-bottom: 40px;
    }
  }
}

@media screen and (max-width: 420px) {
  
  .popup {

    &-container {
      width: 100%;
      padding: 1.5rem;
      border-radius: 0;
      height: 100vh;
      overflow: scroll;

      &__exit {
        display: none;
      }

      &__back {
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 0.875rem;
        margin-bottom: 2rem;
        letter-spacing: -0.02em;

        & img {
          margin-right: 0.6rem;
          height: 0.8rem;
          width: 0.6rem;
        }
      }

      &__title {
        font-size: 1rem;
        margin-bottom: 2rem;
      }
    }
  }
}

</style>