module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/perm-media": require('material-ui/svg-icons/action/perm-media')
    }
  },
  name: "ActionPermMedia",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionPermMedia",
        type: "Component"
      }
    }
  }
}