module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/looks-one": require('material-ui/svg-icons/image/looks-one')
    }
  },
  name: "ImageLooksOne",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageLooksOne",
        type: "Component"
      }
    }
  }
}