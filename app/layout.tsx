

import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

/*
import 'bootstrap/dist/css/bootstrap.css';

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

