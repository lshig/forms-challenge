(function (window) {
  'use strict'
  // module pattern

  var Controller = function (Model, View) {
    // save private copy of mode and view data
    var data = {
      model: Model,
      view: View
    }

    // start and handle timer events, durations in seconds
    var duration = 20
    var timer = duration
    var handleTimer = function () {
      if (timer >= 0) {
        var minutes = parseInt(timer / 60, 10)
        var seconds = parseInt(timer % 60, 10)
        minutes = minutes < 10
          ? '0' + minutes
          : minutes
        seconds = seconds < 10
          ? '0' + seconds
          : seconds
        data.view.timeRender(minutes + ':' + seconds)
        timer--
      } else {
        submitForm('Time\'s up!')
      }
    }
    var loadedTimer = setInterval(handleTimer, 1000)

    // handle if user wants to autofill the form
    var autofillForm = function () {
      data.model.set()
      data.view.fillInputsRender(data.model.get())
    }

    // handle if user wants to repeat form again
    var repeatForm = function () {
      data.model.reset()
      data.view.fillInputsRender(data.model.get())
      data.view.timeRender('Another One!')
      timer = duration
      loadedTimer = setInterval(handleTimer, 1000)
    }

    // handle if user wants to submit the form
    var submitForm = function (timeString) {
      clearInterval(loadedTimer)
      data.model.set('sessionDuration', (duration - timer - 1).toString())
      data.model.set('dateTime', new Date().toISOString())
      data.view.timeRender(timeString)
      data.view.summaryRender(data.model.get())
      // TODO: AJAX or store to localStorage/sessionStorage
    }

    // handle as user changes form inputs
    var updateFormContent = function (key, value) {
      data.model.set(key, value)
    }

    // return public controller method
    return {
      load: function () {
        data.view.bind('autofillForm', autofillForm)
        data.view.bind('repeatForm', repeatForm)
        data.view.bind('submitForm', submitForm)
        data.view.bind('updateCheckBoxesContent', updateFormContent)
        data.view.bind('updateSelectContent', updateFormContent)
        data.view.bind('updateRadiosContent', updateFormContent)
        data.view.bind('updateTextareaContent', updateFormContent)
      }
    }
  }
  window.app = window.app || {}
  window.app.Controller = Controller
})(window)
