"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  {
    label: "Main",
    items: [{ name: "Dashboard", href: "/admin" }],
  },
  {
    label: "Content",
    items: [
      { name: "Portfolio", href: "/admin/works" },
      { name: "Video Works", href: "/admin/video-works" },
      { name: "About Me", href: "/admin/about-me" },
      { name: "Client Reviews", href: "/admin/client-reviews" },
    ],
  },
  {
    label: "Business",
    items: [
      { name: "Booking", href: "/admin/booking" },
      { name: "Courses", href: "/admin/courses" },
    ],
  },
  {
    label: "System",
    items: [{ name: "Footer", href: "/admin/footer" }],
  },
];

export default function AdminLayout({ children }: any) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#faf9f7] text-[#111]">

      {/* SIDEBAR */}
      <aside className="w-64 px-8 py-10 border-r border-black/5 flex flex-col justify-between">

        {/* TOP */}
        <div>
          <div className="mb-16">
            <h1 className="font-serif text-2xl tracking-wide">
              Studio
            </h1>
            <p className="text-xs text-gray-400 mt-1">
              Admin Panel
            </p>
          </div>

          {/* MENU */}
          <div className="flex flex-col gap-10">
            {menu.map((group) => (
              <div key={group.label}>
                <p className="text-[10px] text-gray-400 mb-4 uppercase tracking-[0.2em]">
                  {group.label}
                </p>

                <div className="flex flex-col gap-4 text-sm">
                  {group.items.map((item) => {
                    const active = item.href === "/admin"
                      ? pathname === "/admin"
                      : pathname.startsWith(item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`relative transition-all duration-300 ${active
                            ? "opacity-100 font-medium"
                            : "opacity-40 hover:opacity-100"
                          }`}
                      >
                        {item.name}

                        {/* ACTIVE LINE */}
                        {active && (
                          <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-1 bg-black rounded-full" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="text-[10px] text-gray-400 tracking-widest">
          © STUDIO 2026
        </div>

      </aside>

      {/* MAIN */}
      <main className="flex-1 px-16 py-14">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}