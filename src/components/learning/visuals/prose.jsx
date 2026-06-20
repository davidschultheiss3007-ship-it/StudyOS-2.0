// Base HTML element styling for MDX prose. Mapped into MDXProvider so that
// plain Markdown in `.mdx` topic files renders with the StudyOS look without
// authors adding classes. Palette components (Formula, DataChart, …) are
// registered separately in index.jsx.

export const proseComponents = {
  h2: props => <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground" {...props} />,
  h3: props => <h4 className="mt-1 text-lg font-semibold text-foreground" {...props} />,
  h4: props => <h5 className="text-base font-semibold text-foreground" {...props} />,
  p: props => <p className="leading-relaxed text-[var(--color-text-secondary)]" {...props} />,
  ul: props => <ul className="ml-1 flex list-none flex-col gap-1.5 text-[var(--color-text-secondary)]" {...props} />,
  ol: props => <ol className="ml-5 flex list-decimal flex-col gap-1.5 text-[var(--color-text-secondary)]" {...props} />,
  li: props => <li className="leading-relaxed [ul>&]:flex [ul>&]:gap-2 before:[ul>&]:text-primary before:[ul>&]:content-['•']" {...props} />,
  a: props => <a className="font-medium text-primary underline-offset-2 hover:underline" {...props} />,
  strong: props => <strong className="font-semibold text-foreground" {...props} />,
  blockquote: props => (
    <blockquote className="border-l-2 border-primary pl-4 text-[var(--color-text-secondary)] italic" {...props} />
  ),
  hr: () => <hr className="my-2 border-border" />,
  code: props => (
    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground" {...props} />
  ),
  pre: props => (
    <pre className="overflow-auto rounded-lg border border-border bg-muted p-4 font-mono text-sm" {...props} />
  ),
  table: props => (
    <div className="my-2 overflow-x-auto rounded-lg border border-border">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  thead: props => <thead className="bg-muted/60" {...props} />,
  th: props => <th className="border-b border-border px-3 py-2 text-left font-semibold text-foreground" {...props} />,
  td: props => <td className="border-b border-border px-3 py-2 align-top text-[var(--color-text-secondary)]" {...props} />,
};
