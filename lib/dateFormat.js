export default function dateFormat(date, location, length) {
  const optionsUS = {
    locale: "en-US",
    options: {
      dateStyle: "long",
      timeZone: "UTC",
    },
  };
  const optionsGB = {
    locale: "en-GB",
    options: {
      day: "numeric",
      month: "long",
      timeZone: "UTC",
      year: "numeric",
    },
  };
  const locale = (location === "EMEA" || location === "APAC") ? optionsGB.locale : optionsUS.locale;
  const options = (location === "EMEA" || location === "APAC") ? optionsGB.options : optionsUS.options;

  let formattedDate;
  if (length) {
    const dayOptions = { weekday: 'long' };
    const day = new Date(date).toLocaleDateString(locale, dayOptions);
    const dateStr = new Date(date).toLocaleDateString(locale, options);
    formattedDate = `${day}, ${dateStr}`;
  } else {
    formattedDate = new Date(date).toLocaleDateString(locale, options);
  }

  return formattedDate;
}
