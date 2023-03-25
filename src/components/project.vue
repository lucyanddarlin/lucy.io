<template>
  <h2 flex items-center mt-14 mb-4 font-semibold text-3xl>
    <span flex-1>Projects</span>
    <div op-50 hover:op-100 transition-opacity cursor-pointer>
      <div m-2 i-ri-arrow-right-up-line></div>
    </div>
  </h2>
  <div grid gap-4 grid-cols-1 sm:grid-cols-2>
    <ProjectsItem
      v-for="project in projectList"
      :key="project.link"
      :item="project"
    />
  </div>
</template>

<script setup lang="ts">
import type { IProjectItem } from '@/typings'

const projectList: IProjectItem[] = [
  {
    name: 'Mini-vue',
    desc: 'generate mini-vue production',
    link: 'https://github.com/lucyanddarlin/setup-mini-vue',
    icon: 'i-fluent-emoji-flat:musical-keyboard',
  },
  {
    name: 'f2f website',
    desc: 'website with vite-ssg',
    link: 'https://github.com/lucyanddarlin/f2f',
    icon: 'i-fluent-emoji-flat:desktop-computer',
  },
]
</script>

<style scoped></style>
