module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/perm-identity": require('material-ui/svg-icons/action/perm-identity')
    }
  },
  name: "ActionPermIdentity",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionPermIdentity",
        type: "Component"
      }
    }
  }
}