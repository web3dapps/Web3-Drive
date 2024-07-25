import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/features">Features</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  );
}