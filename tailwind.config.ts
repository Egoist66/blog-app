export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      
  },
  corePlugins: {
    preflight: true // Reset styles
  },
  important: false, // Disable !important
  },
  plugins: []
}
