import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default {
  plugins: [
    reactRefresh({
      parserPlugins: ['classProperties', 'classPrivateProperties']
    })
  ]
}
