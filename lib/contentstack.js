import * as Contentstack from "contentstack";

const Stack = Contentstack.Stack({
  api_key: process.env.CONTENTSTACK_API_KEY,
  delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,
  environment: process.env.CONTENTSTACK_ENVIRONMENT,
});

export default function Query(content_type, entry) {
  const result = Stack.ContentType(content_type).Entry(entry).toJSON().fetch();
  return result;
}
