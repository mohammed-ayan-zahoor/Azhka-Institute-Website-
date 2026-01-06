import "./globals.css";

export const metadata = {
  title: "Azhka Institute - Professional Computer Courses",
  description: "Empowering skills for the digital future. Learn CCA, DCA, CCB, ADCA, Web Development and more at Azhka Institute.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
