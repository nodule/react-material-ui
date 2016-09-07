module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/directions-bus": require('material-ui/svg-icons/maps/directions-bus')
    }
  },
  name: "MapsDirectionsBus",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsDirectionsBus",
        type: "Component"
      }
    }
  }
}