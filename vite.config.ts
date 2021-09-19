import { UserConfigExport, ConfigEnv } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'

const alias = ['components', 'layout', 'views', 'store', 'scss', 'router', 'api', 'config', 'utils', 'hooks', 'images', 'serve', 'cache']
function generatorAlias(aliasSet) {
  return aliasSet.map(alias => ({
    find: `${alias}`,
    replacement: resolve(__dirname, `src/${alias}`)
  }))
}

// https://vitejs.dev/config/
export default (({ command }: ConfigEnv): UserConfigExport => {
  return {
    base: 'http://cdn-page.daxjgxx.com/',
    plugins: [
      reactRefresh(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: false,
      })
    ],
    resolve: {
      alias: [
        {
          find: '/compontents',
          replacement: resolve(__dirname, 'src/components')
        },
        ...generatorAlias(alias)
      ]
    },
    esbuild: {
      jsxInject: `import React from 'react'`
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:5000',
        },
      }}
  }
})
