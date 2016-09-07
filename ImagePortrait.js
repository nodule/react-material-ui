module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/portrait": require('material-ui/svg-icons/image/portrait')
    }
  },
  name: "ImagePortrait",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImagePortrait",
        type: "Component"
      }
    }
  }
}