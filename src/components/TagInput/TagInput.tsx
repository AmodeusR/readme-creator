import { useState } from "react";
import { MultiSelect } from "@mantine/core";
import { Tag } from "../../assets";
import { createStyles } from "@mantine/core";

// Input styles
const useStyles = createStyles(() => ({
  icon: {
    marginLeft: "2px",
  },
  value: {
    color: "white",
    backgroundColor: "hsl(346, 99%, 65%)",
  },
  defaultValueRemove: {
    color: "white"
  }
}));

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

// Input component
const TagInput = () => {
  const { classes } = useStyles();
  const [chosenOptions, setChosenOptions] = useState<string[]>([]);  

  return (
    <div>
      <MultiSelect
        data={allOptions}
        label="Título"
        size="md"
        searchable
        icon={<Tag />}
        classNames={{ icon: classes.icon, value: classes.value, defaultValueRemove: classes.defaultValueRemove }}
        value={chosenOptions}
        onChange={setChosenOptions}
      />
    </div>
  );
};

export default TagInput;
