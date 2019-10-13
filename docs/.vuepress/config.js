module.exports = {
  title: 'NCUHOME FE Guide',
  // description: '',
  // head: [
  //   ['link', { rel: 'icon', href: '/logo.png' }]
  // ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'About us', link: 'https://team.ncuos.com' },
    ],
    sidebar: [
      {
        title: 'JavaScript 代码风格',
        path: '/guide/js/'
      },
      {
        title: 'TypeScript 代码风格',
        path: '/guide/ts/'
      },
      {
        title: 'React 代码风格',
        path: '/guide/react/'
      },
      // {
      //   title: 'Vue 代码风格',
      //   path: '/guide/vue/'
      // }
  ],
    editLinkText: 'Edit on GitHub',
    plugins: ['@vuepress/back-to-top'],
    lastUpdated: 'Last Updated',
    repo: 'Wzb3422/Ncuhome-fe-style-guide',
    repoLabel: 'GitHub repo',
    docsRepo: 'Wzb3422/Ncuhome-fe-style-guide',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    smoothScroll: true
  }
}
