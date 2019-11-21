<template>
  <div>
    <el-button v-bind="$attrs" v-on="$listeners">
      <slot></slot>
    </el-button>
  </div>
</template>
<script>
export default {
  name: "aia-button",
  created() {
    console.log(this.$attrs, "=====");
  }
};
</script>