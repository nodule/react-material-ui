module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/person-pin": require('material-ui/svg-icons/maps/person-pin')
    }
  },
  name: "MapsPersonPin",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsPersonPin",
        type: "Component"
      }
    }
  }
}