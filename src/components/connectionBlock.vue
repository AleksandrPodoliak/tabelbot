<template>
  <a id="anchor2"></a>
  <div class="connection container container-inner">
    <div class="title">
      {{ this.$t('connection.title') }}
    </div>
    <div class="content">
      <div class="content-row">
        <div class="content-row-item">
          <div class="content-row-item__step">{{ $t('connection.text_step') }} 1</div>
          <img class="content-row-item__image1" src="../assets/images/connection-img1.png" alt="connection1">
          <div class="content-row-item__text" v-html="$t('connection.text_item1')"></div>
        </div>
        <div class="content-row-item">
          <div class="content-row-item__step">{{ $t('connection.text_step') }} 2</div>
          <img class="content-row-item__image2" src="../assets/images/connection-img2.png" alt="connection2">
          <div class="content-row-item__text" v-html="$t('connection.text_item2')"></div>
        </div>
        <div class="content-row-item">
          <div class="content-row-item__step">{{ $t('connection.text_step') }} 3</div>
          <img class="content-row-item__image3" src="../assets/images/connection-img3.png" alt="connection3">
          <div class="content-row-item__text" v-html="$t('connection.text_item3')"></div>
        </div>
      </div>
      <customButton 
        :width="'320px'"
        :text="$t('connection.text_button')"
        :secondary="true"
        @click="openGoogleFile"
      />
    </div>
  </div>
</template>

<script>

import customButton from './customButton.vue';

export default {
  name: "connectionBlock",
  components: {
    customButton,
  },
  methods: {
    openGoogleFile() {
      window.open('https://docs.google.com/spreadsheets/d/1h-Y27fpWpb8FoPDaWLXnCJ8r_WiPPWd4PXrQs9A0slM/edit#gid=0');
    }
  },
}
</script>

<style lang="scss" scoped>

.connection {
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-row {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 60px;

      &-item {
        width: 320px;
        display: flex;
        flex-direction: column;
        align-items: center;

        &__step {
          display: none;
        }

        &__image1 {
          width: 320px; 
          height: 200px;
          margin-bottom: 40px;
        }
        
        &__image2 {
          width: 207px; 
          height: 200px;
          margin-bottom: 40px;
        }

        &__image3 {
          width: 241px; 
          height: 200px;
          margin-bottom: 40px;
        }

        &__text {
          width: 100%;
          font-weight: 300;
          font-size: 1.25rem;
        }
      }
    }
  }
}

@media screen and (max-width: 420px) {
  .connection {
    .content {

      &-row {
        flex-direction: column;
        margin-bottom: 0px;

        &-item {
          width: 100%;

          &__step {
            display: block;
            width: 100%;
            text-align: center;
            font-weight: 700;
            font-size: 1rem;
            line-height: 200%;
            margin-bottom: 20px;
            text-transform: uppercase;
          }
          

          &__image1 {
            padding: 20px 40px;
            width: 100%;
            height: unset;
            margin-bottom: 20px;
          }
          
          &__image2 {
            padding: 20px 40px;
            width: 100%;
            height: unset;
            margin-bottom: 20px;
          }

          &__image3 {
            padding: 20px 40px;
            width: 100%;
            height: unset;
            margin-bottom: 20px;
          }

          &__text {
            font-size: 1rem;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
}
</style>

<style scoped>
  .content-row-item__text >>> a {
    text-transform: uppercase;
    text-decoration: underline;
    font-weight: 700;
    color: #27316B;
  }

  @media screen and (max-width: 420px) {
    .content-row-item__text >>> a {
      text-transform: lowercase;
    }
  }
</style>