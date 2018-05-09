import React, { Component } from 'react';
import bulmaCalendar from 'bulma-calendar/dist/bulma-calendar.min.js';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.datePickerRef = null;
  }

  componentDidMount() {
    const {
      dateFormat,
      lang,
      overlay,
      closeOnSelect,
      closeOnOverlayClick,
      onSelect,
      onOpen,
      onClose,
      onRender
    } = this.props;

    new bulmaCalendar(this.datePickerRef, {
      startDate: new Date(), // Date selected by default
      dateFormat: dateFormat || 'dd-mm-yyyy', // the date format `field` value
      lang: lang || 'en', // internationalization
      overlay: overlay || false,
      closeOnOverlayClick: closeOnOverlayClick || true,
      closeOnSelect: closeOnSelect || true,
      // callback functions
      onSelect: onSelect,
      onOpen: onOpen,
      onClose: onClose,
      onRender: onRender
    });
  }

  render() {
    return (
      <input
        className={this.props.className}
        type="text"
        ref={node => {
          this.datePickerRef = node;
        }}
      />
    );
  }
}

export default DatePicker;
