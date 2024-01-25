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
  let options = (location === "EMEA" || location === "APAC") ? optionsGB.options : optionsUS.options;

  let formattedDate;
  if (length) {
    const longOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' };
    formattedDate = new Date(date).toLocaleDateString(locale, longOptions);
  } else {
    formattedDate = new Date(date).toLocaleDateString(locale, options);
  }

  return formattedDate;
}