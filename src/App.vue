<template>
  <div>{{ text }}</div>
  <button @click="change">改变</button>
  <input type="text" v-model="text" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const text = ref('我是根结点')
function change() {
  text.value = '根结点改变'
}
console.log(1234)
</script>
