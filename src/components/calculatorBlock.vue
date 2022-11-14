<template>
  <a id="anchor3"></a>
  <div class="calculator container container-inner">
    <div class="title">
      {{ this.$t('calculator.title') }}
    </div>
    <div class="content">
      <div class="content-subtitle">
        {{ this.$t('calculator.subtitle') }}
      </div>
      <div class="content-row">
        <div class="content-row-item">
          <div class="content-row-item__label">  {{ this.$t('calculator.label_item1') }} </div>
          <div class="content-row-item__wrapper-input input-count">
            <input
              type="number"
              inputmode="numeric"
              v-model="countOfemployee"
            >
          </div>
        </div>
        <div class="content-row-item">
          <div class="content-row-item__label">  {{ this.$t('calculator.label_item2') }} </div>
          <div class="content-row-item__wrapper-input input-usd">
            <input 
              type="text"
              :value="usdSum"
              disabled
            >
          </div>
        </div>
        <div class="content-row-item">
          <div class="content-row-item__label">  {{ this.$t('calculator.label_item3') }} </div>
          <div class="content-row-item__wrapper-input input-uah">
            <input 
              type="text"
              :value="uahSum"
              disabled
            >
          </div>
        </div>
      </div>
      <div
        v-if="countOfemployee < 4" 
        class="content-descr"
      >
        {{ this.$t('calculator.descr_free') }}
      </div>
      <customButton 
        :width="buttonWidth"
        :text="buttonText"
        :disabled="!countOfemployee"
        @click="togglePopUpPrice"
      />
    </div>


    <popUp 
      v-if="showPoUpPrice"
      class="popup"
      :title="$t('popup.title')"
      @close="togglePopUpPrice"
    >
      <formPrice
        :full-form="countOfemployee > 3"
        :currentData="{
          sum: uahSum,
          countOfemployee: countOfemployee,
        }"
        @success="togglePopUpPrice(); togglePopUpSuccess();"
        @error="togglePopUpPrice(); togglePopUpError();"
      />
    </popUp>

    <popUp 
      v-if="showPoUpSuccess"
      class="popup-success"
      :title="$t('popup.title_success')"
      @close="showPoUpSuccess = false"
      @click="showPoUpSuccess = false"
    >
      <div 
        class="popup-success__text"
        v-html="$t('popup.success')"
      > 
      </div>
      <customButton 
        :width="'100%'"
        :text="$t('popup.button_success')"
        @click="openGoogleFile"
      />
    </popUp>

    <popUp 
      v-if="showPoUpError"
      class="popup-error"
      :title="$t('popup.title_error')"
      @close="showPoUpError = false"
      @click="showPoUpError = false"
    > 
      <div class="popup-error__text"> 
        {{ $t('popup.error') }}
      </div>
      <img class="popup-error__img" src="../assets/images/contacts-error.png" alt="error">
    </popUp>
  </div>
</template>

<script>

import popUp from './popUp.vue'
import formPrice from './formPrice.vue';
import customButton from './customButton.vue';

import { requester } from '@/requester';

