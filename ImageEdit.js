module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/edit": require('material-ui/svg-icons/image/edit')
    }
  },
  name: "ImageEdit",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageEdit",
        type: "Component"
      }
    }
  }
}