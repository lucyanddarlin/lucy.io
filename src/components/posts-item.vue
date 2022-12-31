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
    :href="item.url"
    target="_blank"
  >
    <div flex-1>{{ item.title }}</div>
    <div op-40 font-normal hidden sm:block>
      {{ format(item.published_at, 'yyyy-MM-dd') }}
    </div>
  </a>
</template>

<script setup lang="ts">
import { format } from 'date-fns'
import type { PostMeta } from '@/typings'

defineProps<{ item: PostMeta }>()
</script>

<style scoped></style>
