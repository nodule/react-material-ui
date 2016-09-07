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
        name: "animation"
      },
      autoWidth: {
        type: "boolean",
        name: "autoWidth",
        "default": false
      },
      children: {
        type: "node",
        name: "children"
      },
      className: {
        type: "string",
        name: "className"
      },
      disabled: {
        type: "boolean",
        name: "disabled",
        "default": false
      },
      iconStyle: {
        type: "object",
        name: "iconStyle"
      },
      labelStyle: {
        type: "object",
        name: "labelStyle"
      },
      listStyle: {
        type: "object",
        name: "listStyle"
      },
      maxHeight: {
        type: "number",
        name: "maxHeight",
        "default": ""
      },
      menuStyle: {
        type: "object",
        name: "menuStyle"
      },
      onChange: {
        title: "Enable onChange",
        type: "boolean",
        name: "onChange"
      },
      openImmediately: {
        type: "boolean",
        name: "openImmediately",
        "default": false
      },
      style: {
        type: "object",
        name: "style"
      },
      underlineStyle: {
        type: "object",
        name: "underlineStyle"
      },
      value: {
        type: "any",
        name: "value"
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