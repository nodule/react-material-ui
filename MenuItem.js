module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/MenuItem/MenuItem": require('material-ui/MenuItem/MenuItem')
    }
  },
  name: "MenuItem",
  ports: {
    input: {
      animation: {
        title: "Enable animation",
        type: "boolean",
        name: "animation",
        required: false
      },
      checked: {
        type: "boolean",
        name: "checked",
        "default": false
      },
      children: {
        type: "array",
        propType: "node",
        name: "children",
        required: false
      },
      desktop: {
        type: "boolean",
        name: "desktop",
        "default": false
      },
      disabled: {
        type: "boolean",
        name: "disabled",
        "default": false
      },
      focusState: {
        type: "enum",
        name: "focusState",
        "default": ""
      },
      innerDivStyle: {
        type: "object",
        name: "innerDivStyle",
        required: false
      },
      insetChildren: {
        type: "boolean",
        name: "insetChildren",
        "default": false
      },
      leftIcon: {
        type: "element",
        name: "leftIcon",
        required: false
      },
      menuItems: {
        type: "node",
        name: "menuItems",
        required: false
      },
      onTouchTap: {
        title: "Enable onTouchTap",
        type: "boolean",
        name: "onTouchTap",
        required: false
      },
      primaryText: {
        type: "node",
        name: "primaryText",
        required: false
      },
      rightIcon: {
        type: "element",
        name: "rightIcon",
        required: false
      },
      secondaryText: {
        type: "node",
        name: "secondaryText",
        required: false
      },
      style: {
        type: "object",
        name: "style",
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
        title: "MenuItem",
        type: "Component"
      },
      animation: {
        type: "any"
      },
      onTouchTap: {
        type: "any"
      }
    }
  }
}