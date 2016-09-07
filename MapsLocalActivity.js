module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-activity": require('material-ui/svg-icons/maps/local-activity')
    }
  },
  name: "MapsLocalActivity",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalActivity",
        type: "Component"
      }
    }
  }
}