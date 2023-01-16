import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { reqGetAllPosts } from '@/api'
import type { IPostMeta } from '@/typings'

export const usePostsStore = defineStore('posts', () => {
  const allPostList = ref<IPostMeta[]>([])
  const showPostList = computed(() => allPostList.value.slice(0, 5))

  const getAllPost = async () => {
    const { data } = await reqGetAllPosts()
    if (data) {
      data.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
    }
    allPostList.value = data
  }
  return { allPostList, showPostList, getAllPost }
})
