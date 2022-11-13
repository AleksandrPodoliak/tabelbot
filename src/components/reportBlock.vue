<template>
  <a id="anchor5"></a>
  <div class="report container container-inner">
    <div class="title">
      {{ this.$t('report.title') }}
    </div>
    <div class="content">
      <div class="content-row">
        <div class="content-row-item">
          <img class="content-row-item__image1" src="../assets/images/report-img1.png" alt="report">
          <ul>
            <li v-html="$t('report.list_item1')"></li>
            <li v-html="$t('report.list_item2')"></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "reportBlock",
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
.report {
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-row {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 60px;

      &-item {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        &__image1 {
          width: 247px; 
          height: 262px;
          margin-bottom: 60px;
        }
      }
    }
  }
}

@media screen and (max-width: 420px) {

  ul {
    li {
      font-size: 1rem;
    }
  }
  .report {
    .content {

      &-row {
        margin-bottom: 30px;

        &-item {

          &__image1 {
            width: 100%;
            height: unset;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
}
</style>