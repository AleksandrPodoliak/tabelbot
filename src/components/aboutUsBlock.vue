<template>
  <a id="anchor0"></a>
  <div class="about container container-inner">
    <div class="title">
      {{ this.$t('about.title') }}
    </div>
    <div class="content">
      <div class="content-row">
        <div class="content-row-item">
          <img class="content-row-item__image1" src="../assets/images/about-img1.png" alt="about1">
          <div class="content-row-item__title">{{ this.$t('about.subtitle1') }}</div>
          <ul>
            <li>{{ this.$t('about.list1_item1') }}</li>
            <li>{{ this.$t('about.list1_item2') }}</li>
          </ul>
        </div>
        <div class="content-row-item">
          <img class="content-row-item__image2" src="../assets/images/about-img2.png" alt="about2">
          <div class="content-row-item__title">{{ this.$t('about.subtitle2') }}</div>
          <ul>
            <li>{{ this.$t('about.list2_item1') }}</li>
            <li>{{ this.$t('about.list2_item2') }}</li>
            <li>{{ this.$t('about.list2_item3') }}</li>
            <li>{{ this.$t('about.list2_item4') }}</li>
          </ul>
        </div>
      </div>
      <div class="content-column">
        <img class="content-column__image" src="../assets/images/about-img3.png" alt="about3">
        <div class="content-column__title">{{ this.$t('about.subtitle3') }}</div>
        <ul>
          <li>{{ this.$t('about.list3_item1') }}</li>
          <li>{{ this.$t('about.list3_item2') }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutUsBlock",
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

.about {
  .content {
    display: flex;
    flex-direction: column;

    &-row {
      display: flex;
      justify-content: space-between;

      &-item {
        width: 700px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 60px;

        &__image1 {
          width: 408px; 
          height: 200px;
          margin-bottom: 40px;
        }
        
        &__image2 {
          width: 289px; 
          height: 200px;
          margin-bottom: 40px;
        }

        &__title {
          width: 100%;
          font-weight: 700;
          font-size: 1.25rem;
        }
      }
    }

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
        width: 100%;
        font-weight: 300;
        font-size: 1.25rem;
      }
    }
  }
}

</style>