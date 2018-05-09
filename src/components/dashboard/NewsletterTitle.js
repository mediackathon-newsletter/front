import React from 'react';
import moment from 'moment/min/moment-with-locales';

const NewsletterTitle = ({ newsletter }) => {
  return (
    <span>
      {newsletter.type === 'EVENTS' ? 'Agenda' : 'Actualités'} du
      {' ' + moment(newsletter.date).format('dddd D MMMM  YYYY')}
    </span>
  );
};

export default NewsletterTitle;
