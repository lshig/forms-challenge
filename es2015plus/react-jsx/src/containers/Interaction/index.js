import React, {Component} from 'react'
import Button from '../../components/Button'
import CheckboxesContent from '../../components/CheckboxesContent'
import DropdownsContent from '../../components/DropdownsContent'
import RadiosContent from '../../components/RadiosContent'
import TextareasContent from '../../components/TextareasContent'
import {
  duration,
  tabContentMap,
  matchContentToTab,
  setAttributeFromModel,
  setView,
  transformData
} from './utils'
export default class Interaction extends Component {
  constructor() {
    super()
    this.state = {
      activeTabId: 'checkboxTab',
      activeContentId: 'checkboxContent',
      activeTime: true,
      comments: '',
      dateTime: '',
      day: '',
      firstName: '',
      intervalId: setInterval(this.handleTimer.bind(this), 1000),
      lastName: '',
      month: '',
      sessionDuration: '',
      timeOfDay: '',
      timer: duration,
      timerStatus: 'Begin!',
      weekday: [],
      year: ''
    }
    this.handleAutofillClick = this.handleAutofillClick.bind(this)
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this)
    this.handleDirectionClick = this.handleDirectionClick.bind(this)
    this.handleInputEvent = this.handleInputEvent.bind(this)
    this.handleRepeatClick = this.handleRepeatClick.bind(this)
    this.handleSubmitClick = this.handleSubmitClick.bind(this)
    this.handleTabClick = this.handleTabClick.bind(this)
  }
  handleAutofillClick () {
    const autofillModel = {
      comments: 'Hello, World!',
      firstName: 'Jane',
      lastName: 'Doe',
      day: '14',
      month: '3',
      timeOfDay: 'Late Night',
      weekday: [
        'Sunday', 'Thursday', 'Friday', 'Saturday'
      ],
      year: '2015'
    }
    setView(autofillModel)
    this.setState(autofillModel)
  }
  handleCheckboxClick (event) {
    const weekdayCheckboxes = document.getElementsByName('weekday')
    var filterResult = []
    for (var f = 0; f < weekdayCheckboxes.length; f++) {
      if (weekdayCheckboxes[f].checked) {
        filterResult.push(weekdayCheckboxes[f].value)
      }
    }
    this.setState({
      weekday: filterResult
    })
  }
  handleDirectionClick (event, previousFlag) {
    const parentContentId = event.target.parentNode.parentNode.id
    const tabContentObj = matchContentToTab(parentContentId, previousFlag)
    this.setState({
      activeTabId: tabContentObj.tabId,
      activeContentId: tabContentObj.contentId
    })
  }
  handleInputEvent (event) {
    let currentStateObject = {}
    currentStateObject[event.target.name] = event.target.value
    this.setState(currentStateObject)
  }
  handleRepeatClick () {
    const repeatModel = {
      activeTabId: 'checkboxTab',
      activeContentId: 'checkboxContent',
      activeTime: true,
      comments: '',
      dateTime: '',
      day: '',
      firstName: '',
      intervalId: setInterval(this.handleTimer.bind(this), 1000),
      lastName: '',
      month: '',
      sessionDuration: '',
      timeOfDay: '',
      timer: duration,
      timerStatus: 'Another One!',
      weekday: [],
      year: ''
    }
    setView(repeatModel)
    this.setState(repeatModel)
  }
  handleSubmitClick () {
    this.setState({
      activeTime: false,
      intervalId: clearInterval(this.state.intervalId),
      dateTime: new Date().toISOString(),
      sessionDuration: (duration - this.state.timer - 1).toString(),
      timerStatus: 'Thanks for your submission!'
    })
  }
  handleTabClick (event) {
    const tabId = event.target.id
    const contentId = (tabId) => {
      let result = tabContentMap.filter(tab => {
        return tab.tabId === tabId
      })
      return result[0].contentId
    }
    this.setState({
      activeTabId: tabId,
      activeContentId: contentId(tabId)
    })
  }
  handleTimer () {
    if (this.state.timer < 0) {
      this.setState({
        activeTime: false,
        dateTime: new Date().toISOString(),
        intervalId: clearInterval(this.state.intervalId),
        sessionDuration: duration.toString(),
        timerStatus: 'Time\'s up!'
      })
    } else {
      let minutes = parseInt(this.state.timer / 60, 10)
      let seconds = parseInt(this.state.timer % 60, 10)
      minutes = minutes < 10
        ? '0' + minutes
        : minutes
      seconds = seconds < 10
        ? '0' + seconds
        : seconds
      this.setState({
        timerStatus: minutes + ':' + seconds,
        timer: this.state.timer - 1
      })
    }
  }
  render () {
    const showResults = this.state.activeTime ? 'content__hide' : ''
    const showInteraction = this.state.activeTime ? '' : 'content__hide'
    const showContent = (contentId) => {
      return this.state.activeContentId === contentId ? '' : 'content__hide'
    }
    const highlightTab = (tabId) => {
      return this.state.activeTabId === tabId ? ' nav--tab__selected' : ''
    }
    return (
      <div>
        <section id='time-display'>
          <div className='row'>
            <h1 id='timer'>{this.state.timerStatus}</h1>
          </div>
        </section>
        <section id='interaction' className={showInteraction}>
          <nav>
            {tabContentMap.map(tab =>
              <Button
                key={tab.tabId}
                className={`nav--tab ${highlightTab(tab.tabId)}`}
                id={tab.tabId}
                onClick={this.handleTabClick}
                text={tab.tabText} />
            )}
          </nav>
          <form>
            <CheckboxesContent
              className={showContent('checkboxContent')}
              id='checkboxContent'
              onCheckboxClick={this.handleCheckboxClick}
              onAutofillClick={this.handleAutofillClick}
              onNextClick={(e) => this.handleDirectionClick(e, false)} />
            <DropdownsContent
              className={showContent('selectContent')}
              id='selectContent'
              onSelectChange={this.handleInputEvent}
              onNextClick={(e) => this.handleDirectionClick(e, false)}
              onPreviousClick={(e) => this.handleDirectionClick(e, true)} />
            <RadiosContent
              className={showContent('radioContent')}
              id='radioContent'
              onRadioClick={this.handleInputEvent}
              onNextClick={(e) => this.handleDirectionClick(e, false)}
              onPreviousClick={(e) => this.handleDirectionClick(e, true)} />
            <TextareasContent
              className={showContent('textareaContent')}
              id='textareaContent'
              onTextareaChange={this.handleInputEvent}
              onPreviousClick={(e) => this.handleDirectionClick(e, true)}
              onSubmitClick={this.handleSubmitClick} />
          </form>
        </section>
        <section id='results'
          className={showResults}>
          <div className='row'>
            <h3 className='user-summary'>JSON Results</h3>
            <pre id='userSummary'>{JSON.stringify(transformData(this.state))}</pre>
          </div>
          <div className='row'>
            <Button
              className='repeat'
              onClick={this.handleRepeatClick}
              id='repeatButton'
              text='Repeat' />
          </div>
        </section>
      </div>
    )
  }
}
