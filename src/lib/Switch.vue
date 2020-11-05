<template>
    <button :class="{isActivated:value}" @click="toggle">
        <span></span>
    </button>
</template>

<script lang="ts">
  import {ref} from 'vue'

  export default {
    props: {
      value: Boolean
    },
    setup(props, context) {
      const toggle = () => {
        context.emit('input', !props.value)
      };
      return {toggle}
    }

  }
</script>

<style lang="scss" scoped>
    $h: 22px;
    $h2: $h - 4px;
    button {
        height: $h;
        width: $h * 2;
        border: none;
        background: grey;
        border-radius: $h/2;
        position: relative;
        &:focus {
            outline: none;
        }
    }
    span {
        height: $h2;
        width: $h2;
        background: white;
        border-radius: $h2/2;
        position: absolute;
        left: 2px;
        top: 50%;
        transform: translateY(-50%);
        transition: left .25s;
    }
    button.isActivated {
        background: deepskyblue;
        > span {
            left: calc(100% - #{$h2} - 2px);
        }
    }
</style>
