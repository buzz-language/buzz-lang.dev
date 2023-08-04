import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: 'buzz',

  description:
    'A small/lightweight statically typed scripting language (in development)',

  head: [
    ['meta', { name: 'theme-color', content: '#221328' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ]
  ],

  markdown: {
    code: {
      lineNumbers: false
    }
  },

  theme: defaultTheme({
    repo: '',
    colorMode: 'auto',
    editLink: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    logo: 'logo.png',
    navbar: [
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'Reference',
        link: '/reference/'
      },
      {
        text: 'Github',
        link: 'https://github.com/buzz-language/buzz'
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/VnMdNSdpNV'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          children: [
            'building-installing',
            'syntax',
            'types',
            'functions',
            'enums',
            'control-flow',
            'null-safety',
            'objects',
            'protocols',
            'scope',
            'errors',
            'import-export',
            'fibers',
            'calling-native-code'
          ]
        }
      ],
      '/reference/': [
        {
          text: 'Reference',
          children: [
            {
              text: 'Standard Library',
              children: [
                '/reference/std/std',
                '/reference/std/buffer',
                '/reference/std/crypto',
                '/reference/std/debug',
                '/reference/std/fs',
                '/reference/std/gc',
                '/reference/std/io',
                '/reference/std/serialize',
                '/reference/std/json',
                '/reference/std/math',
                '/reference/std/os'
              ]
            },
            {
              text: 'Builtins',
              children: [
                '/reference/builtins/strings',
                '/reference/builtins/lists',
                '/reference/builtins/maps',
                '/reference/builtins/patterns',
                '/reference/builtins/fibers'
              ]
            },
            '/reference/api/'
          ]
        }
      ]
    }
  })
})
