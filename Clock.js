module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/TimePicker/Clock": require('material-ui/TimePicker/Clock')
    }
  },
  name: "Clock",
  ports: {
    input: {
      format: {
        type: "enum",
        name: "format"
      },
      initialTime: {
        type: "object",
        name: "initialTime",
        "default": {}
      },
      onChangeHours: {
        title: "Enable onChangeHours",
        type: "boolean",
        name: "onChangeHours"
      },
      onChangeMinutes: {
        title: "Enable onChangeMinutes",
        type: "boolean",
        name: "onChangeMinutes"
      }
    },
    output: {
      component: {
        title: "Clock",
        type: "Component"
      },
      onChangeHours: {
        type: "any"
      },
      onChangeMinutes: {
        type: "any"
      }
    }
  }
}