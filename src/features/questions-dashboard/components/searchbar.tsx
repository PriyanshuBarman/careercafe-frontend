import { Cancel01Icon, SearchIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

type SearchBarProps = {
  query: string;
  onQueryChange: (query: string) => void;
};

export default function SearchBar({ query, onQueryChange }: SearchBarProps) {
  return (
    <InputGroup className="flex-1 px-1 py-2 md:py-5">
      <InputGroupInput
        placeholder="Search questions..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        className="max-sm:text-sm"
      />
      <InputGroupAddon>
        <HugeiconsIcon strokeWidth={2} icon={SearchIcon} className="size-4.5" />
      </InputGroupAddon>
      {query && (
        <InputGroupAddon align="inline-end">
          <InputGroupButton onClick={() => onQueryChange("")}>
            <HugeiconsIcon strokeWidth={2} icon={Cancel01Icon} />
          </InputGroupButton>
        </InputGroupAddon>
      )}
    </InputGroup>
  );
}
