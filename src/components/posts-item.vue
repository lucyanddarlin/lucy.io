<template>
  <a
    flex
    px-3
    py-2
    mt-2
    mr-2
    rounded-md
    transition-colors
    decoration-none
    hover:bg-gray-100
    class="dark:hover:bg-gray-50/10"
    target="_blank"
    :href="'https://notes.lucys.space/' + item.id"
  >
    <div flex-1>{{ item.title }}</div>
    <div op-40 font-normal hidden sm:block>
      <!-- {{ item.createdAt }} -->
      {{ format(new Date(item.createdAt), 'yyyy-MM-dd') }}
    </div>
  </a>
</template>

<script setup lang="ts">
import { format } from 'date-fns'
import type { IPostMeta } from '@/typings'

defineProps<{ item: IPostMeta }>()
</script>

<style scoped></style>
