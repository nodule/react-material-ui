module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/DatePicker/CalendarYear": require('material-ui/DatePicker/CalendarYear')
    }
  },
  name: "CalendarYear",
  ports: {
    input: {
      displayDate: {
        type: "object",
        name: "displayDate"
      },
      maxDate: {
        type: "object",
        name: "maxDate"
      },
      minDate: {
        type: "object",
        name: "minDate"
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
      wordings: {
        type: "object",
        name: "wordings"
      }
    },
    output: {
      component: {
        title: "CalendarYear",
        type: "Component"
      },
      onTouchTapYear: {
        type: "any"
      }
    }
  }
}