import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client"; // Import your Sanity client

const builder = imageUrlBuilder(client);

export function urlForImage(source: any) {
  return builder.image(source).url();
}
