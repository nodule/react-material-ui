module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/verified-user": require('material-ui/svg-icons/action/verified-user')
    }
  },
  name: "ActionVerifiedUser",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionVerifiedUser",
        type: "Component"
      }
    }
  }
}