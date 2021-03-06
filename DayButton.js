module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/DatePicker/DayButton": require('material-ui/DatePicker/DayButton')
    }
  },
  name: "DayButton",
  ports: {
    input: {
      date: {
        type: "object",
        name: "date",
        required: false
      },
      disabled: {
        type: "boolean",
        name: "disabled",
        "default": false
      },
      onKeyboardFocus: {
        title: "Enable onKeyboardFocus",
        type: "boolean",
        name: "onKeyboardFocus",
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
      }
    },
    output: {
      component: {
        title: "DayButton",
        type: "Component"
      },
      onKeyboardFocus: {
        type: "any"
      },
      onTouchTap: {
        type: "any"
      }
    }
  }
}