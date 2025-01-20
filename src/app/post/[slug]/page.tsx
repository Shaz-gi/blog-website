
import Image from "next/image"; 
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";

export const revalidate = 5;

interface Params {
  slug: string; // Define the shape of params
}

interface PageProps {
  params: Params;
}

export async function generateStaticParams() {
  const query = `*[_type=='post']{
    "slug": slug.current
  }`;

  // Fetch slugs without TypeScript typing
  const slugs = await client.fetch(query);

  // Ensure slugs map correctly to the structure { slug: string }
  return slugs.map((post: { slug: string }) => ({ slug: post.slug }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = params; // Extract slug safely

  const query = `*[_type=='post' && slug.current=="${slug}"]{
    title, summary, image, content
  }[0]`;

  try {
    const post = await client.fetch(query);

    if (!post) {
      return <div>Post not found</div>; // Handle cases where the post doesn't exist
    }

    return (
      <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
        <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
          {post.title}
        </h1>

        <Image
          src={urlForImage(post.image)}
          width={450}
          height={450}
          alt={post.title || "Post Image"} // Add alt text
          className="rounded"
        />

        <section>
          <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
            Summary
          </h2>
          <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
            {post.summary}
          </p>
        </section>

        <section className="text-lg leading-normal text-dark/80 dark:text-light/80 prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary prose-strong:text-dark dark:prose-strong:text-white">
          <PortableText value={post.content} />
        </section>
      </article>
    );
  } catch (error) {
    console.error("Error fetching post:", error);
    return <div>Error loading post</div>; // Handle fetch errors
  }
}
