import { EncryptedText } from "@/components/EncryptedText";

const LOREM_IPSUM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident.`;

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mt-8 ml-12 flex-grow">
        <EncryptedText text={LOREM_IPSUM} />
      </main>
    </div>
  );
}
