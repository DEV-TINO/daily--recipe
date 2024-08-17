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
    <h1 class="text-lg text-red-600 font-bold w-40 h-40 bg-yellow-300">Hello, world!</h1>
  </div>
</template>
