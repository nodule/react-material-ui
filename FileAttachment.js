module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/file/attachment": require('material-ui/svg-icons/file/attachment')
    }
  },
  name: "FileAttachment",
  ports: {
    input: {},
    output: {
      component: {
        title: "FileAttachment",
        type: "Component"
      }
    }
  }
}