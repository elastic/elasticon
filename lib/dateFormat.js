export default function dateFormat(date, location) {
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
  const formattedDate = new Date(date).toLocaleDateString(locale, options);
  return formattedDate;
}
