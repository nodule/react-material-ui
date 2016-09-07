module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/tram": require('material-ui/svg-icons/maps/tram')
    }
  },
  name: "MapsTram",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsTram",
        type: "Component"
      }
    }
  }
}