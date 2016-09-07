module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-laundry-service": require('material-ui/svg-icons/maps/local-laundry-service')
    }
  },
  name: "MapsLocalLaundryService",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalLaundryService",
        type: "Component"
      }
    }
  }
}