import * as Contentstack from "contentstack";

const Stack = Contentstack.Stack({
  api_key: process.env.CONTENTSTACK_API_KEY,
  delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,
  environment: process.env.CONTENTSTACK_ENVIRONMENT,
});

export default function Query(content_type, entry, locale) {
  const resultEntry = Stack.ContentType(content_type).Entry(entry);
  const resultLocale = locale ? resultEntry.language(locale) : resultEntry;
  return resultLocale.toJSON().fetch();
}

export function Paths(content_type) {
  return Stack.ContentType(content_type).Query().toJSON().find();
}
