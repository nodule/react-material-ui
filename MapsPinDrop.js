module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/pin-drop": require('material-ui/svg-icons/maps/pin-drop')
    }
  },
  name: "MapsPinDrop",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsPinDrop",
        type: "Component"
      }
    }
  }
}