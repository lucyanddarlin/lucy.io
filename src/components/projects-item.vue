<template>
  <a
    px-4
    py-3
    rounded-md
    bg-gray-50
    transition-colors
    decoration-none
    hover:bg-gray-100
    class="dark:bg-gray-50/10 dark:hover:bg-gray-50/20"
    :href="item.link"
    target="_blank"
  >
    <div flex h-full items-center justify-center>
      <div mr-4 text-4xl><div :class="item.icon"></div></div>
      <div flex-1>
        <div font-medium leading-relaxed>{{ item.name }}</div>
        <div op-50 font-normal text-sm>{{ item.desc }}</div>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { IProjectItem } from '@/typings'

defineProps<{ item: IProjectItem }>()
</script>

<style scoped></style>
