module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/videogame-asset": require('material-ui/svg-icons/hardware/videogame-asset')
    }
  },
  name: "HardwareVideogameAsset",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareVideogameAsset",
        type: "Component"
      }
    }
  }
}