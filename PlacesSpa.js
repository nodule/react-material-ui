module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/places/spa": require('material-ui/svg-icons/places/spa')
    }
  },
  name: "PlacesSpa",
  ports: {
    input: {},
    output: {
      component: {
        title: "PlacesSpa",
        type: "Component"
      }
    }
  }
}