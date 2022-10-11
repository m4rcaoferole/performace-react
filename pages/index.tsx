import type { NextPage } from "next";
import { FormEvent, useState } from "react";

const Home: NextPage = () => {
  const [search, setSearch] = useState("");

  function handleSearch(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default Home;
