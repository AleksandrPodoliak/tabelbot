<template>
  <a id="anchor1"></a>
  <div class="procuring container container-inner">
    <div class="title">
      {{ this.$t('procuring.title') }}
    </div>
    <div class="content">
      <div class="content-column">
        <ul>
          <li>{{ this.$t('procuring.list1_item1') }}</li>
          <li>{{ this.$t('procuring.list1_item2') }}</li>
          <li>{{ this.$t('procuring.list1_item3') }}</li>
          <li>{{ this.$t('procuring.list1_item4') }}</li>
        </ul>
        <div class="content-column__title">{{ this.$t('procuring.subtitle1') }}</div>
        <ul>
          <li>{{ this.$t('procuring.list2_item1') }}</li>
          <li>{{ this.$t('procuring.list2_item2') }}</li>
          <li>{{ this.$t('procuring.list2_item3') }}</li>
          <li>{{ this.$t('procuring.list2_item4') }}</li>
          <li>{{ this.$t('procuring.list2_item5') }}</li>
          <li>{{ this.$t('procuring.list2_item6') }}</li>
          <li>{{ this.$t('procuring.list2_item7') }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "procuringBlock",
}
</script>

<style lang="scss" scoped>

ul {
  width: 100%;

  li {
    margin-left: 28px;
    font-weight: 300;
    font-size: 1.25rem;
  }
}

.procuring {
  .content {
    display: flex;
    flex-direction: column;

    &-column {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      &__image {
        width: 435px;
        height: 260px;
        margin-bottom: 40px;
      }

      &__title {
        margin: 60px 0 20px;
        width: 100%;
        font-weight: 700;
        font-size: 1.25rem;
      }
    }
  }
}

</style>