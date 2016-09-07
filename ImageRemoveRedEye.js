module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/remove-red-eye": require('material-ui/svg-icons/image/remove-red-eye')
    }
  },
  name: "ImageRemoveRedEye",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageRemoveRedEye",
        type: "Component"
      }
    }
  }
}