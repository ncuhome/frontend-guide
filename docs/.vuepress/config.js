module.exports = {
  title: 'NCUHOME 前端规范',
  description: '',
  // head: [
  //   ['link', { rel: 'icon', href: '/logo.png' }]
  // ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: '关于我们', link: 'https://team.ncuos.com' },
    ],
    sidebar: [
      '/guide/',
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