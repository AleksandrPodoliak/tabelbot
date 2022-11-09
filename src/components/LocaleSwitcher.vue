<template>

  <div class="switcher">
    <div class="switcher-dropdown">
      <div 
        class="switcher-button"
        @click="toggleLocaleSelect"
      >
        {{ localeText }}
        <!-- <img class="switcher-arrow" src="../assets/arrow-down.svg" alt="arrow"> -->
      </div>
    </div>
    
    <div class="switcher-menu">
      <div 
        class="switcher-button"
        :class="{ selected: $i18n.locale == 'uk'}"
        @click="selectLocale('uk')"
      >
        UA
      </div>
      <div 
        class="switcher-button"
        :class="{ selected: $i18n.locale == 'en'}"
        @click="selectLocale('en')"
      >
        EN
      </div>
      <div 
        class="switcher-button"
        :class="{ selected: $i18n.locale == 'ru'}"
        @click="selectLocale('ru')"
      >
        RU
      </div>
    </div>
    
    <div
      v-if="showLocaleSelect"
      class="switcher-select"
    >
      <ul class="switcher-select__list">
        <li
          class="switcher-select__item"
          v-for="(locale, i) in locales"
          :key="i"
          @click="selectLocaleAndToggleSelect(locale.value)"
        >
          {{ locale.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "LocaleSwitcher",
  data() {
    return {
      showLocaleSelect: false,
      locales: [
        {
          value: 'uk',
          text: 'Українська',
        },
        {
          value: 'en',
          text: 'English',
        }, 
        {
          value: 'ru',
          text: 'Русский',
        },
      ] 
    };
  },
  computed: {
    localeText() {
      if (this.$i18n.locale == 'uk') return 'UA'
      if (this.$i18n.locale == 'ru') return 'RU'
      if (this.$i18n.locale == 'en') return 'EN'
      return 'Українська'
    },
  },
  methods: {
    toggleLocaleSelect() {
      this.showLocaleSelect = !this.showLocaleSelect;
    },
    selectLocale(val) {
      this.$i18n.locale = val;
      this.$router.replace(`/${val}`)
    },
    selectLocaleAndToggleSelect(val) {
      this.selectLocale(val);
      this.toggleLocaleSelect();
    },
  },
};
</script>

<style lang="scss" scoped>

.switcher {
  position: relative;
  z-index: 10;

  &-menu {
    display: none;
  }

  &-button {
    display: flex;
    line-height: 200%;
    align-items: center;
    padding: 0 8px;
    background: rgba(85, 129, 241, 0.21);
    backdrop-filter: blur(2px);
    border-radius: 4px;
    font-size: 14px;
    color: #00B2FF;
    cursor: pointer;
    user-select: none;
  }

  &-arrow {
    margin-left: 4px;
  }

  &-select {
    width: min-content;
    position: absolute;
    z-index: 10;
    right: 0;

    &__list {
      padding: 0 20px;
      background: #011343;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    &__item {
      padding: 20px 10px;
      font-size: 14px;
      color: #FFFFFF;
      user-select: none;
      cursor: pointer;

      &:hover {
        color: #00B2FF;
      }

      &:not(:last-child) {
        border-bottom: 1px solid rgba(230, 230, 254, 0.1);
      }
    }
  }

}

@media screen and (max-width: 420px) {

  .switcher {

    &-dropdown {
      display: none;
    }

    &-select {
      bottom: 0;
      left: 100%;
    }

    &-menu {
      display: flex;

      .switcher-button + .switcher-button {
        margin-left: 1rem;
      }

      .selected {
        background: #00B2FF;
        color: #fff;
      }
    }
  }
}

</style>