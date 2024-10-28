import { TextEncrypted } from "./TextEffect";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="mt-8 px-4 ">
      <div className="container mx-auto px-4">
        <h1 className="text-lg font-semibold tracking-tight text-neutral-950 relative">
          <span className="invisible">{`Lorem ipsum`}</span>
          <span className="absolute left-0">
            <TextEncrypted text="Lorem ipsum" />
          </span>
        </h1>
        <Navigation />
      </div>
    </header>
  );
} 