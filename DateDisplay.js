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
        name: "DateTimeFormat"
      },
      disableYearSelection: {
        type: "boolean",
        name: "disableYearSelection",
        "default": false
      },
      locale: {
        type: "string",
        name: "locale"
      },
      mode: {
        type: "enum",
        name: "mode"
      },
      monthDaySelected: {
        type: "boolean",
        name: "monthDaySelected",
        "default": false
      },
      onTouchTapMonthDay: {
        title: "Enable onTouchTapMonthDay",
        type: "boolean",
        name: "onTouchTapMonthDay"
      },
      onTouchTapYear: {
        title: "Enable onTouchTapYear",
        type: "boolean",
        name: "onTouchTapYear"
      },
      selectedDate: {
        type: "object",
        name: "selectedDate"
      },
      style: {
        type: "object",
        name: "style"
      },
      weekCount: {
        type: "number",
        name: "weekCount",
        "default": ""
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