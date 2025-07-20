import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "./lib/supabaseClient";

function App() {
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    if (data) {
      setCountries(data);
    }
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button onClick={() => alert("Hello World!")}>Click me</Button>
      <h1 className="text-2xl font-bold mt-4">Countries</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
