<template>
  <h2 flex items-center mt-14 mb-4 font-semibold text-3xl>
    <span flex-1>Posts</span>
    <div op-50 hover:op-100 transition-opacity cursor-pointer>
      <div m-2 i-ri-arrow-right-up-line></div>
    </div>
  </h2>
  <div grid grid-cols-1>
    <PostsItem v-for="post in postsList" :key="post.id" :item="post" />
  </div>
</template>

<script setup lang="ts">
import type { PostMeta } from '@/typings'

const postsList: PostMeta[] = [
  {
    id: '1',
    title: 'test',
    url: 'test',
    published_at: Date.now(),
  },
  {
    id: '1',
    title: 'test',
    url: 'test',
    published_at: Date.now(),
  },
]
</script>

<style scoped></style>
