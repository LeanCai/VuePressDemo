module.exports = {
  base: "/VuePressDemo/",
  title: "Hello VuePress",
  themeConfig: {
    nav: [
      { text: "主目录", link: "/home/" }, // 内部链接 以docs为根目录
      { text: "目录1", link: "/foo/" }, // 内部链接 以docs为根目录
      { text: "目录2", link: "/bar/" }, // 内部链接 以docs为根目录
      // 下拉列表
      {
        text: "外部链接",
        items: [
          { text: "百度", link: "http://www.baidu.com/" },
          {
            text: "GitHub仓库",
            link: "https://github.com/Leancai/VuePressDemo",
          },
        ],
      },
    ],
    // sidebar: [
    //   {
    //     title: "Home",
    //     path: "/",
    //   },
    //   {
    //     title: "Group 1", // 必要的
    //     path: "/foo/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: false, // 可选的, 默认值是 true,
    //     children: [
    //       {
    //         title: "介绍",
    //         path: "/foo/",
    //         collapsable: false,
    //       },
    //       {
    //         title: "one",
    //         path: "/foo/one",
    //         collapsable: false,
    //       },
    //       {
    //         title: "two",
    //         path: "/foo/two",
    //         collapsable: false,
    //       },
    //     ],
    //   },
    //   {
    //     title: "Group 2", // 必要的
    //     path: "/bar/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     children: [
    //       {
    //         title: "介绍",
    //         path: "/bar/",
    //         collapsable: false,
    //       },
    //       {
    //         title: "three",
    //         path: "/bar/three",
    //         collapsable: false,
    //       },
    //       {
    //         title: "four",
    //         path: "/bar/four",
    //         collapsable: false,
    //       },
    //     ],
    //   },
    //   {
    //     title: "about me",
    //     path: "/about.md",
    //   },
    //   {
    //     title: "comtact me",
    //     path: "/contact.md",
    //   },
    // ],
    // sidebar: {
    //   // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
    //   "/accumulate/": [
    //     "/accumulate/", // accumulate文件夹的README.md 不是下拉框形式
    //     {
    //       title: "侧边栏下拉框的标题1",
    //       children: [
    //         "/accumulate/JS/test", // 以docs为根目录来查找文件
    //         // 上面地址查找的是：docs>accumulate>JS>test.md 文件
    //         // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
    //       ],
    //     },
    //   ],
    //   // docs文件夹下面的algorithm文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
    //   "/algorithm/": [
    //     "/algorithm/",
    //     {
    //       title: "第二组侧边栏下拉框的标题1",
    //       children: ["/algorithm/simple/test"],
    //     },
    //   ],
    // },
    sidebar: {
      "/foo/": [
        {
          title: "目录1", // 必要的
          path: "/foo/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false,
          children: [
            {
              title: "主目录",
              path: "/home/",
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
              title: "主目录",
              path: "/home/",
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
              title: "目录1",
              path: "/foo/",
            },
            {
              title: "目录2",
              path: "/bar/",
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
