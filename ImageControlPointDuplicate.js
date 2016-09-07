module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/control-point-duplicate": require('material-ui/svg-icons/image/control-point-duplicate')
    }
  },
  name: "ImageControlPointDuplicate",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageControlPointDuplicate",
        type: "Component"
      }
    }
  }
}