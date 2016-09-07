module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/file/folder-shared": require('material-ui/svg-icons/file/folder-shared')
    }
  },
  name: "FileFolderShared",
  ports: {
    input: {},
    output: {
      component: {
        title: "FileFolderShared",
        type: "Component"
      }
    }
  }
}