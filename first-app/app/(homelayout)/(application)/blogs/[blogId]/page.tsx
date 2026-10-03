import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ blogId: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { blogId } = await params
 
  return {
    title: `Blog ${blogId}`,
  }
}

export default async function Blog(props: { params: any; }) {
    const params = await props.params;
    const blogId = params.blogId;
    if(!/^\d+$/.test(blogId)) {
      notFound();
    }
    return (
        <div className="text-center">
            <h1>Blog {params.blogId}</h1>
        </div>
    )
}