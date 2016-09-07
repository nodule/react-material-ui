module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/library-books": require('material-ui/svg-icons/av/library-books')
    }
  },
  name: "AvLibraryBooks",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvLibraryBooks",
        type: "Component"
      }
    }
  }
}