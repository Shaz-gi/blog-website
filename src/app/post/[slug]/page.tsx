import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";


export const revalidate = 5;

interface Params {
  slug: string;
}

interface PageProps {
  params: Promise<Params>;
}

interface Post {
  title: string;
  summary: string;
  image: SanityImageSource; // You can define the image type more specifically
  content: any; // Define content type based on your needs
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const query = `*[_type=='post']{
    "slug": slug.current
  }`;

  const slugs = await client.fetch(query);
  return slugs.map((post: { slug: string }) => ({ slug: post.slug }));
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const { slug } = params;

  const query = `*[_type=='post' && slug.current=="${slug}"]{
    title, summary, image, content
  }[0]`;

  try {
    const post: Post = await client.fetch(query);

    if (!post) {
      return <div>Post not found</div>;
    }

    return (
      <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
        <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
          {post.title}
        </h1>
        {post.image && (
        <Image
          src={urlForImage(post.image)}
          width={450}
          height={450}
          alt={post.title || "Post Image"}
          className="rounded"
        />
      )}

        <section>
          <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
            Summary
          </h2>
          <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
            {post.summary}
          </p>
        </section>

        {post.content ? (
          <section className="prose prose-lg dark:prose-dark">
            <PortableText
              value={post.content}
              components={{
                block: {
                  normal: ({ children }) => <p className="text-lg">{children}</p>,
                  h2: ({ children }) => <h2 className="text-2xl font-bold">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl font-bold">{children}</h3>,
                },
                marks: {
                  strong: ({ children }) => <strong className="text-bold">{children}</strong>,
                  em: ({ children }) => <em className="italic">{children}</em>,
                },
                list: {
                  bullet: ({ children }) => <ul className="list-disc pl-5">{children}</ul>,
                  number: ({ children }) => <ol className="list-decimal pl-5">{children}</ol>,
                },
                listItem: {
                  bullet: ({ children }) => <li className="ml-4">{children}</li>,
                  number: ({ children }) => <li className="ml-4">{children}</li>,
                },
              }}
            />
          </section>
        ) : (
          <p>No content available.</p>
        )}
      </article>
    );
  } catch (error) {
    console.error("Error fetching post:", error);
    return <div>Error loading post</div>;
  }
}
