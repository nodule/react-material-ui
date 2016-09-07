module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/volume-down": require('material-ui/svg-icons/av/volume-down')
    }
  },
  name: "AvVolumeDown",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvVolumeDown",
        type: "Component"
      }
    }
  }
}