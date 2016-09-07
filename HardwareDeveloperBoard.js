module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/developer-board": require('material-ui/svg-icons/hardware/developer-board')
    }
  },
  name: "HardwareDeveloperBoard",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareDeveloperBoard",
        type: "Component"
      }
    }
  }
}