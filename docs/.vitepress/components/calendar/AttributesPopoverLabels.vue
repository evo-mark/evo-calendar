<template>
  <Example centered>
    <div v-if="visibility === 'focus'" class="text-lg font-semibold mb-2 mt-0">
      Focus
    </div>
    <div v-if="visibility === 'click'" class="text-lg font-semibold mb-2 mt-0">
      Click
    </div>
    <VCalendar :attributes="attributes" />
  </Example>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  visibility: { type: String, default: 'hover' },
  hideIndicators: Boolean,
});

const todos = ref([
  {
    description: 'Take Noah to basketball practice.',
    isComplete: false,
    dates: { repeat: { weekdays: 5 } }, // Every Friday
    color: 'red',
  },
]);

const attributes = computed(() => [
  // Attributes for todos
  ...todos.value.map(todo => ({
    dates: todo.dates,
    dot: {
      color: todo.color,
      ...(todo.isComplete && { class: 'opacity-75' }),
    },
    popover: {
      label: todo.description,
      visibility: props.visibility,
      hideIndicator: props.hideIndicators,
    },
  })),
]);
</script>
