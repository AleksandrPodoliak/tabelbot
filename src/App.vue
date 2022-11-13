<template>
  <router-view/>
</template>

<style lang="scss">

@import './style/reset.css';
@import './style/fonts.css';
@import './style/basic.scss';

.container {
  width: 1900px;
  margin: 0 auto;

  &-inner {
    padding: 60px 250px;
  }
}

@media screen and (max-width: 420px) {
  .container {
    width: 100%;

    &-inner {
      padding: 1.5rem 1.5rem;
    }
  }
}

</style>
