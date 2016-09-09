module.exports = {
  "type": "flow",
  "nodes": [
    {
      "id": "AutoComplete",
      "title": "AutoComplete",
      "ns": "react-material-ui",
      "name": "AutoComplete",
      "context": {
        "dataSource": [
          "aaaaa",
          "bbbbb",
          "ccccc"
        ]
      }
    },
    {
      "id": "Render",
      "title": "Render",
      "ns": "react",
      "name": "render"
    },
    {
      "id": "Selector",
      "title": "Selector",
      "ns": "dom",
      "name": "querySelector",
      "context": {
        "selector": "#app"
      }
    },
    {
      "id": "Log",
      "title": "Log",
      "ns": "console",
      "name": "log",
      "context": {
        "msg": "Rendered!"
      }
    },
    {
      "id": "Finished",
      "title": "Finished",
      "ns": "console",
      "name": "log",
      "context": {
        "msg": "AutoComplete finished!"
      }
    }
  ],
  "links": [
    {
      "source": {
        "id": "AutoComplete",
        "port": "component"
      },
      "target": {
        "id": "Render",
        "port": "element"
      },
      "metadata": {
        "title": "AutoComplete component -> element Render"
      }
    },
    {
      "source": {
        "id": "Selector",
        "port": "selection"
      },
      "target": {
        "id": "Render",
        "port": "container"
      },
      "metadata": {
        "title": "Selector selection -> container Render"
      }
    },
    {
      "source": {
        "id": "Selector",
        "port": "selection"
      },
      "target": {
        "id": "Log",
        "port": "msg"
      },
      "metadata": {
        "title": "Selector selection -> msg Log"
      }
    }
  ],
  "title": "AutoComplete Simple",
  "ns": "react-material-ui",
  "name": "defaultLayout",
  "id": "AutoComplete",
  "providers": {
    "@": {
      "url": "https://serve-chix.rhcloud.com/nodes/{ns}/{name}"
    }
  }
}