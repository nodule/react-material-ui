module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/DropDownMenu/DropDownMenu": require('material-ui/DropDownMenu/DropDownMenu')
    }
  },
  name: "DropDownMenu",
  ports: {
    input: {
      animated: {
        type: "boolean",
        name: "animated",
        "default": false
      },
      animation: {
        title: "Enable animation",
        type: "boolean",
        name: "animation",
        required: false
      },
      autoWidth: {
        type: "boolean",
        name: "autoWidth",
        "default": false
      },
      children: {
        type: "array",
        propType: "node",
        name: "children",
        required: false
      },
      className: {
        type: "string",
        name: "className",
        required: false
      },
      disabled: {
        type: "boolean",
        name: "disabled",
        "default": false
      },
      iconStyle: {
        type: "object",
        name: "iconStyle",
        required: false
      },
      labelStyle: {
        type: "object",
        name: "labelStyle",
        required: false
      },
      listStyle: {
        type: "object",
        name: "listStyle",
        required: false
      },
      maxHeight: {
        type: "number",
        name: "maxHeight",
        "default": 0
      },
      menuStyle: {
        type: "object",
        name: "menuStyle",
        required: false
      },
      onChange: {
        title: "Enable onChange",
        type: "boolean",
        name: "onChange",
        required: false
      },
      openImmediately: {
        type: "boolean",
        name: "openImmediately",
        "default": false
      },
      style: {
        type: "object",
        name: "style",
        required: false
      },
      underlineStyle: {
        type: "object",
        name: "underlineStyle",
        required: false
      },
      value: {
        type: "any",
        name: "value",
        required: false
      }
    },
    output: {
      component: {
        title: "DropDownMenu",
        type: "Component"
      },
      animation: {
        type: "any"
      },
      onChange: {
        type: "any"
      }
    }
  }
}