module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/List/ListItem": require('material-ui/List/ListItem')
    }
  },
  name: "ListItem",
  ports: {
    input: {
      autoGenerateNestedIndicator: {
        type: "boolean",
        name: "autoGenerateNestedIndicator",
        "default": false
      },
      children: {
        type: "node",
        name: "children",
        required: false
      },
      disableKeyboardFocus: {
        type: "boolean",
        name: "disableKeyboardFocus",
        "default": false
      },
      disabled: {
        type: "boolean",
        name: "disabled",
        "default": false
      },
      initiallyOpen: {
        type: "boolean",
        name: "initiallyOpen",
        "default": false
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
      leftAvatar: {
        type: "element",
        name: "leftAvatar",
        required: false
      },
      leftCheckbox: {
        type: "element",
        name: "leftCheckbox",
        required: false
      },
      leftIcon: {
        type: "element",
        name: "leftIcon",
        required: false
      },
      nestedItems: {
        type: "arrayOf",
        name: "nestedItems",
        "default": null
      },
      nestedLevel: {
        type: "number",
        name: "nestedLevel",
        "default": 0
      },
      nestedListStyle: {
        type: "object",
        name: "nestedListStyle",
        required: false
      },
      onKeyboardFocus: {
        title: "Enable onKeyboardFocus",
        type: "boolean",
        name: "onKeyboardFocus",
        "default": false
      },
      onMouseEnter: {
        title: "Enable onMouseEnter",
        type: "boolean",
        name: "onMouseEnter",
        "default": false
      },
      onMouseLeave: {
        title: "Enable onMouseLeave",
        type: "boolean",
        name: "onMouseLeave",
        "default": false
      },
      onNestedListToggle: {
        title: "Enable onNestedListToggle",
        type: "boolean",
        name: "onNestedListToggle",
        "default": false
      },
      onTouchStart: {
        title: "Enable onTouchStart",
        type: "boolean",
        name: "onTouchStart",
        "default": false
      },
      onTouchTap: {
        title: "Enable onTouchTap",
        type: "boolean",
        name: "onTouchTap",
        required: false
      },
      open: {
        type: "boolean",
        name: "open",
        "default": false
      },
      primaryText: {
        type: "node",
        name: "primaryText",
        required: false
      },
      primaryTogglesNestedList: {
        type: "boolean",
        name: "primaryTogglesNestedList",
        "default": false
      },
      rightAvatar: {
        type: "element",
        name: "rightAvatar",
        required: false
      },
      rightIcon: {
        type: "element",
        name: "rightIcon",
        required: false
      },
      rightIconButton: {
        type: "element",
        name: "rightIconButton",
        required: false
      },
      rightToggle: {
        type: "element",
        name: "rightToggle",
        required: false
      },
      secondaryText: {
        type: "node",
        name: "secondaryText",
        required: false
      },
      secondaryTextLines: {
        type: "enum",
        name: "secondaryTextLines",
        "default": ""
      },
      style: {
        type: "object",
        name: "style",
        required: false
      }
    },
    output: {
      component: {
        title: "ListItem",
        type: "Component"
      },
      onKeyboardFocus: {
        type: "any"
      },
      onMouseEnter: {
        type: "any"
      },
      onMouseLeave: {
        type: "any"
      },
      onNestedListToggle: {
        type: "any"
      },
      onTouchStart: {
        type: "any"
      },
      onTouchTap: {
        type: "any"
      }
    }
  }
}