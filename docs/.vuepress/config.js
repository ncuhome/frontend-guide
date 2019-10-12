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
    sidebar: [{
      title: 'JavaScript',
      path: '/guide/js/'
    }, {
      title: 'TypeScript',
      path: '/guide/ts/'
    }, {
      title: 'React',
      path: '/guide/react/'
    }, {
      title: 'Vue',
      path: '/guide/vue/'
    }],
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
