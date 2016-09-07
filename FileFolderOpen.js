module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/file/folder-open": require('material-ui/svg-icons/file/folder-open')
    }
  },
  name: "FileFolderOpen",
  ports: {
    input: {},
    output: {
      component: {
        title: "FileFolderOpen",
        type: "Component"
      }
    }
  }
}