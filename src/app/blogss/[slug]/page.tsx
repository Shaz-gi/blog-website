
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import { PortableText, PortableTextBlock } from '@portabletext/react';

export const revalidate = 5;

interface Blog {
  title: string;
  summary: string;
  image: any; // You can refine this type
  content: any;
}

type tParams = Promise<{ slug: string[] }>;

export async function generateStaticParams() {
  const query = `*[_type=='blog']{ "slug": slug.current }`;
  const slugs = await client.fetch<{ slug: string }[]>(query);
  return slugs.map((item) => ({ slug: item.slug }));
}

export default async function Page({ params }: { params: tParams }) {
  const { slug } = await params;
  const query = `*[_type=='blog' && slug.current==$slug][0]`;

  try {
    const blog: Blog | null = await client.fetch(query, { slug });

    if (!blog) {
      return <div>Post not found</div>; // Handle cases where the post doesn't exist
    }

    return (
      <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
        <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
          {blog.title}
        </h1>

        <Image
          src={urlForImage(blog.image)}
          width={450}
          height={450}
          alt={blog.title || "Post Image"} // Add alt text
          className="rounded"
        />

        <section>
          <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
            Summary
          </h2>
          <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
            {blog.summary}
          </p>
        </section>
         {blog.content ? (
          <section className="prose prose-lg dark:prose-dark">
            <PortableText
              value={blog.content}
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
    return <div>Error loading post</div>; // Handle fetch errors
  }
}
