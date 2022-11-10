<template>
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
      />
    </div>
  </div>
</template>

<script>
import { requester } from '@/requester';

import customButton from './customButton.vue';

export default {
  name: "calculatorBlock",
  components: {
    customButton,
  },
  data() {
    return {
      countOfemployee: 3,
      usd_cur: 0.00,
    }
  },
  async mounted() {
    const payload  = {
      method: 'currency'
    };
    
    try {
      const data = await requester(payload);
      this.usd_cur = data.result;
      console.log('this.usd_cur :>> ', this.usd_cur);
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
      const uahSum = this.usd_cur && this.countOfemployee && this.countOfemployee > 3 ? this.countOfemployee*this.usd_cur.toFixed(2) : 0;
      return uahSum ? uahSum.toFixed(2) : "0.00";
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
            height: 90px;
            border: 1px solid #27316B;
            border-radius: 100px;
            background-color: #F6FAFF;
            padding: 0 40px;
            font-weight: 700;
            font-size: 2rem;

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
</style>