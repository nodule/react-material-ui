module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/places/smoke-free": require('material-ui/svg-icons/places/smoke-free')
    }
  },
  name: "PlacesSmokeFree",
  ports: {
    input: {},
    output: {
      component: {
        title: "PlacesSmokeFree",
        type: "Component"
      }
    }
  }
}