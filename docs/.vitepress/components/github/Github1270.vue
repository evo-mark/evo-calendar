<template>
  <VDatePicker v-model.range="range" mode="datetime">
    <template #default="{ inputValue, inputEvents }">
      <div class="flex justify-center items-center space-x-2">
        <input
          :value="inputValue.start"
          class="bg-white rounded border border-gray-300 px-2 py-1"
          v-on="inputEvents.start"
        /><span> &mdash; </span>
        <input
          :value="inputValue.end"
          class="bg-white rounded border border-gray-300 px-2 py-1"
          v-on="inputEvents.end"
        />
      </div>
    </template>
  </VDatePicker>
</template>
<script setup>
import { ref } from 'vue';

const range = ref(null);
</script>
