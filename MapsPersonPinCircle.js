module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/person-pin-circle": require('material-ui/svg-icons/maps/person-pin-circle')
    }
  },
  name: "MapsPersonPinCircle",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsPersonPinCircle",
        type: "Component"
      }
    }
  }
}