module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/library-add": require('material-ui/svg-icons/av/library-add')
    }
  },
  name: "AvLibraryAdd",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvLibraryAdd",
        type: "Component"
      }
    }
  }
}