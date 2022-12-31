<template>
  <a
    inline-flex
    px-3
    py-2
    mt-2
    mr-2
    rounded-md
    bg-gray-50
    transition-colors
    decoration-none
    hover:text-white
    class="dark:bg-gray-50/10"
    :class="item.class"
    :href="item.link"
    target="_blank"
  >
    <div text-xl>
      <div :class="item.icon"></div>
    </div>
    <div v-if="item.text" text-sm ml-1>{{ item.text }}</div>
  </a>
</template>

<script setup lang="ts">
import type { ISocialsItem } from '@/typings'

defineProps<{ item: ISocialsItem }>()
</script>

<style scoped></style>
