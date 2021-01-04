const menu = [
  {
    name: 'Products',
    sublinks: [
      {
        name: 'App',
        link: 'https://app.kwikswap.org/#/',
        description: 'Swap tokens and supply liquidity'
      },
      {
        name: 'Analytics',
        link: 'https://info.kwikswap.org/',
        description: 'Kwikswap analytics and historical data'
      },
      {
        name: 'Token Lists',
        link: 'https://tokens.kwikswap.org/',
        description: 'Standard Ethereum token list standard.'
      },
      {
        name: 'KwikHawk',
        link: 'https://kwiskwap.org/',
        description: 'Something Interesting Coming Soon'
      },
    ]
  },
  {
    name: 'Developers',
    sublinks: [
      {
        name: 'Documentation',
        link: '/docs/v1' //This was v2
      },
      { name: 'GitHub', link: 'https://github.com/kwikswap' },
      { name: 'Whitepaper', link: '/whitepaper.pdf' },
      { name: 'Bug Bounty', link: '/bug-bounty' }
    ]
  },
  {
    name: 'Community',
    sublinks: [
      { name: 'Telegram', link: 'https://t.me/kwikswap' },
      { name: 'Twitter', link: 'https://twitter.com/kwikswapdex' },
      { name: 'Reddit', link: 'https://reddit.com/r/kwikswap' },
      { name: 'Github', link: 'https://gitub.com/kwikswap' },
      { name: 'Medium', link: 'https://www.medium.com/@kwikswap' }
    ]
  },
  {
    name: 'About',
    sublinks: [
      {
        name: 'Blog',
        link: '/blog'
      },
      {
        name: 'Info',
        link: '/about'
      },
      {
        name: 'FAQ',
        link: 'docs/v1/faq'
      },
      {
        name: 'Jobs',
        link: '/about#jobs'
      },
    ]
  }
]

module.exports = menu
