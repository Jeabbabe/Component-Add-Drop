import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const newsStore = defineStore("news", () => {
  const count = ref(0);

  const newsList = ref([
    {id: 1, title: "news1"},
    {id: 2, title: "news2"},
    {id: 3, title: "news3"},
  ]);

  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment, newsList };
});
