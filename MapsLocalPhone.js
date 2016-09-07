module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-phone": require('material-ui/svg-icons/maps/local-phone')
    }
  },
  name: "MapsLocalPhone",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalPhone",
        type: "Component"
      }
    }
  }
}