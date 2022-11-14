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
            <a 
              class="header-nav__list-item-desctop"
              :href="'#anchor'+i"
            >
              {{ item }}
            </a>
            <a 
              class="header-nav__list-item-mobile"
              :href="'#anchor'+i"
              @click="toggleNavigation"
            >
              {{ item }}
            </a>
          </li>
          <li class="header-nav__list-item_contacts">
            <img src="../assets/images/header-cont1.svg" alt="phone">
            <a href="tel:+380633342020">+38 (063) 334 20 20</a>
          </li>
          <li class="header-nav__list-item_contacts">
            <img src="../assets/images/header-cont2.svg" alt="telegram">
            <a href="https://t.me/kodoffice" target="_blank">@kodoffice</a>
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
  methods: {
    toggleNavigation() {

      if (this.$refs['header-nav'].style.display == 'none' || !this.$refs['header-nav'].style.display) {
        this.$refs['header-nav'].style.display = 'flex'
        return
      }

      this.$refs['header-nav'].style.display = 'none'
    },
  },
};
</script>

<style lang="scss" scoped>

.header {
  position: relative;
  min-width: 1440px;
  background: linear-gradient(180deg, rgba(195, 207, 217, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
  
  &-wrapper {
    padding: 30px 20px;
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

        &-mobile {
          display: none;
        }

        &_contacts {
          display: none;
        }
        
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

@media screen and (max-width: 420px) {
  .header {
    min-width: unset;
    background: #F6FAFF;
    box-shadow: 0px 4px 4px rgba(181, 183, 185, 0.25);
    
    &-wrapper {
      padding: 1.5rem;
      display: flex;
      justify-content: right;
    }

    &-nav {
      overflow: scroll;
      display: none;
      position: absolute;
      z-index: 9;
      width: 100%;
      height: calc(100vh - 4.125rem);
      left: 0;
      top: 100%;
      background: #F6FAFF;

      &__contacts {
        display: none;
      }

      &__list {
        width: 100%;
        flex-direction: column;
        padding: 0 1.5rem;
        
        &-item {
          width: 100%;
          text-align: center;
          margin: 0;
          padding: 4% 0;
          font-weight: 600;
          font-size: 1rem;
          line-height: 200%;
          border-bottom: 1px solid rgba(39, 49, 107, 0.5);

          &:nth-child(6) {
            border-bottom: 2px solid #27316B;
          }

          &-desctop {
            display: none;
          }

          &-mobile {
            display: block;
          }

          &_contacts {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            text-align: center;
            margin: 0;
            padding: 4% 0;
            border-bottom: 1px solid rgba(39, 49, 107, 0.5);
            font-weight: 500;
            font-size: 1.125rem;
            line-height: 200%;

            a {
              color: #27316B;
            }

            img {
              margin-right: 10px;
            }
          }
        }
      }

      &__switcher {
        margin: 20px 0 1.5rem 0;
      }
    }

    &-burger {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      width: 1.5rem;
      height: 1.125rem;

      &__item {
        width: 100%;
        border: 1px solid #06113D;
        border-radius: 1px;
        background-color: #06113D;

        &:last-child {
          width: 60%;
        }
      }
    }
  }
}

</style>