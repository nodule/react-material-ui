module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/places/room-service": require('material-ui/svg-icons/places/room-service')
    }
  },
  name: "PlacesRoomService",
  ports: {
    input: {},
    output: {
      component: {
        title: "PlacesRoomService",
        type: "Component"
      }
    }
  }
}