export default {
  name: "calculatorBlock",
  components: {
    popUp,
    formPrice,
    customButton,
  },
  data() {
    return {
      countOfemployee: 3,
      usd_cur: 0,
      // usd_cur: 30,

      showPoUpPrice: false,
      showPoUpSuccess: false,
      showPoUpError: false,
    }
  },
  async mounted() {
    const payload  = {
      method: 'currency'
    };
    
    try {
      const data = await requester(payload);
      this.usd_cur = data.result;
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    buttonWidth() {
      return this.countOfemployee < 4 ? '390px' : '320px';
    },
    buttonText() {
      return this.countOfemployee < 4 ? this.$t('calculator.text_button_free') : this.$t('calculator.text_button');
    },
    usdSum() {
      return this.countOfemployee && this.countOfemployee > 3 ? this.countOfemployee.toFixed(2) : "0.00";
    },
    uahSum() {
      const uahSum = this.usd_cur && this.countOfemployee && this.countOfemployee > 3 ? this.countOfemployee*this.usd_cur : 0;
      return uahSum ? uahSum.toFixed(2) : "0.00";
    },
  },
  methods: {
    togglePopUpPrice() {
      this.showPoUpPrice = !this.showPoUpPrice;
    },
    togglePopUpSuccess() {
      this.showPoUpSuccess = !this.showPoUpSuccess;
    },
    togglePopUpError() {
      this.showPoUpError = !this.showPoUpError;
    },
    openGoogleFile() {
      window.open('https://docs.google.com/spreadsheets/d/1h-Y27fpWpb8FoPDaWLXnCJ8r_WiPPWd4PXrQs9A0slM/edit#gid=0');
    },
  },
  watch: {
    countOfemployee(n, o) {
      if (n) {
        if (n / 1) {
          if (n < 10001) this.countOfemployee = n;
          else this.countOfemployee = o;
        } else {
          this.countOfemployee = o;
        }
      }
    }
  },
}
</script>

<style lang="scss" scoped>

.calculator {
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-subtitle {
      font-weight: 500;
      font-size: 1.125rem;
      margin-bottom: 60px;
    }

    &-row {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 60px;

      &-item {
        width: 430px;
        display: flex;
        flex-direction: column;

        &__label {
          font-weight: 500;
          font-size: 1.125rem;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        &__wrapper-input {
          position: relative;

          input {
            width: 100%;
            padding: 20px 40px;
            border: 1px solid #27316B;
            border-radius: 100px;
            background-color: #F6FAFF;
            font-weight: 700;
            font-size: 1.5rem;
            color: #27316B;

            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }

            &:not(:disabled) {
              &:hover {
                border: 1px solid #1632D4;
              }
            }

            &:focus {
              border: 1px solid #27316B;
              outline: none;
              background-color: #fff;
            }
          }
        }

        .input-count {
          &::after {
            position: absolute;
            z-index: 3;
            right: 40px;
            top: 50%;
            margin-top: -16px;
            content: '';
            width: 32px;
            height: 32px;
            background-image: url('../assets/images/calc-icon1.svg');
            background-size: cover;
            background-repeat: no-repeat;
          }
        }

        .input-usd {
          &::after {
            position: absolute;
            z-index: 3;
            right: 120px;
            top: 50%;
            margin-top: -16px;
            content: '';
            width: 43px;
            height: 32px;
            background-image: url('../assets/images/calc-icon2.png');
            background-size: cover;
            background-repeat: no-repeat;
          }

          &::before {
            content: 'USD';
            position: absolute;
            z-index: 3;
            right: 40px;
            top: 50%;
            margin-top: -1rem;
            font-size: 2rem;
            font-weight: 700;
          }
        }

        .input-uah {
          &::after {
            position: absolute;
            z-index: 3;
            right: 120px;
            top: 50%;
            margin-top: -16px;
            content: '';
            width: 43px;
            height: 32px;
            background-image: url('../assets/images/calc-icon3.png');
            background-size: cover;
            background-repeat: no-repeat;
          }

          &::before {
            content: 'UAH';
            position: absolute;
            z-index: 3;
            right: 40px;
            top: 50%;
            margin-top: -1rem;
            font-size: 2rem;
            font-weight: 700;
          }
        }
      }
    }

    &-descr {
      width: 100%;
      margin-bottom: 60px;
      color: #DE0707;
      font-weight: 500;
      font-size: 1.125rem;
    }
  }
}

.popup-success {
  &__text {
    text-align: center;
    font-weight: 500;
    font-size: 1rem;
    line-height: 150%;
    margin-bottom: 40px;
  }
}

.popup-error {

  &__text {
    text-align: center;
    font-weight: 500;
    font-size: 1rem;
    line-height: 150%;
    margin-bottom: 20px;
  }
  &__img {
    display: block;
    margin: 0 auto;
  }
}

@media screen and (max-width: 420px) {
  .calculator {
    .content {

      &-subtitle {
        text-align: center;
        line-height: 200%;
        font-size: 1rem;
        margin-bottom: 20px;
      }

      &-row {
        flex-direction: column;
        margin-bottom: 0;

        &-item {
          width: 100%;
          margin-bottom: 20px;

          &__label {
            font-size: 0.875rem;
            margin-bottom: 10px;
          }

          &__wrapper-input {

            input {
              height: unset;
              padding: 10px 40px;
              font-size: 1.125rem;
              line-height: 150%;
            }
          }

          .input-count {
            &::after {
              right: 40px;
              margin-top: -9px;
              width: 18px;
              height: 18px;
            }
          }

          .input-usd {
            &::after {
              margin-top: -9px;
              width: 24px;
              height: 18px;
              right: 90px;
            }

            &::before {
              margin-top: -9px;
              font-size: 18px;
              line-height: 100%;
            }
          }

          .input-uah {
            &::after {
              margin-top: -9px;
              width: 24px;
              height: 18px;
              right: 90px;
            }

            &::before {
              margin-top: -9px;
              font-size: 18px;
              line-height: 100%;
            }
          }
        }
      }

      &-descr {
        margin-bottom: 20px;
        font-size: 1rem;
        line-height: 200%;
      }
    }
  }

  .popup-error {

    &__img {
      width: 100%;
    }
  }
}
</style>