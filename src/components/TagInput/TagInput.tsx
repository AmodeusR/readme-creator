"use client";

import { useEffect, useState } from "react";
import { MultiSelect, MultiSelectProps } from "@mantine/core";
import { Tag } from "../../assets";
import { useStyles } from "@/utils/mantineStyles";
import { useAppDispatch } from "@/redux/hooks";
import { setDevelopedWith } from "@/redux/slices/readmeSlice";

// Input component
export default function TagInput({
  ...props
}: MultiSelectProps) {
  const { classes } = useStyles();
  const [chosenOptions, setChosenOptions] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setDevelopedWith(chosenOptions));
  }, [chosenOptions]);
  
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
