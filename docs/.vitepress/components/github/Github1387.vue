<template>
  <VDatePicker v-model="date" locale="de">
    <template #default="{ inputValue, inputEvents }">
      <input
        :value="inputValue"
        class="px-2 py-1 bg-white text-gray-800 rounded"
        v-on="inputEvents"
      />
    </template>
  </VDatePicker>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date());
</script>
