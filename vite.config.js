// import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
export default ({ command, mode }) => {
  console.log('-----command', command)
  const prodMock = true
  return {
    server: {
      port: 3010,
    },
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'mockPlugin',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && prodMock,
        //  这样可以控制关闭mock的时候不让mock打包到最终代码内
        injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
      }),
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: '/src',
        },
      ],
    },
  }
}
