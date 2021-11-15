export default ({ children, file }) => (
  <pre class="font-mono bg-[#333] text-white p-2 border border-[#aaa] whitespace-pre-wrap">
    <code>
      {file ? (
        <div class="border-b italic text-sm text-right pr-2 text-gray-200 border-gray-500">
          {file}
        </div>
      ) : (
        []
      )}

      {children}
    </code>
  </pre>
);
