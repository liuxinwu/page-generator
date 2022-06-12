/*
 * @Author: xinnwuliu 13242420347@163.com
 * @Date: 2021-09-25 22:04:09
 * @LastEditors: xinnwuliu 13242420347@163.com
 * @LastEditTime: 2022-06-12 12:09:15
 * @FilePath: /page-generator/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { UserConfigExport, ConfigEnv } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'

const alias = [
  'components',
  'layout',
  'views',
  'store',
  'scss',
  'router',
  'api',
  'config',
  'utils',
  'hooks',
  'images',
  'serve',
  'cache',
  'types',
]
function generatorAlias(aliasSet) {
  return aliasSet.map((alias) => ({
    find: `${alias}`,
    replacement: resolve(__dirname, `src/${alias}`),
  }))
}

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    base: 'http://cdn-page.daxjgxx.com/',
    build: {
      outDir: 'build2',
    },
    plugins: [
      reactRefresh(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: false,
      }),
    ],
    resolve: {
      alias: [
        {
          find: '/compontents',
          replacement: resolve(__dirname, 'src/components'),
        },
        ...generatorAlias(alias),
      ],
    },
    esbuild: {
      jsxInject: "import React from 'react'",
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:5000',
        },
      },
    },
  }
}
