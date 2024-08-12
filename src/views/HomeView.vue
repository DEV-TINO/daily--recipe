<script setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const useCounter = useCounterStore();

const {increment} = useCounter
const {count, doubleCount} = storeToRefs(useCounter)

</script>

<template>
  <div>
    <button @click="increment()">Double!</button>
    {{ count }}
    {{ doubleCount }}
    <h1>Hello, world!</h1>
  </div>
</template>
