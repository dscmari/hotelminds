import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function NotFound() {
  return (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <h1>404 - Page not found</h1>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <Link href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Back to Home
      </Link>
    </div>
  );
}