(function (app) {
  'use strict'
  // prototype pattern

  var FormsApp = function (id) {
    this.template = new app.Template()
    this.model = new app.Model()
    this.view = new app.View(this.template)
    this.controller = new app.Controller(this.model, this.view)
    this.controller.load()
  }
  var formsApp = new FormsApp()
  console.log(formsApp)
})(window.app)
