module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/file/folder": require('material-ui/svg-icons/file/folder')
    }
  },
  name: "FileFolder",
  ports: {
    input: {},
    output: {
      component: {
        title: "FileFolder",
        type: "Component"
      }
    }
  }
}