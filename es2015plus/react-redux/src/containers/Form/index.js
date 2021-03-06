import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  autofillForm,
  inputValue,
  resetForm,
  submitForm
} from '../../redux/form/actions';
import {
  resetNavigation,
  showDirectedContent,
  showTabContent
} from '../../redux/navigation/actions';
import {
  earlyStopTimer,
  proceedTimer,
  resetTimer,
  startTimer,
  stopTimer
} from '../../redux/timer/actions';
import { tabContentMap, transformData } from '../../utils';
import Button from '../../components/Button';
import CheckboxesContent from '../../components/CheckboxesContent';
import SelectsContent from '../../components/SelectsContent';
import RadiosContent from '../../components/RadiosContent';
import TextareasContent from '../../components/TextareasContent';

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleAutofillClick = this.handleAutofillClick.bind(this);
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    this.handleDirectionClick = this.handleDirectionClick.bind(this);
    this.handleInputEvent = this.handleInputEvent.bind(this);
    this.handleRepeatClick = this.handleRepeatClick.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(startTimer(this.handleTimer.bind(this)));
    dispatch(resetForm());
    dispatch(resetNavigation());
  }

  handleAutofillClick() {
    const { dispatch } = this.props;
    dispatch(autofillForm());
  }

  handleCheckboxClick(event) {
    const { dispatch } = this.props;
    const weekdayCheckboxes = document.getElementsByName(event.target.name);
    const filterResult = [];
    for (let f = 0; f < weekdayCheckboxes.length; f++) {
      if (weekdayCheckboxes[f].checked) {
        filterResult.push(weekdayCheckboxes[f].value);
      }
    }
    dispatch(inputValue(event.target.name, filterResult));
  }

  handleDirectionClick(event, previousFlag) {
    const { dispatch } = this.props;
    dispatch(
      showDirectedContent(event.target.parentNode.parentNode.id, previousFlag)
    );
  }

  handleInputEvent(event) {
    const { dispatch } = this.props;
    dispatch(inputValue(event.target.name, event.target.value));
  }

  handleRepeatClick() {
    const { dispatch } = this.props;
    dispatch(resetTimer(this.handleTimer.bind(this)));
    dispatch(resetForm());
    dispatch(resetNavigation());
  }

  handleSubmitClick() {
    const { dispatch, timeCounter, intervalId } = this.props;
    dispatch(earlyStopTimer(timeCounter, intervalId));
    dispatch(submitForm());
  }

  handleTabClick(event) {
    const { dispatch } = this.props;
    dispatch(showTabContent(event.target.id));
  }

  handleTimer() {
    const { dispatch, timeCounter, intervalId } = this.props;
    if (timeCounter < 0) {
      dispatch(stopTimer(intervalId));
    } else {
      dispatch(proceedTimer(timeCounter));
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
    const {
      activeTime,
      activeTabId,
      activeContentId,
      timerStatus
    } = this.props;
    const showResults = activeTime ? 'content__hide' : '';
    const showForm = activeTime ? '' : 'content__hide';
    const showContent = (contentId) => {
      return activeContentId === contentId ? '' : 'content__hide';
    };
    const highlightTab = (tabId) => {
      return activeTabId === tabId ? ' nav--tab__selected' : '';
    };

    return (
      <div>
        <section id="time-display">
          <div className="row">
            <h1 id="timer">{timerStatus}</h1>
          </div>
        </section>
        <section id="interaction" className={showForm}>
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
              onNextClick={(event) => {
                this.handleDirectionClick(event, false);
              }}
            />
            <SelectsContent
              className={showContent('selectContent')}
              id="selectContent"
              onSelectChange={this.handleInputEvent}
              onNextClick={(event) => {
                this.handleDirectionClick(event, false);
              }}
              onPreviousClick={(event) => {
                this.handleDirectionClick(event, true);
              }}
              selectOptions={selectOptions}
            />
            <RadiosContent
              className={showContent('radioContent')}
              id="radioContent"
              onRadioClick={this.handleInputEvent}
              onNextClick={(event) => {
                this.handleDirectionClick(event, false);
              }}
              onPreviousClick={(event) => {
                this.handleDirectionClick(event, true);
              }}
              radioOptions={radioOptions}
            />
            <TextareasContent
              className={showContent('textareaContent')}
              id="textareaContent"
              onTextareaChange={this.handleInputEvent}
              onPreviousClick={(event) => {
                this.handleDirectionClick(event, true);
              }}
              onSubmitClick={this.handleSubmitClick}
              textareaOptions={textareaOptions}
            />
          </form>
        </section>
        <section id="results" className={showResults}>
          <div className="row">
            <h3 className="user-summary">JSON Results</h3>
            <pre id="userSummary">
              {JSON.stringify(transformData(this.props))}
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

Form.propTypes = {
  activeTabId: PropTypes.string,
  activeContentId: PropTypes.string,
  activeTime: PropTypes.bool,
  comments: PropTypes.string,
  dateTime: PropTypes.string,
  day: PropTypes.string,
  dispatch: PropTypes.func,
  firstName: PropTypes.string,
  intervalId: PropTypes.string,
  lastName: PropTypes.string,
  timeCounter: PropTypes.number,
  month: PropTypes.string,
  sessionDuration: PropTypes.string,
  timeOfDay: PropTypes.string,
  timerStatus: PropTypes.string,
  weekday: PropTypes.arrayOf(PropTypes.string),
  year: PropTypes.string
};

function mapStateToProps(state) {
  const { activeTabId, activeContentId } = state.navigation;
  const {
    activeTime,
    dateTime,
    sessionDuration,
    intervalId,
    timeCounter,
    timerStatus
  } = state.timer;
  const {
    comments,
    firstName,
    lastName,
    day,
    month,
    timeOfDay,
    weekday,
    year
  } = state.form;
  return {
    activeTabId,
    activeContentId,
    activeTime,
    intervalId,
    timeCounter,
    sessionDuration,
    dateTime,
    timerStatus,
    comments,
    firstName,
    lastName,
    day,
    month,
    timeOfDay,
    weekday,
    year
  };
}

export default connect(mapStateToProps)(Form);
