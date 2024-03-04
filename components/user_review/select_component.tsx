"use client";

import * as React from "react";
// import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CheckIcon, ChevronDown } from "lucide-react";

const frameworks = [
  {
    value: "most-recent",
    label: "Most recent",
  },
  {
    value: "most-helpful",
    label: "Most helpful",
  },
  {
    value: "hight-rating",
    label: "Highest rating",
  },
];

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className="w-[150px] text-sm font-light rounded-full justify-between border-2 text-gray-400 border-gray-400/70 hover:border-2 hover:border-white "
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select"}
          {/* <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
          <ChevronDown
            size={16}
            strokeWidth={3}
            className="ml-2 h-4 w-4 shrink-0 opacity-50"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] border-0 p-0 text-[#dad9d8] text-sm  rounded-[15px] bg-[#18181b]">
        <Command>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                className="cursor-pointer text-sm"
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {framework.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
