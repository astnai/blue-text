import Link from "next/link";
import { TextEncrypted } from "./TextEffect";

interface NavigationItem {
  label: string;
  href: string;
}

const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  return (
    <nav className="mt-4">
      <ul className="flex space-x-4 text-base text-neutral-950">
        {navigation.map((item) => (
          <li key={item.href}>
            <Link 
              href={item.href} 
              className="relative block hover:underline hover:decoration-neutral-950"
            >
              <span className="invisible">{item.label}</span>
              <span className="absolute inset-0">
                <TextEncrypted text={item.label} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
} 