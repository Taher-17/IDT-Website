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
          // map markdown elements to styled components
          h1: ({ node, ...props }) => (
            <h1
              className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-white"
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              className="text-2xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white"
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              className="text-xl font-semibold mt-5 mb-2 text-gray-900 dark:text-white"
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p
              className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-4"
              {...props}
            />
          ),
          a: ({ node, ...props }) => (
            // ensures inline links look like links and open in new tab when absolute
            <a
              className="text-blue-600 dark:text-blue-400 hover:underline"
              {...(props.href && props.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              {...props}
            />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside ml-4 mb-4" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal list-inside ml-4 mb-4" {...props} />
          ),
        }}
      />
    </article>
  );
}
