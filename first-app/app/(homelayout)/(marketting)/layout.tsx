export default function MarkettingLayout({ children }: LayoutProps<"/">) {
  return (
        <div className="flex flex-col h-screen justify-between">
          <header className="bg-yellow-500 text-center h-8">Header (Application)</header>
          <div className="flex-1 flex flex-col">
            {children}
          </div>
          <footer className="bg-green-400 text-center h-8">Footer (Application)</footer>
        </div>
  );
}
