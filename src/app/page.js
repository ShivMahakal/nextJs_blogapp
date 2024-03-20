import { useDeferredValue } from "react";

export default function Home() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  return (
   <div>
    Hello World!
    <label>
        Search albums:
        <input value={query} onChange={e => setQuery(e.target.value)} />
      </label>
      <SearchResults query={deferredQuery} />

   </div>
  );
}
