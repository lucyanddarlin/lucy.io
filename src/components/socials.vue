<template>
  <div mt-4>
    <SocialsItem
      v-for="socials in socialsList"
      :key="socials.link"
      :item="socials"
    />
  </div>
</template>

<script setup lang="ts">
import type { ISocialsItem } from '@/typings'

const socialsList: ISocialsItem[] = [
  {
    text: 'Github',
    link: 'https://github.com/lucyanddarlin',
    icon: 'i-ri-github-fill',
    class: 'hover:bg-gray-700 dark:hover:bg-white dark:hover:text-gray-900',
  },
  {
    text: 'Blog',
    link: '',
    icon: 'i-ri-book-2-line',
    class: 'hover:bg-gray-700 dark:hover:bg-white dark:hover:text-gray-900',
  },
  {
    text: '',
    link: '',
    icon: 'i-fa-brands-twitter',
    class: 'hover:bg-#00ACEE',
  },
  {
    text: '',
    link: '',
    icon: 'i-fa-brands-instagram',
    class: 'hover:bg-gradient-to-r from-[#fd5949] to-[#d6249f]',
  },
  {
    text: '',
    link: 'https://space.bilibili.com/52643929',
    icon: 'i-ri-bilibili-fill',
    class: 'hover:bg-#fb7299',
  },
]
</script>

<style scoped></style>
