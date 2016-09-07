module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/file/create-new-folder": require('material-ui/svg-icons/file/create-new-folder')
    }
  },
  name: "FileCreateNewFolder",
  ports: {
    input: {},
    output: {
      component: {
        title: "FileCreateNewFolder",
        type: "Component"
      }
    }
  }
}