import { TextEncrypted } from "./TextEffect";

interface EncryptedTextProps {
  text: string;
}

export function EncryptedText({ text }: EncryptedTextProps) {
  return (
    <div className="prose max-w-none px-4">
      <p className="text-base text-neutral-950 flex flex-wrap gap-1">
        {text
          .split(/\s+/)
          .filter((word) => word.length > 0)
          .map((word, i) => (
            <span key={i} className="inline-flex whitespace-nowrap">
              <span className="relative">
                <span className="invisible">{word}</span>
                <span className="absolute left-0">
                  <TextEncrypted
                    text={word}
                    interval={25 + Math.random() * 25}
                  />
                </span>
              </span>
            </span>
          ))}
      </p>
    </div>
  );
} 