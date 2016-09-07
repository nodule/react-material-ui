module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/perm-contact-calendar": require('material-ui/svg-icons/action/perm-contact-calendar')
    }
  },
  name: "ActionPermContactCalendar",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionPermContactCalendar",
        type: "Component"
      }
    }
  }
}