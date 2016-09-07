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
        name: "className"
      },
      onTouchTap: {
        title: "Enable onTouchTap",
        type: "boolean",
        name: "onTouchTap"
      },
      selected: {
        type: "boolean",
        name: "selected",
        "default": false
      },
      year: {
        type: "number",
        name: "year"
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