import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

export default function Markdown({ fileContent }: { fileContent: string }) {
  return (
    <article className="prose dark:prose-invert prose-lg max-w-none text-left">
      <ReactMarkdown
        children={fileContent}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[[rehypeRaw], [rehypeSanitize]]}
        components={{
          h1: ({ node, ...props }) => (
            <h1
              className="text-4xl font-extrabold mt-10 mb-6 tracking-tight text-gray-900 dark:text-white"
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-white"
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              className="text-2xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white"
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p
              className="text-[1.05rem] leading-relaxed text-gray-700 dark:text-gray-300 mb-5"
              {...props}
            />
          ),
          a: ({ node, ...props }) => (
            <a
              className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              {...(props.href && props.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              {...props}
            />
          ),
          img: ({ node, ...props }) => (
            <img
              className="rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 my-6"
              {...props}
            />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950 pl-5 py-3 italic text-gray-700 dark:text-gray-200 rounded-r-md my-6"
              {...props}
            />
          ),
          code: ({ node, className, children, ...props }) => (
            <code
              className={`font-mono text-sm ${"block bg-gray-100 dark:bg-gray-800 p-3 rounded-lg overflow-x-auto"}`}
              {...props}
            >
              {children}
            </code>
          ),
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-6">
              <table
                className="min-w-full border border-gray-300 dark:border-gray-700 rounded-lg"
                {...props}
              />
            </div>
          ),
          th: ({ node, ...props }) => (
            <th
              className="border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-4 py-2 font-semibold text-left"
              {...props}
            />
          ),
          td: ({ node, ...props }) => (
            <td
              className="border border-gray-300 dark:border-gray-700 px-4 py-2"
              {...props}
            />
          ),
          ul: ({ node, ...props }) => (
            <ul
              className="list-disc list-inside ml-4 mb-5 space-y-2"
              {...props}
            />
          ),
          ol: ({ node, ...props }) => (
            <ol
              className="list-decimal list-inside ml-4 mb-5 space-y-2"
              {...props}
            />
          ),
          hr: ({ node, ...props }) => (
            <hr
              className="my-8 border-gray-300 dark:border-gray-700"
              {...props}
            />
          ),
        }}
      />
    </article>
  );
}
