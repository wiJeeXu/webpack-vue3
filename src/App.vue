<template>
  <div class="container">
    <div>{{ text }}</div>
    <button @click="change">改变</button>
    <input type="text" v-model="text" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

import type { Ref } from 'vue'
const text = ref('我是根结点')
const color: Ref<string> = ref('blue')
function change() {
  text.value = '根结点改变'
}
</script>

<style lang="scss" scoped>
$primary: red;
.container {
  background: v-bind(color);
}
</style>
