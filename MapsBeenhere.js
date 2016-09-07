module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/beenhere": require('material-ui/svg-icons/maps/beenhere')
    }
  },
  name: "MapsBeenhere",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsBeenhere",
        type: "Component"
      }
    }
  }
}