<template>
  <div class="header">
    <div class="header-wrapper container">
      <nav
        ref="header-nav" 
        class="header-nav"
      >
        <div class="header-nav__contacts">
          <div class="header-nav__contacts-item">
            <img src="../assets/images/header-cont1.svg" alt="phone">
            <a href="tel:+380633342020">+38 (063) 334 20 20</a>
          </div>
          <div class="header-nav__contacts-item">
            <img src="../assets/images/header-cont2.svg" alt="telegram">
            <a href="https://t.me/kodoffice" target="_blank">@kodoffice</a>
          </div>
        </div>
        <ul class="header-nav__list">
          <li
            class="header-nav__list-item"
            v-for="(item, i) in navList"
            :key="i"
          > 
            <a :href="'#anchor'+i">
              {{ item }} 
            </a>
          </li>
          <LocaleSwitcher class="header-nav__switcher"/>
        </ul>
      </nav>

      <div 
        class="header-burger"
        @click="toggleNavigation"
      >
        <div class="header-burger__item"></div>
        <div class="header-burger__item"></div>
        <div class="header-burger__item"></div>
      </div>
    </div>
  </div>
</template>

<script>

import LocaleSwitcher from '../components/LocaleSwitcher';

export default {
  name: "headerBlock",
  components: {
    LocaleSwitcher,
  },
  computed: {
    navList() {
      return [
        this.$t('header.nav[0]'), this.$t('header.nav[1]'),
        this.$t('header.nav[2]'), this.$t('header.nav[3]'),
        this.$t('header.nav[4]'), this.$t('header.nav[5]'),
      ]
    },
  },
};
</script>

<style lang="scss" scoped>

.header {
  min-width: 1900px;
  background: linear-gradient(180deg, rgba(195, 207, 217, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
  
  &-wrapper {
    padding: 30px 250px;
  }

  &-nav {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    &__contacts {
      display: flex;
      margin-bottom: 30px;

      &-item {
        display: flex;
        align-items: center;

        img {
          margin-right: 10px;
        }

        a {
          font-weight: 500;
          font-size: 1.125rem;
          color: #27316B;
        }

        &:first-child {
          margin-right: 85px;
        }
      }
    }

    &__list {
      width: 100%;
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      &-item {
        font-weight: 600;
        font-size: 1.125rem;
        line-height: 200%;
        color: #27316B;
        
        a {
          color: #27316B;
          text-transform: uppercase;

          &:hover {
            color: #1632D4;
          }
        }
      }
    }
  }
}

</style>