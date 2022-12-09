/*
 * @Author: zhangliangcai leancai@126.com
 * @Date: 2022-12-09 14:57:01
 * @LastEditors: zhangliangcai leancai@126.com
 * @LastEditTime: 2022-12-09 17:31:49
 * @FilePath: \VuePressDemo\docs\.vuepress\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  base: "/VuePressDemo/",
  title: "Hello VuePress",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    nav: [
      { text: "主目录", link: "/home/" }, // 内部链接 以docs为根目录
      { text: "目录1", link: "/foo/" }, // 内部链接 以docs为根目录
      { text: "目录2", link: "/bar/" }, // 内部链接 以docs为根目录
      // 下拉列表
      {
        text: "外部链接",
        items: [
          { text: "百度一下", link: "http://www.baidu.com/" },
          {
            text: "GitHub仓库",
            link: "https://github.com/Leancai/VuePressDemo",
          },
        ],
      },
    ],
    sidebar: {
      "/foo/": [
        {
          title: "目录1", // 必要的
          path: "/foo/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false,
          children: [
            {
              title: "介绍",
              path: "/foo/",
            },
            {
              title: "one",
              path: "/foo/one",
            },
            {
              title: "two",
              path: "/foo/two",
            },
          ],
        },
      ],
      "/bar/": [
        {
          title: "目录2", // 必要的
          path: "/bar/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false,
          children: [
            {
              title: "介绍",
              path: "/bar/",
            },
            {
              title: "three",
              path: "/bar/three",
            },
            {
              title: "four",
              path: "/bar/four",
            },
          ],
        },
      ],
      "/home/": [
        {
          title: "主目录", // 必要的
          path: "/home/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false,
          children: [
            {
              title: "介绍",
              path: "/home/",
            },
            {
              title: "联系我",
              path: "contact",
            },
            {
              title: "关于我",
              path: "about",
            },
          ],
        },
      ],
    },
  },
};
