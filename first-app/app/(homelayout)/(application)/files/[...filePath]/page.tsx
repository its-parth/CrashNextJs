export default async function File(props: { params: Promise<{ filePath: any; }> }) {
    const {filePath} = await props.params;
    return (
        <>
            <h1>File /{filePath.join('/')}</h1>
        </>
    )
}