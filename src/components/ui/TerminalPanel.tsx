type Props = {
  target?: string;
  lines?: string[];
};

function defaultLines(target: string): string[] {
  return [
    `$ run --diagnostic --target=${target}`,
    "> Initializing audit...",
    "[!] Friction points found:",
    "  - Fragmented discovery (no single trusted source)",
    "  - Hidden or unclear pricing",
    "  - Weak path from interest to enquiry",
    "[DONE] Prioritized action plan ready.",
  ];
}

export default function TerminalPanel({
  target = "featured-project",
  lines,
}: Props) {
  const displayLines = lines ?? defaultLines(target);

  return (
    <div className="terminal-window">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="ml-2 font-mono text-[10px] text-cd-terminal-dim">
          diagnostic.sh
        </span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed md:text-[13px]">
        {displayLines.map((line) => (
          <span key={line} className="block">
            {line.startsWith("$") ? (
              <>
                <span className="text-cd-terminal-dim">$ </span>
                {line.slice(2)}
              </>
            ) : line.startsWith("[!]") || line.startsWith("[DONE]") ? (
              <span className="text-white">{line}</span>
            ) : (
              <span className="text-cd-terminal-dim">{line}</span>
            )}
          </span>
        ))}
      </pre>
    </div>
  );
}
