module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/terrain": require('material-ui/svg-icons/maps/terrain')
    }
  },
  name: "MapsTerrain",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsTerrain",
        type: "Component"
      }
    }
  }
}