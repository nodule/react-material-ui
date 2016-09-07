module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/DatePicker/CalendarMonth": require('material-ui/DatePicker/CalendarMonth')
    }
  },
  name: "CalendarMonth",
  ports: {
    input: {
      autoOk: {
        type: "boolean",
        name: "autoOk"
      },
      displayDate: {
        type: "object",
        name: "displayDate"
      },
      firstDayOfWeek: {
        type: "number",
        name: "firstDayOfWeek"
      },
      maxDate: {
        type: "object",
        name: "maxDate"
      },
      minDate: {
        type: "object",
        name: "minDate"
      },
      onTouchTapDay: {
        title: "Enable onTouchTapDay",
        type: "boolean",
        name: "onTouchTapDay"
      },
      selectedDate: {
        type: "object",
        name: "selectedDate"
      },
      shouldDisableDate: {
        title: "Enable shouldDisableDate",
        type: "boolean",
        name: "shouldDisableDate"
      }
    },
    output: {
      component: {
        title: "CalendarMonth",
        type: "Component"
      },
      onTouchTapDay: {
        type: "any"
      },
      shouldDisableDate: {
        type: "any"
      }
    }
  }
}