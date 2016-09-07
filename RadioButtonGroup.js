module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/RadioButton/RadioButtonGroup": require('material-ui/RadioButton/RadioButtonGroup')
    }
  },
  name: "RadioButtonGroup",
  ports: {
    input: {
      children: {
        type: "node",
        name: "children"
      },
      className: {
        type: "string",
        name: "className"
      },
      defaultSelected: {
        type: "any",
        name: "defaultSelected"
      },
      labelPosition: {
        type: "enum",
        name: "labelPosition"
      },
      name: {
        type: "string",
        name: "name"
      },
      onChange: {
        title: "Enable onChange",
        type: "boolean",
        name: "onChange"
      },
      style: {
        type: "object",
        name: "style",
        "default": {}
      },
      valueSelected: {
        type: "any",
        name: "valueSelected"
      }
    },
    output: {
      component: {
        title: "RadioButtonGroup",
        type: "Component"
      },
      onChange: {
        type: "any"
      }
    }
  }
}