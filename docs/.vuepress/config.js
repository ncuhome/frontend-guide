module.exports = {
  title: 'NCUHOME FE Guide',
  // description: '',
  head: [
    ['link', { rel: 'icon', href: 'https://ncustatic.ncuos.com/index/1570754776734.logo.png' }]
  ],
  base: '/frontend-guide/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'About us', link: 'https://team.ncuos.com' },
    ],
    sidebar: [
      {
        title: '命名规范',
        path: '/guide/naming/'
      },
      {
        title: 'CSS 代码风格',
        path: '/guide/css/'
      },
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
      // },
      
  ],
    editLinkText: 'Edit on GitHub',
    plugins: ['@vuepress/back-to-top'],
    lastUpdated: 'Last Updated',
    repo: 'ncuhome/frontend-guide',
    repoLabel: 'GitHub',
    docsRepo: 'ncuhome/frontend-guide',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    smoothScroll: true
  }
}
