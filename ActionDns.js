module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/dns": require('material-ui/svg-icons/action/dns')
    }
  },
  name: "ActionDns",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionDns",
        type: "Component"
      }
    }
  }
}