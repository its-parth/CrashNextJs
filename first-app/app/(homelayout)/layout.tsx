export default function HomeLayout({ children }: LayoutProps<"/">) {
  return (
        <div className="flex flex-col h-screen justify-between">
          <header className="bg-blue-600 text-center h-8">Header (Home)</header>
          <div className="flex-1 flex flex-col">
            {children}
          </div>
          <footer className="bg-orange-300 text-center h-8">Footer (Home)</footer>
        </div>
  );
}
