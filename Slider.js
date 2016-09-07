module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Slider/Slider": require('material-ui/Slider/Slider')
    }
  },
  name: "Slider",
  ports: {
    input: {
      axis: {
        type: "enum",
        name: "axis",
        "default": ""
      },
      defaultValue: {
        type: "custom",
        name: "defaultValue"
      },
      description: {
        type: "custom",
        name: "description"
      },
      disableFocusRipple: {
        type: "boolean",
        name: "disableFocusRipple",
        "default": false
      },
      disabled: {
        type: "boolean",
        name: "disabled",
        "default": false
      },
      error: {
        type: "custom",
        name: "error"
      },
      max: {
        type: "custom",
        name: "max",
        "default": null
      },
      min: {
        type: "custom",
        name: "min",
        "default": null
      },
      name: {
        type: "string",
        name: "name"
      },
      onBlur: {
        title: "Enable onBlur",
        type: "boolean",
        name: "onBlur"
      },
      onChange: {
        title: "Enable onChange",
        type: "boolean",
        name: "onChange"
      },
      onDragStart: {
        title: "Enable onDragStart",
        type: "boolean",
        name: "onDragStart"
      },
      onDragStop: {
        title: "Enable onDragStop",
        type: "boolean",
        name: "onDragStop"
      },
      onFocus: {
        title: "Enable onFocus",
        type: "boolean",
        name: "onFocus"
      },
      required: {
        type: "boolean",
        name: "required",
        "default": false
      },
      sliderStyle: {
        type: "object",
        name: "sliderStyle"
      },
      step: {
        type: "number",
        name: "step",
        "default": ""
      },
      style: {
        type: "object",
        name: "style",
        "default": {}
      },
      value: {
        type: "custom",
        name: "value"
      }
    },
    output: {
      component: {
        title: "Slider",
        type: "Component"
      },
      onBlur: {
        type: "any"
      },
      onChange: {
        type: "any"
      },
      onDragStart: {
        type: "any"
      },
      onDragStop: {
        type: "any"
      },
      onFocus: {
        type: "any"
      }
    }
  }
}