export default async function Blog(props: { params: any; }) {
    const params = await props.params;
    return (
        <div className="text-center">
            <h1>Blog {params.blogId}</h1>
        </div>
    )
}