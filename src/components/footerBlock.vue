<template>
  <div class="footer">
    <div class="footer-wrapper container">
      <img src="../assets/images/footer-logo.png" alt="logo" class="footer-logo">
      <div class="footer-copy">2022 © TimeBot</div>
      <div class="footer-socials">
        <a href="https://t.me/yourworkingtime_bot" target="_blank">
          <img
            class="footer-socials-img"
            src="../assets/images/footer-icon.svg" alt="tg"
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "footerBlock",
};
</script>

<style lang="scss" scoped>

.footer {
  background: #27316B;
  box-shadow: 0px 4px 4px rgba(0, 35, 120, 0.25);
  
  &-wrapper {
    width: 100%;
    padding: 16px 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-copy {
    font-weight: 400;
    font-size: 0.875rem;
    color: #FFFFFF;
  }

  &-socials {
    &-img {
      height: 14px;
      width: 16px;
    }
  }
}

</style>