module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/DatePicker/DateDisplay": require('material-ui/DatePicker/DateDisplay')
    }
  },
  name: "DateDisplay",
  ports: {
    input: {
      DateTimeFormat: {
        title: "Enable DateTimeFormat",
        type: "boolean",
        name: "DateTimeFormat",
        required: true
      },
      disableYearSelection: {
        type: "boolean",
        name: "disableYearSelection",
        "default": false
      },
      locale: {
        type: "string",
        name: "locale",
        required: true
      },
      mode: {
        type: "enum",
        name: "mode",
        required: false
      },
      monthDaySelected: {
        type: "boolean",
        name: "monthDaySelected",
        "default": false
      },
      onTouchTapMonthDay: {
        title: "Enable onTouchTapMonthDay",
        type: "boolean",
        name: "onTouchTapMonthDay",
        required: false
      },
      onTouchTapYear: {
        title: "Enable onTouchTapYear",
        type: "boolean",
        name: "onTouchTapYear",
        required: false
      },
      selectedDate: {
        type: "object",
        name: "selectedDate",
        required: true
      },
      style: {
        type: "object",
        name: "style",
        required: false
      },
      weekCount: {
        type: "number",
        name: "weekCount",
        "default": 0
      }
    },
    output: {
      component: {
        title: "DateDisplay",
        type: "Component"
      },
      DateTimeFormat: {
        type: "any"
      },
      onTouchTapMonthDay: {
        type: "any"
      },
      onTouchTapYear: {
        type: "any"
      }
    }
  }
}