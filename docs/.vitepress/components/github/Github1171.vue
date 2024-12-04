<template>
  <div class="flex items-center gap-4">
    <label for="one-way"
      ><input
        id="one-way"
        v-model="oneWay"
        class="mr-1"
        type="radio"
        :value="true"
      />One way</label
    >
    <label for="round-trip"
      ><input
        id="round-trip"
        v-model="oneWay"
        class="mr-1"
        type="radio"
        :value="false"
      />
      Round trip</label
    >
  </div>
  <div class="mt-4">
    {{ date }}
  </div>
  <div class="mt-4">
    <VDatePicker v-model="date" :model-modifiers="modifiers" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const date = ref();
const oneWay = ref(true);

const modifiers = computed(() => ({
  range: !oneWay.value,
}));
</script>
