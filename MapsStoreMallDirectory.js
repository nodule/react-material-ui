module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/store-mall-directory": require('material-ui/svg-icons/maps/store-mall-directory')
    }
  },
  name: "MapsStoreMallDirectory",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsStoreMallDirectory",
        type: "Component"
      }
    }
  }
}