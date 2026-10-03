export function generateStaticParams() {
    return [
        {sid: "1", uid: "1"},
        {sid: "1", uid: "2"},
        {sid: "2", uid: "1"},
    ]
}

const SPage = async ({
  params,
}: {
  params: Promise<{ sid: string, uid: string }>;
}) => {
  const paramsObj = await params;
  const sid = paramsObj.sid;
    const uid = paramsObj.uid;
    console.log("sid: ", sid," uid: ", uid)
  return <div>Service {sid} giving to user with user id: {uid}</div>;
};

export default SPage;