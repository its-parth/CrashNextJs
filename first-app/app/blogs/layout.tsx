export default function BlogLayout({children}: LayoutProps<"/blogs">) {
  return (
    <>
      <h1 className="text-center text-4xl font-bold">Blogs Section</h1>
      {children}
    </>
  );
}
