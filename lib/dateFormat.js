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
  const locale = location === "EMEA" ? optionsGB.locale : optionsUS.locale;
  const options = location === "EMEA" ? optionsGB.options : optionsUS.options;
  const formattedDate = new Date(date).toLocaleDateString(locale, options);
  return formattedDate;
}
