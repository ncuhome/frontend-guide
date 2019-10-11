module.exports = {
  title: 'NCUHOME FE Guide',
  description: '',
  // head: [
  //   ['link', { rel: 'icon', href: '/logo.png' }]
  // ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'NCUHOME FE Guide',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'NCUHOME 前端指南'
    }
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: '关于我们', link: 'https://team.ncuos.com' },
    ],
    
    locales: {
      '/': {
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'About us', link: 'https://team.ncuos.com' },
        ],
        sidebar: [{
          path: '/guide/',
          title: 'JavaScript'
        }]
      },
      '/zh/': {
        label: '简体中文',
        ariaLabel: '选择语言',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/zh/guide/' },
          { text: '关于我们', link: 'https://team.ncuos.com' },
        ],
        sidebar: [{
          path: '/zh/guide/',
          title: 'JavaScript'
        }]
      }
    },
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
