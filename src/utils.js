const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: "numeric", month: "long", year: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};
const truncateText = (text, limit) => {
  if (text.length > limit) {
    return text.substring(0, limit) + "...";
  }
  return text;
};
module.exports = { formatDate, truncateText };
