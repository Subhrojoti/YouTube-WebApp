import moment from "moment";

export const published = (date) => {
  let curr = moment().format("YYYY-MM-DD");
  let videoDate = moment(date).format("YYYY-MM-DD");
  if (parseInt(curr.slice(0, 4)) - parseInt(videoDate.slice(0, 4)) !== 0)
    return `${
      parseInt(curr.slice(0, 4)) - parseInt(videoDate.slice(0, 4))
    } years ago `;
  else if (parseInt(curr.slice(5, 7)) - parseInt(videoDate.slice(5, 7)) !== 0)
    return `${
      parseInt(curr.slice(5, 7)) - parseInt(videoDate.slice(5, 7))
    } months ago `;
  else if (parseInt(curr.slice(8, 10)) - parseInt(videoDate.slice(8, 10)) !== 0)
    return `${
      parseInt(curr.slice(8, 10)) - parseInt(videoDate.slice(8, 10))
    } days ago `;
};
