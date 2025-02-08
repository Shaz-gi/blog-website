type Post = {
    slug: Key | null | undefined;
    title: string,
    summary:string,
    image:image,
    params: { 
    slug:string
    };
}

type Blog = {
    slug: Key | null | undefined;
    title:string,
    summary:string,
    image: image,
    params: { 
        slug:string
        };
    content: array,
}