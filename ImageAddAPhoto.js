module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/add-a-photo": require('material-ui/svg-icons/image/add-a-photo')
    }
  },
  name: "ImageAddAPhoto",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageAddAPhoto",
        type: "Component"
      }
    }
  }
}