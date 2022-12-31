export interface ISocialsItem {
  text: string
  link: string
  icon: string
  class: string
}

export interface IProjectItem {
  name: string
  desc: string
  link: string
  icon: string
}

export interface PostMeta {
  id?: string
  title: string
  url: string
  published_at: number
}
