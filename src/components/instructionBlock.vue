<template>
  <a id="anchor4"></a>
  <div class="instruction container container-inner">
    <div class="title">
      {{ this.$t('instruction.title') }}
    </div>
    <div class="content">
      <div class="content-row">
        <div class="content-row-item">
          <div class="content-row-item__step">{{ $t('connection.text_step') }} 1</div>
          <img class="content-row-item__image1" src="../assets/images/instruction-img1.png" alt="instruction1">
          <div class="content-row-item__text" v-html="$t('instruction.text_item1')"></div>
        </div>
        <div class="content-row-item">
          <div class="content-row-item__step">{{ $t('connection.text_step') }} 2</div>
          <img class="content-row-item__image2" src="../assets/images/instruction-img2.png" alt="instruction2">
          <div class="content-row-item__text" v-html="$t('instruction.text_item2')"></div>
        </div>
        <div class="content-row-item">
          <div class="content-row-item__step">{{ $t('connection.text_step') }} 3</div>
          <img class="content-row-item__image3" src="../assets/images/instruction-img3.png" alt="instruction3">
          <div class="content-row-item__text" v-html="$t('instruction.text_item3')"></div>
        </div>
        <div class="content-row-item">
          <div class="content-row-item__step">{{ $t('connection.text_step') }} 4</div>
          <img class="content-row-item__image4" src="../assets/images/instruction-img4.png" alt="instruction4">
          <div class="content-row-item__text" v-html="$t('instruction.text_item4')"></div>
        </div>
      </div>
      <customButton 
        :width="'350px'"
        :text="$t('instruction.text_button')"
        :secondary="true"
        @click="openGoogleFile"
      />
    </div>
  </div>
</template>

<script>

import customButton from './customButton.vue';

export default {
  name: "instructionBlock",
  components: {
    customButton,
  },
  methods: {
    openGoogleFile() {
      if (this.$i18n.locale == 'uk') {
        window.open('https://docs.google.com/spreadsheets/d/1oyCibTYJN--Mu38bpIrId8Q2JhPDndX6emZHivExMVY/edit#gid=1233682452');
        return
      }
      if (this.$i18n.locale == 'ru') {
        window.open('https://docs.google.com/spreadsheets/d/1oyCibTYJN--Mu38bpIrId8Q2JhPDndX6emZHivExMVY/edit#gid=0');
        return
      }
      if (this.$i18n.locale == 'en') {
        window.open('https://docs.google.com/spreadsheets/d/1oyCibTYJN--Mu38bpIrId8Q2JhPDndX6emZHivExMVY/edit#gid=1588076205');
        return
      }

      window.open('https://docs.google.com/spreadsheets/d/1oyCibTYJN--Mu38bpIrId8Q2JhPDndX6emZHivExMVY/edit#gid=1233682452');
    }
  },
}
</script>

<style lang="scss" scoped>

.instruction {
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
        width: 310px;
        display: flex;
        flex-direction: column;
        align-items: center;

        &__step {
          display: none;
        }

        &__image1 {
          width: 247px; 
          height: 262px;
          margin-bottom: 40px;
        }
        
        &__image2 {
          width: 198px;
          height: 262px;
          margin-bottom: 40px;
        }

        &__image3 {
          width: 273px; 
          height: 262px;
          margin-bottom: 40px;
        }

        &__image4 {
          width: 267px; 
          height: 262px;
          margin-bottom: 40px;
        }

        &__text {
          text-align: center;
          width: 100%;
          font-weight: 500;
          font-size: 1.125rem;
          text-transform: uppercase;
        }
      }
    }
  }
}

@media screen and (max-width: 420px) {

  .instruction {
    .content {

      &-row {
        flex-wrap: wrap;
        margin-bottom: 0;

        &-item {
          width: 45%;
          margin-bottom: 40px;

          &__step {
            display: block;
            font-weight: 700;
            font-size: 0.875rem;
            line-height: 200%;
            text-transform: uppercase;
            margin-bottom: 10px;
          }

          &__image1 {
            width: 80%;
            height: unset;
            margin-bottom: 10px;
          }
          
          &__image2 {
            width: 80%;
            height: unset;
            margin-bottom: 10px;
          }

          &__image3 {
            width: 80%;
            height: unset;
            margin-bottom: 10px;
          }

          &__image4 {
            width: 80%;
            height: unset;
            margin-bottom: 10px;
          }

          &__text {
            font-size: 0.75rem;
            line-height: 200%;
          }
        }
      }
    }
  }
}
</style>