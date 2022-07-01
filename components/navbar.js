import Link from "next/link";

export default function AppNavbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" passHref>
            <a>Methodology</a>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <a>Why VRMC</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
