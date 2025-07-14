export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-700">
      <h1 className="text-2xl font-bold">Nasique</h1>
      <nav className="space-x-4">
        <a href="/" className="hover:underline">
          Home
        </a>
        <a href="/contact" className="hover:underline">
          Contact
        </a>
      </nav>
    </header>
  );
}
