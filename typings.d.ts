type Post = {
    slug: any;
    title: string,
    summary:string,
    image:any,
    params: { 
    slug:string
    };
}

type Blog = {
    slug: Key | null | undefined;
    title:string,
    summary:string,
    image:any,
    params: { 
        slug:string
        };
}