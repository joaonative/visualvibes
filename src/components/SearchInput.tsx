import { ChangeEvent, useState } from "react";
import Search from "./icons/Search";

interface Props {
  name: string;
  searchFn: (term: string) => void;
}

const SearchInput = ({ name, searchFn }: Props) => {
  const [term, setTerm] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
    searchFn(e.target.value);
  };
  return (
    <div className="px-3 flex items-center gap-4 bg-layer text-dark rounded outline-primary mr-1">
      <input
        name={name}
        value={term}
        onChange={(e) => handleChange(e)}
        className="bg-layer focus:outline-none px-2 text-xl"
      />
      <div className="py-2">
        <Search color="primary" size={24} />
      </div>
    </div>
  );
};

export default SearchInput;
