module.exports = {
  title: 'NCUHOME FE Guide',
  description: '',
  // head: [
  //   ['link', { rel: 'icon', href: '/logo.png' }]
  // ],
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'English' // 将会被设置为 <html> 的 lang 属性
    },
    '/zh/': {
      lang: '简体中文'
    }
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: '关于我们', link: 'https://team.ncuos.com' },
    ],
    sidebar: [
      {
        title: 'Style Guide',   // 必要的
        path: '/guide/',      // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        // children: [
        //   '/guide/naming/',
        //   '/guide/html/'
        // ]
      }
    ],
    lastUpdated: 'Last Updated',
    repo: 'Wzb3422/Ncuhome-fe-style-guide',
    repoLabel: '查看源码',
    docsRepo: 'Wzb3422/Ncuhome-fe-style-guide',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    smoothScroll: true
  }
}