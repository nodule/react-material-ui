module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/DatePicker/YearButton": require('material-ui/DatePicker/YearButton')
    }
  },
  name: "YearButton",
  ports: {
    input: {
      className: {
        type: "string",
        name: "className",
        required: false
      },
      onTouchTap: {
        title: "Enable onTouchTap",
        type: "boolean",
        name: "onTouchTap",
        required: false
      },
      selected: {
        type: "boolean",
        name: "selected",
        "default": false
      },
      year: {
        type: "number",
        name: "year",
        required: false
      }
    },
    output: {
      component: {
        title: "YearButton",
        type: "Component"
      },
      onTouchTap: {
        type: "any"
      }
    }
  }
}