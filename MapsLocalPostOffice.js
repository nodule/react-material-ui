module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-post-office": require('material-ui/svg-icons/maps/local-post-office')
    }
  },
  name: "MapsLocalPostOffice",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalPostOffice",
        type: "Component"
      }
    }
  }
}