<template>
  <h2 flex items-center mt-14 mb-4 font-semibold text-3xl>
    <span flex-1>Posts</span>
    <div op-50 hover:op-100 transition-opacity cursor-pointer>
      <div m-2 i-ri-arrow-right-up-line></div>
    </div>
  </h2>
  <div grid grid-cols-1>
    <PostsItem v-for="post in showPostList" :key="post.id" :item="post" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { usePostsStore } from '@/stores/post'
const { getAllPost } = usePostsStore()
const { showPostList } = storeToRefs(usePostsStore())
onMounted(() => getAllPost())
</script>

<style scoped></style>
