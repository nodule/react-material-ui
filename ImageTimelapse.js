module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/timelapse": require('material-ui/svg-icons/image/timelapse')
    }
  },
  name: "ImageTimelapse",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageTimelapse",
        type: "Component"
      }
    }
  }
}