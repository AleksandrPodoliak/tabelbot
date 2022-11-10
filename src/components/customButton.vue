<template>
  <button 
    class="button"
    :class="[secondary ? 'secondary' : '']"
    :disabled="disabled"
    :style="{ width: width}"
  >
    <span
      class="button__text"
    >
      {{ text }}
    </span>
  </button>
</template>

<script>

export default {
  name: "customButton",
  props: {
    secondary: {
      default: false
    },
    text: String,
    disabled: {
      default: false
    },
    width: {
      default: '100%'
    },
  },
}
</script>

<style lang="scss" scoped>

.button {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 76px;
  border-radius: 100px;
  user-select: none;
  cursor: pointer;
  background: #DE0707;
  box-shadow: 0px 4px 4px rgba(83, 6, 6, 0.25);
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 150%;
  color: #FFFFFF;
  text-transform: uppercase;

  &:hover {
    background: #F10404;
    box-shadow: 0px 4px 4px rgba(83, 6, 6, 0.25);
  }

  &:active {
    background: #DE0707;
    box-shadow: 0px 0px 5px rgba(222, 7, 7, 0.8);
  }

  &:disabled {
    background: #DE0707;
    box-shadow: 0px 4px 4px rgba(83, 6, 6, 0.25);
    opacity: 0.5;
    cursor: auto;
  }
}

.secondary {
  background: transparent;
  border: 2px solid #27316B;
  box-shadow: none;
  font-weight: 900;
  font-size: 1.125rem;
  line-height: 200%;
  color: #27316B;

  &:hover {
    background: transparent;
    border: 2px solid #1632D5;
    color: #1632D4;
    box-shadow: none;
  }

  &:active {
    background: transparent;
    border: 2px solid #27316B;
    box-shadow: none;
  }

  &:disabled {
    background: transparent;
    opacity: 0.5;
    border: 2px solid #27316B;
    box-shadow: none;
    color: #27316B;
    cursor: auto;
  }
}

</style>