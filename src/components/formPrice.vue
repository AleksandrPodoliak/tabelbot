<template>
  <div 
    class="input input-name"
    :class="{ invalid: v$.companyname.$dirty && v$.companyname.required.$invalid }"
  >
    <input
      ref="input-name"
      v-model="companyname"
      type="text" 
      name="companyname"
      :placeholder="$t('popup.input_companyname.placeholder')"
      @focus="v$.companyname.$reset"
      @blur="v$.companyname.$touch"
    />
    <label for="companyname">{{ $t('popup.input_companyname.label') }}</label>
    <div v-if="v$.companyname.$error"> 
      {{ $t('popup.input_companyname.error') }} 
    </div>
  </div>
  <div 
    class="input input-name"
    :class="{ invalid: v$.username.$dirty && v$.username.required.$invalid }"
  >
    <input
      ref="input-name"
      v-model="username"
      type="text" 
      name="name"
      :placeholder="$t('popup.input_name.placeholder')"
      @focus="v$.username.$reset"
      @blur="v$.username.$touch"
    />
    <label for="name">{{ $t('popup.input_name.label') }}</label>
    <div v-if="v$.username.$error"> 
      {{ $t('popup.input_name.error') }} 
    </div>
  </div>
  <div 
    class="input input-phone"
    :class="{ invalid: v$.phone.$dirty && v$.phone.required.$invalid || v$.phone.$dirty && v$.phone.phoneValidator.$invalid }"
  >
    <input 
      v-model="phone"
      type="number"
      inputmode="numeric"
      name="phone"
      :placeholder="$t('popup.input_phone.placeholder')"
      @focus="v$.phone.$reset"
      @blur="v$.phone.$touch"
    />
    <label for="phone">{{ $t('popup.input_phone.label') }}</label>
    <div v-if="v$.phone.$error">
      {{ $t('popup.input_phone.error') }}
    </div>
  </div>
  <div 
    class="input input-mail"
    :class="{ invalid: v$.mail.$dirty && v$.mail.required.$invalid || v$.mail.$dirty && v$.mail.email.$invalid }"
  >
    <input 
      v-model="mail"
      type="email"
      name="mail"
      :placeholder="$t('popup.input_mail.placeholder')"
      @focus="v$.mail.$reset"
      @blur="v$.mail.$touch"
    />
    <label for="mail">{{ $t('popup.input_mail.label') }}</label>
    <div v-if="v$.mail.$error">
      {{ $t('popup.input_mail.error')+'email@example.com' }}
    </div>
  </div>
  <div 
    class="input input-check"
    :class="{ invalid: v$.isRulesAccept.$dirty && v$.isRulesAccept.isRulesAcceptValidator.$invalid }"
  >
    <input
      v-model="isRulesAccept"
      type="checkbox"
      name="checkbox"
      @focus="v$.isRulesAccept.$reset"
      @blur="v$.isRulesAccept.$touch"
    />
    <span v-html="$t('popup.input_check.document')"></span>
  </div>
  <div
    v-if="fullForm" 
    class="final-sum"
  >
    <span class="final-sum__sum"> {{ $t('popup.sum') }} </span>
    <span class="final-sum__curr"> {{ currentData.sum }} {{ $t('popup.curr') }} </span>
  </div>
  <customButton
    v-if="fullForm"
    id="customButton"
    :text="$t('popup.button_pay')"
    :disabled="v$.$invalid || requestInProgress"
    @click="sendForm"
  />
  <customButton
    v-else
    id="customButton"
    :text="$t('popup.button')"
    :disabled="v$.$invalid || requestInProgress"
    @click="sendForm"
  />
</template>

<script>

import customButton from './customButton.vue';

import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { requester } from '../requester.js'

const phoneValidator = (value) => {
  const re = /^\d{9}$/
  return re.test(value)
}
const isRulesAcceptValidator = (value) => {
  return value
}

export default {
  name: "formPrice",
  emits: ["success", "error"],
  components: {
    customButton, 
  },
  props: {
    fullForm: Boolean,
    currentData: Object,
  },
  data() {
    return {
      companyname: '',
      username: '',
      phone: '',
      mail: '',
      isRulesAccept: false,
      requestInProgress: false,
    }
  },
  validations () {
    return {
      companyname: { required, $autoDirty: true },
      username: { required, $autoDirty: true },
      phone: { required, phoneValidator, $autoDirty: true },
      mail: { required, email, $autoDirty: true },
      isRulesAccept: { isRulesAcceptValidator, $autoDirty: true },
    }
  },
  setup () {
    return {
      v$: useVuelidate()
    }
  },
  methods: {
    success() {
      this.$emit('success')
    },
    error() {
      this.$emit('error')
    },
    clearForm() {
      this.companyname = '';
      this.username = '';
      this.phone = '';
      this.mail = '';
      this.isRulesAccept = false;
      this.v$.companyname.$reset();
      this.v$.username.$reset();
      this.v$.phone.$reset();
      this.v$.mail.$reset();
      this.v$.isRulesAccept.$reset();
    },
    async sendForm() {
      this.requestInProgress = true;

      let payload = {};

      if (this.currentData.countOfemployee > 3) {
        payload  = {
          method: 'saleTimeBot',
          params: {
            companyname: this.companyname,
            username: this.username,
            phone: '380'+this.phone,
            mail: this.mail,
            sum: this.currentData.sum,
            lang: this.$i18n.locale,
          }
        };
      } else {
        payload  = {
          method: 'callbackTimeBot',
          params: {
            companyname: this.companyname,
            username: this.username,
            phone: '380'+this.phone,
            mail: this.mail,
            lang: this.$i18n.locale,
          }
        };
      }
      
      try {
        const resp = await requester(payload);
        
        if (this.currentData.countOfemployee > 3) {
          if (resp.result) {
            window.open(resp.result, '_blank');
          }
        }
        
        this.success();
      } catch (error) {
        this.error();
      }

      this.clearForm();

      this.requestInProgress = false;
    },
  },
}
</script>

<style lang="scss" scoped>

.popup {

  .input-name,
  .input-child,
  .input-phone,
  .input-mail {
    margin-bottom: 8px;
  }
  .input-check {
    display: flex;
    align-items: center;
  }
}

.final-sum {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;

  &__sum {
    font-weight: 700;
    font-size: 1.25rem;
  }

  &__curr {
    font-weight: 700;
    font-size: 1.5rem;
  }
}

#customButton {
  margin-top: 40px;
}

</style>