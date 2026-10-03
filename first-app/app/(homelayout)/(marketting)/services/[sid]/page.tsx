export function generateStaticParams() {
  return [
    {sid: "xyz"},
    {sid: "parth"},
    {sid: "99"},
    {sid: "1"}
  ]
}
const SPage = async ({
  params,
}: {
  params: Promise<{ sid: string }>;
}) => {
  const paramsObj = await params;
  const id = paramsObj.sid;
  console.log("sid: ", id)

  return <div>Service {id}</div>;
};

export default SPage;