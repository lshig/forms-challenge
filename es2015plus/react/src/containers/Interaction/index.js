import React, { Component } from 'react';
import Button from '../../components/Button';
import CheckboxesContent from '../../components/CheckboxesContent';
import SelectContent from '../../components/SelectContent';
import RadiosContent from '../../components/RadiosContent';
import TextareasContent from '../../components/TextareasContent';
import {
  duration,
  tabContentMap,
  matchContentToTab,
  setView,
  transformData
} from './utils';

export default class Interaction extends Component {
  constructor() {
    super();
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
    };
    this.handleAutofillClick = this.handleAutofillClick.bind(this);
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    this.handleDirectionClick = this.handleDirectionClick.bind(this);
    this.handleInputEvent = this.handleInputEvent.bind(this);
    this.handleRepeatClick = this.handleRepeatClick.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleAutofillClick() {
    const autofillModel = {
      comments: 'Hello, World!',
      firstName: 'Jane',
      lastName: 'Doe',
      day: '14',
      month: '3',
      timeOfDay: 'Late Night',
      weekday: ['Sunday', 'Thursday', 'Friday', 'Saturday'],
      year: '2015'
    };
    setView(autofillModel);
    this.setState(autofillModel);
  }

  handleCheckboxClick() {
    const weekdayCheckboxes = document.getElementsByName('weekday');
    const filterResult = [];
    for (let f = 0; f < weekdayCheckboxes.length; f++) {
      if (weekdayCheckboxes[f].checked) {
        filterResult.push(weekdayCheckboxes[f].value);
      }
    }
    this.setState({
      weekday: filterResult
    });
  }

  handleDirectionClick(event, previousFlag) {
    const parentContentId = event.target.parentNode.parentNode.id;
    const tabContentObj = matchContentToTab(parentContentId, previousFlag);
    this.setState({
      activeTabId: tabContentObj.tabId,
      activeContentId: tabContentObj.contentId
    });
  }

  handleInputEvent(event) {
    const currentStateObject = {};
    currentStateObject[event.target.name] = event.target.value;
    this.setState(currentStateObject);
  }

  handleRepeatClick() {
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
    };
    setView(repeatModel);
    this.setState(repeatModel);
  }

  handleSubmitClick() {
    this.setState({
      activeTime: false,
      intervalId: clearInterval(this.state.intervalId),
      dateTime: new Date().toISOString(),
      sessionDuration: (duration - this.state.timer - 1).toString(),
      timerStatus: 'Thanks for your submission!'
    });
  }

  handleTabClick(event) {
    const tabId = event.target.id;
    const contentId = (tabId) => {
      const result = tabContentMap.filter((tab) => {
        return tab.tabId === tabId;
      });
      return result[0].contentId;
    };
    this.setState({
      activeTabId: tabId,
      activeContentId: contentId(tabId)
    });
  }

  handleTimer() {
    if (this.state.timer < 0) {
      this.setState({
        activeTime: false,
        dateTime: new Date().toISOString(),
        intervalId: clearInterval(this.state.intervalId),
        sessionDuration: duration.toString(),
        timerStatus: "Time's up!"
      });
    } else {
      let minutes = parseInt(this.state.timer / 60, 10);
      let seconds = parseInt(this.state.timer % 60, 10);
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      this.setState({
        timerStatus: minutes + ':' + seconds,
        timer: this.state.timer - 1
      });
    }
  }

  render() {
    const createOptionsList = (startIndex, endIndex) => {
      const results = [];
      for (let i = startIndex; i <= endIndex; i++) {
        results.push(i);
      }
      return results;
    };
    const checkboxOptions = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    const selectOptions = [
      {
        label: 'Month',
        name: 'month',
        options: createOptionsList(1, 12)
      },
      {
        label: 'Day',
        name: 'day',
        options: createOptionsList(1, 31)
      },
      {
        label: 'Year',
        name: 'year',
        options: createOptionsList(2000, 2018)
      }
    ];
    const radioOptions = [
      {
        label: '5AM - 11:59AM',
        value: 'Morning'
      },
      {
        label: '12PM - 12:59PM',
        value: 'Noon'
      },
      {
        label: '1PM - 4:59PM',
        value: 'Afternoon'
      },
      {
        label: '5PM - 7:59AM',
        value: 'Evening'
      },
      {
        label: '8PM - 11:59AM',
        value: 'Night'
      },
      {
        label: '12AM - 12:59AM',
        value: 'Midnight'
      },
      {
        label: '1AM - 4:59AM',
        value: 'Late Night'
      }
    ];
    const textareaOptions = [
      {
        className: 'textarea__small',
        label: 'First Name',
        name: 'firstName',
        placeholder: 'Jane'
      },
      {
        className: 'textarea__small',
        label: 'Last Name',
        name: 'lastName',
        placeholder: 'Doe'
      },
      {
        className: 'textarea__large',
        label: 'Comments',
        name: 'comments',
        placeholder: 'Hello, World!'
      }
    ];
    const showResults = this.state.activeTime ? 'content__hide' : '';
    const showInteraction = this.state.activeTime ? '' : 'content__hide';
    const showContent = (contentId) => {
      return this.state.activeContentId === contentId ? '' : 'content__hide';
    };
    const highlightTab = (tabId) => {
      return this.state.activeTabId === tabId ? ' nav--tab__selected' : '';
    };
    return (
      <div>
        <section id="time-display">
          <div className="row">
            <h1 id="timer">{this.state.timerStatus}</h1>
          </div>
        </section>
        <section id="interaction" className={showInteraction}>
          <nav>
            {tabContentMap.map((tab) => (
              <Button
                key={tab.tabId}
                className={`nav--tab ${highlightTab(tab.tabId)}`}
                id={tab.tabId}
                onClick={this.handleTabClick}
                text={tab.tabText}
              />
            ))}
          </nav>
          <form>
            <CheckboxesContent
              checkboxOptions={checkboxOptions}
              className={showContent('checkboxContent')}
              id="checkboxContent"
              onCheckboxClick={this.handleCheckboxClick}
              onAutofillClick={this.handleAutofillClick}
              onNextClick={(event) => this.handleDirectionClick(event, false)}
            />
            <SelectContent
              className={showContent('selectContent')}
              id="selectContent"
              onSelectChange={this.handleInputEvent}
              onNextClick={(event) => this.handleDirectionClick(event, false)}
              onPreviousClick={(event) =>
                this.handleDirectionClick(event, true)
              }
              selectOptions={selectOptions}
            />
            <RadiosContent
              className={showContent('radioContent')}
              id="radioContent"
              onRadioClick={this.handleInputEvent}
              onNextClick={(event) => this.handleDirectionClick(event, false)}
              onPreviousClick={(event) =>
                this.handleDirectionClick(event, true)
              }
              radioOptions={radioOptions}
            />
            <TextareasContent
              className={showContent('textareaContent')}
              id="textareaContent"
              onTextareaChange={this.handleInputEvent}
              onPreviousClick={(event) =>
                this.handleDirectionClick(event, true)
              }
              onSubmitClick={this.handleSubmitClick}
              textareaOptions={textareaOptions}
            />
          </form>
        </section>
        <section id="results" className={showResults}>
          <div className="row">
            <h3 className="user-summary">JSON Results</h3>
            <pre id="userSummary">
              {JSON.stringify(transformData(this.state))}
            </pre>
          </div>
          <div className="row">
            <Button
              className="repeat"
              onClick={this.handleRepeatClick}
              id="repeatButton"
              text="Repeat"
            />
          </div>
        </section>
      </div>
    );
  }
}
