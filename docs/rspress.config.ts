import * as path from 'node:path';
import { pluginPreview } from '@rspress/plugin-preview';

export default {
  root: path.join(__dirname, 'docs'),
  title: 'My Element Components',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
  },
  plugins: [pluginPreview()],
  markdown: {
    codeBlock: {
      showLineNumbers: true,
      copy: true,
    },
  },
  resolve: {
    alias: {
      '@my-element/components': path.resolve(__dirname, '../packages/components'),
    },
  },
  external: ['@my-element/components'],
  buildConfig: {
    outDir: './doc_build',
    devServer: {
      port: 3000,
    },
  },
};
