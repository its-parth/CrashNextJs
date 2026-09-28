export default async function Blog(props: { params: any; }) {
    const params = await props.params;
    return (
        <>
            <h1>Blog {params.blogId}</h1>
        </>
    )
}