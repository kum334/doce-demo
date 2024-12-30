import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto-sidebar.mjs";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/docs-demo",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  title: "我的项目",
  description: "A VitePress Site",
  themeConfig: {


       // 设置搜索框的样式
       search: {
        provider: "local",
        options: {
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              noResultsText: "无法找到相关结果",
              resetButtonTitle: "清除查询条件",
              footer: {
                selectText: "选择",
                navigateText: "切换",
              },
            },
          },
        },
      },
    logo:"/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '家',
        items:[
        {text:'首页',link:'/'},
        {text:'markdown',link:'/markdown-examples'},
        {text:'黄库',link:'/markdown-examples'}
      ] , 
    },
      
      {text: "mark示例", link : "/markdown-examples"  },
      {text:"自动生成1", link : "/front-end/react/"  },
      {text:"自动生成2", link : "/backend/rabbitmq/" },
   
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown 演示', link: '/markdown-examples' },
    //       { text: 'Runtime API 演示', link: '/api-examples' }
    //     ]
        
    //   }, {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown 演示', link: '/markdown-examples' },
    //       { text: 'Runtime API 演示', link: '/api-examples' }
    //     ]
        
    //   }
    // ],

    sidebar: {
     
       "/front-end/react": set_sidebar("front-end/react"),
       "/backend/rabbitmq": set_sidebar("backend/rabbitmq"),
     },
     

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kum334' }
    ]
    ,


    footer: 
      { copyright:"Copyright@ 2024 Albert Huang"}
    
  }

  
})
