module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/TextField/EnhancedTextarea": require('material-ui/TextField/EnhancedTextarea')
    }
  },
  name: "EnhancedTextarea",
  ports: {
    input: {
      defaultValue: {
        type: "any",
        name: "defaultValue"
      },
      disabled: {
        type: "boolean",
        name: "disabled"
      },
      onChange: {
        title: "Enable onChange",
        type: "boolean",
        name: "onChange"
      },
      onHeightChange: {
        title: "Enable onHeightChange",
        type: "boolean",
        name: "onHeightChange"
      },
      rows: {
        type: "number",
        name: "rows",
        "default": 0
      },
      rowsMax: {
        type: "number",
        name: "rowsMax"
      },
      shadowStyle: {
        type: "object",
        name: "shadowStyle"
      },
      style: {
        type: "object",
        name: "style"
      },
      textareaStyle: {
        type: "object",
        name: "textareaStyle"
      },
      value: {
        type: "string",
        name: "value"
      },
      valueLink: {
        type: "object",
        name: "valueLink"
      }
    },
    output: {
      component: {
        title: "EnhancedTextarea",
        type: "Component"
      },
      onChange: {
        type: "any"
      },
      onHeightChange: {
        type: "any"
      }
    }
  }
}