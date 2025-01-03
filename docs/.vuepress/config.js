import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
 
export default defineUserConfig({
    bundler: viteBundler(),
    base: '/lzcooker.github.io/',
    theme: defaultTheme({
        // 在这里进行配置
        navbar: [
            // NavbarItem
            { text: '首页', link: '/', },
            // NavbarGroup
            {
                text: 'lzc的博客',
                children: [
                    { text: 'Github', link: '/' }
                ],
            },
        ],
        sidebar: [
          {
              text: '前言',
              collapsible: false,
              children: [
                  { text: '内容介绍' },
                  { text: '使用指南' }
              ]
          },
          {
              text: '算法学习',
              link: '/杂谈/hello.md',
              collapsible: false,
              children: [
                  { text: '分治法', link: '/杂谈/hello.md' }
              ],
          }
      ]
    }),
 
    lang: 'zh-CN',
    title: 'lzc的博客',
    description: '这是我的第一个 VuePress 站点',
})