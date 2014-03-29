var selection = require("sdk/selection");
var widgets = require("sdk/widget");
var data = require("sdk/self").data;

var text = "";
function listener() {
  if (selection.isContiguous) {
    text = selection.text;
  }
}

selection.on("select", listener);

var widget = widgets.Widget({
  id: "cf-markdown",
  label: "Markdown",
  contentURL: data.url("icon.png"),
  onClick: function () {
    console.log(JSON.stringify(text));
  }
});
