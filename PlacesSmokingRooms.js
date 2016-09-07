module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/places/smoking-rooms": require('material-ui/svg-icons/places/smoking-rooms')
    }
  },
  name: "PlacesSmokingRooms",
  ports: {
    input: {},
    output: {
      component: {
        title: "PlacesSmokingRooms",
        type: "Component"
      }
    }
  }
}