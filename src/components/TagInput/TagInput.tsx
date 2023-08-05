"use client";

import { useState } from "react";
import { MultiSelect, MultiSelectProps } from "@mantine/core";
import { Tag } from "../../assets";
import { useStyles } from "@/utils/mantineStyles";

type TagInputProps = {
  label?: string;
  description?: string;
  placeholder?: string;
};
// Input component
export default function TagInput({
  ...props
}: MultiSelectProps) {
  const { classes } = useStyles();
  const [chosenOptions, setChosenOptions] = useState<string[]>([]);
  
  return (
    <MultiSelect
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
      {...props}
    />
  );
}
