module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-printshop": require('material-ui/svg-icons/maps/local-printshop')
    }
  },
  name: "MapsLocalPrintshop",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalPrintshop",
        type: "Component"
      }
    }
  }
}