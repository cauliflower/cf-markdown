var selection = require("sdk/selection");
var widgets = require("sdk/widget");
var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

var text = "";
function listener() {
  if (selection.isContiguous) {
    text = selection.text;
  }
};

selection.on("select", listener);

var widget = widgets.Widget({
  id: "cf-markdown",
  label: "Markdown",
  contentURL: data.url("icon.png"),
  onClick: function () {
    pageMod.PageMod({
      include: "*",
      contentScriptFile: [
        data.url("micromarkdown.min.js"),
        data.url("markdown-manager.js")
      ]
      onAttach: function(worker) {
        worker.port.emit("markdownSent", text);
        worker.port.on("markdownReceived", function(markdown) {
          tabs.open('data:text/html,' + markdown);
        });
      }
    });
  }
});
