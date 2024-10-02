import "./globals.css";
import { Nav } from "./components/Nav";

export const metadata = {
  title: "mini-project",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <div className="w-full h-screen bg-slate-200">
        <div className="w-full h-screen min-w-[240px] max-w-[1240px] m-auto bg-white">
           <Nav/>
          {children}
        </div>
        </div>
      </body>
    </html>
  );
}
