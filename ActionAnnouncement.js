module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/announcement": require('material-ui/svg-icons/action/announcement')
    }
  },
  name: "ActionAnnouncement",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionAnnouncement",
        type: "Component"
      }
    }
  }
}