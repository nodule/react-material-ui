module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/FlatButton/FlatButtonLabel": require('material-ui/FlatButton/FlatButtonLabel')
    }
  },
  name: "FlatButtonLabel",
  ports: {
    input: {
      label: {
        type: "node",
        name: "label"
      },
      style: {
        type: "object",
        name: "style"
      }
    },
    output: {
      component: {
        title: "FlatButtonLabel",
        type: "Component"
      }
    }
  }
}