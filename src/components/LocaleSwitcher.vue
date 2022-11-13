<template>

  <div class="switcher">
    <div class="switcher-dropdown">
      <div 
        class="switcher-button"
        @click="toggleLocaleSelect"
      >
        {{ localeText }}
        <img class="switcher-arrow" src="../assets/images/switcher-arrow.svg" alt="arrow">
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
    height: 44px;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    background: rgba(209, 229, 255, 0.5);
    backdrop-filter: blur(2px);
    border-radius: 4px;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 200%;
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
    right: 4px;

    &__list {
      padding: 0 20px;
      background: #E2EFFE;
      box-shadow: 0px 4px 4px rgba(87, 115, 166, 0.25);
      border-radius: 4px;
      list-style: none;
    }

    &__item {
      padding: 20px 10px;
      font-weight: 500;
      font-size: 1.125rem;
      user-select: none;
      text-transform: uppercase;
      cursor: pointer;

      &:hover {
        color: #1632D4;
      }

      &:not(:last-child) {
        border-bottom: 1px solid #fff;
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

    .switcher-button {
      box-shadow: 0px 4px 4px rgba(87, 115, 166, 0.25);
      backdrop-filter: blur(2px);
    }

    .switcher-button + .switcher-button {
      margin-left: 1rem;
    }

    .selected {
      color: #1632D4;
    }
  }
}
}

</style>