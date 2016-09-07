module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/library-music": require('material-ui/svg-icons/av/library-music')
    }
  },
  name: "AvLibraryMusic",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvLibraryMusic",
        type: "Component"
      }
    }
  }
}