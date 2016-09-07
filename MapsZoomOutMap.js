module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/zoom-out-map": require('material-ui/svg-icons/maps/zoom-out-map')
    }
  },
  name: "MapsZoomOutMap",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsZoomOutMap",
        type: "Component"
      }
    }
  }
}