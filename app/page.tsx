import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Web-технологии</h1>
      <p>
        Обзорная работа по Next.js
      </p>
      <nav>
        <ul>
          <li>
            <Link href="/about">
              О приложении
            </Link>
          </li>
          <li>
            <Link href="/products">
              Товары
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}