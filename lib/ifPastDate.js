const isPastDate = (dateString) => {
  const date = Date.parse(dateString);
  return date && date < Date.now() - 86400000;
}

export default isPastDate;