module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/insert-drive-file": require('material-ui/svg-icons/editor/insert-drive-file')
    }
  },
  name: "EditorInsertDriveFile",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorInsertDriveFile",
        type: "Component"
      }
    }
  }
}