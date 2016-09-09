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
        name: "DateTimeFormat",
        required: true
      },
      displayDate: {
        type: "object",
        name: "displayDate",
        required: true
      },
      locale: {
        type: "string",
        name: "locale",
        required: true
      },
      nextMonth: {
        type: "boolean",
        name: "nextMonth",
        "default": false
      },
      onMonthChange: {
        title: "Enable onMonthChange",
        type: "boolean",
        name: "onMonthChange",
        required: false
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