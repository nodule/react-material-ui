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
        name: "autoOk",
        required: false
      },
      displayDate: {
        type: "object",
        name: "displayDate",
        required: true
      },
      firstDayOfWeek: {
        type: "number",
        name: "firstDayOfWeek",
        required: false
      },
      maxDate: {
        type: "object",
        name: "maxDate",
        required: false
      },
      minDate: {
        type: "object",
        name: "minDate",
        required: false
      },
      onTouchTapDay: {
        title: "Enable onTouchTapDay",
        type: "boolean",
        name: "onTouchTapDay",
        required: false
      },
      selectedDate: {
        type: "object",
        name: "selectedDate",
        required: true
      },
      shouldDisableDate: {
        title: "Enable shouldDisableDate",
        type: "boolean",
        name: "shouldDisableDate",
        required: false
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