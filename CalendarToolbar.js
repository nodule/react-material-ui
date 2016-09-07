module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/DatePicker/CalendarToolbar": require('material-ui/DatePicker/CalendarToolbar')
    }
  },
  name: "CalendarToolbar",
  ports: {
    input: {
      DateTimeFormat: {
        title: "Enable DateTimeFormat",
        type: "boolean",
        name: "DateTimeFormat"
      },
      displayDate: {
        type: "object",
        name: "displayDate"
      },
      locale: {
        type: "string",
        name: "locale"
      },
      nextMonth: {
        type: "boolean",
        name: "nextMonth",
        "default": false
      },
      onMonthChange: {
        title: "Enable onMonthChange",
        type: "boolean",
        name: "onMonthChange"
      },
      prevMonth: {
        type: "boolean",
        name: "prevMonth",
        "default": false
      }
    },
    output: {
      component: {
        title: "CalendarToolbar",
        type: "Component"
      },
      DateTimeFormat: {
        type: "any"
      },
      onMonthChange: {
        type: "any"
      }
    }
  }
}