<template>
  <span>
    {{ animatedNumber }}
  </span>
</template>

<script>
/**
 * 数字跳动组件
 * */
import { TweenLite } from "gsap";

export default {
  name: "TweenLite",
  props: {
    number: {
      type: Number,
      default: 0
    },
    delay: {
      type: Number,
      default: 0
    },
    animate: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentNumber: 0,
      tweenedNumber: 0
    };
  },
  computed: {
    delayTime() {
      return this.delay / 1000;
    },
    animatedNumber: function() {
      return this.tweenedNumber.toFixed(this.fixed);
    },
    fixed() {
      const str = this.number + "";
      const fixed = str.split(".")[1];
      if (fixed) {
        return fixed.length;
      } else {
        return 0;
      }
    }
  },
  watch: {
    currentNumber: function(newValue) {
      if (!newValue) {
        return false;
      }
      if (this.animate) {
        TweenLite.to(this.$data, 1, {
          tweenedNumber: newValue,
          delay: this.delayTime
        });
      } else {
        this.tweenedNumber = newValue;
      }
    }
  },
  mounted() {
    this.currentNumber = this.number;
  }
};
</script>

<style scoped></style>
