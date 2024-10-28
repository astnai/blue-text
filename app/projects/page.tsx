import { EncryptedText } from "@/components/EncryptedText";

const PROJECTS = [
  {
    title: "Lorem 1",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    title: "Lorem 2",
    description: `Ut enim ad minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    title: "Lorem 3",
    description: `Duis aute irure dolor in reprehenderit in voluptate 
      velit esse cillum dolore eu fugiat nulla pariatur.`
  },
  {
    title: "Lorem 4",
    description: `Excepteur sint occaecat cupidatat non proident, sunt 
      in culpa qui officia deserunt mollit anim id est laborum.`
  }
];

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col ml-12">
      <main className="mt-8 flex-grow">
        <div className="space-y-8">
          {PROJECTS.map((project, index) => (
            <div key={index}>
              <h2 className="text-neutral-100 mb-4 text-lg font-semibold">
                <EncryptedText text={project.title} />
              </h2>
              <EncryptedText text={project.description} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
