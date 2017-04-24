(function (window) {
  'use strict'
  // module pattern

  var Model = function () {
    // initialize private model data
    var data = {
      comments: '',
      firstName: '',
      lastName: '',
      dateTime: '',
      day: '',
      month: '',
      sessionDuration: '',
      timeOfDay: '',
      weekday: [],
      year: ''
    }

    // return public model methods
    return {
      get: function (key) {
        return key
          ? data[key]
          : data
      },
      reset: function () {
        data = {
          comments: '',
          firstName: '',
          lastName: '',
          dateTime: '',
          day: '',
          month: '',
          sessionDuration: '',
          timeOfDay: '',
          weekday: [],
          year: ''
        }
      },
      set: function (key, value) {
        if (key && value) {
          data[key] = value
        } else {
          data = {
            comments: 'Hello, World!',
            firstName: 'Jane',
            lastName: 'Doe',
            dateTime: '',
            day: '14',
            month: '3',
            sessionDuration: '',
            timeOfDay: 'Late Night',
            weekday: [
              'Sunday', 'Thursday', 'Friday', 'Saturday'
            ],
            year: '2015'
          }
        }
      }
    }
  }
  window.app = window.app || {}
  window.app.Model = Model
})(window)
