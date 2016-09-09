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
        name: "label",
        required: false
      },
      style: {
        type: "object",
        name: "style",
        required: false
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