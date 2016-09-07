module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/perm-phone-msg": require('material-ui/svg-icons/action/perm-phone-msg')
    }
  },
  name: "ActionPermPhoneMsg",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionPermPhoneMsg",
        type: "Component"
      }
    }
  }
}