import React from "react";
import DateTime from "./DateTime";

const withPrettyDate = (WrappedComponent) => {
  return (props) => {
    const { date } = props;

    const currentDate = new Date();
    const passedDate = new Date(date);

    const timeDiff = currentDate - passedDate;
    const minutesDiff = Math.floor(timeDiff / (1000 * 60));
    const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    let prettyDate;
    if (minutesDiff < 60) {
      prettyDate = `${minutesDiff} минут назад`;
    } else if (hoursDiff < 24) {
      prettyDate = `${hoursDiff} часов назад`;
    } else {
      prettyDate = `${daysDiff} дней назад`;
    }

    return <WrappedComponent {...props} date={prettyDate} />;
  };
};
const DateTimePretty = withPrettyDate(DateTime);

export default DateTimePretty;
