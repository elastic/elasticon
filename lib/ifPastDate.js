const isPastDate = (dateString) => {
  const date = Date.parse(dateString);
  return date && date < Date.now();
}

export default isPastDate;