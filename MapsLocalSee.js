module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-see": require('material-ui/svg-icons/maps/local-see')
    }
  },
  name: "MapsLocalSee",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalSee",
        type: "Component"
      }
    }
  }
}