import { intlFormat } from "date-fns";

function useIntlFormat(date, locale) {
  if (locale) {
    const result = intlFormat(date, {
      locale: locale,
    });
    return result;
  }
  const result = intlFormat(date);
  return result;
}

export default useIntlFormat;
