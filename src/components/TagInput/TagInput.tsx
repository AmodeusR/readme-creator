"use client";

import { useState } from "react";
import { MultiSelect } from "@mantine/core";
import { Tag } from "../../assets";
import { useStyles } from "@/utils/mantineStyles";

// Input options
const basic = ["HTML", "CSS", "Javascript", "Sass"];
const jsFrameworks = [
  "React",
  "Vue",
  "Angular",
  "Preact",
  "Svelte",
  "Remix",
  "NextJS",
  "Gatsby",
  "SolidJS",
  "NuxtJS",
];
const cssFrameworks = ["Bootstrap", "TailwindCSS", "Semantic UI", "Bulma"];
const componentLibraries = [
  "Mantine",
  "Radix UI",
  "Material UI",
  "Daisy UI",
  "Chakra UI",
];
const backend = ["NodeJS", "Deno", "Firebase", "MySQL", "PostGRE", "SQLite"];
const desktopAppCreators = ["Electron", "Tauri", "Flutter"];
const others = ["Typescript", "React Native", "Ionic"];

const allOptions = [
  ...basic,
  ...jsFrameworks,
  ...cssFrameworks,
  ...componentLibraries,
  ...backend,
  ...desktopAppCreators,
  ...others,
];

type TagInputProps = {
  label?: string;
  description?: string;
  placeholder?: string;
};
// Input component
export default function TagInput({
  label,
  placeholder,
  description,
}: TagInputProps) {
  const { classes } = useStyles();
  const [chosenOptions, setChosenOptions] = useState<string[]>([]);

  return (
    <MultiSelect
      data={allOptions}
      label={label}
      placeholder={placeholder}
      description={description}
      size="md"
      searchable
      icon={<Tag />}
      classNames={{
        icon: classes.icon,
        value: classes.value,
        defaultValueRemove: classes.defaultValueRemove,
        root: classes.root,
        label: classes.label,
      }}
      value={chosenOptions}
      onChange={setChosenOptions}
    />
  );
}
