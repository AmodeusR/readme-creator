"use client";

import { useEffect, useState } from "react";
import { MultiSelect, MultiSelectProps } from "@mantine/core";
import { useStyles } from "@/utils/mantineStyles";
import { useAppDispatch } from "@/redux/hooks";
import { AnyAction } from "redux";

interface TagInputProps extends MultiSelectProps {
  dispatcher: (payload: string[]) => AnyAction
}

// Input component
export default function TagInput({
  dispatcher, ...props
}: TagInputProps) {
  const { classes } = useStyles();
  const [chosenOptions, setChosenOptions] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(dispatcher(chosenOptions));
  }, [chosenOptions]);
  
  return (
    <MultiSelect
      size="md"
      classNames={{
        icon: classes.icon,
        value: classes.value,
        defaultValueRemove: classes.defaultValueRemove,
        root: classes.root,
        label: classes.label,
      }}
      onChange={setChosenOptions}
      searchable
      creatable
      getCreateLabel={(query) => `+ Criar ${query}`}
      onCreate={(query) => {
        setChosenOptions([...chosenOptions, query]);
        return query;
      }}
      {...props}
    />
  );
}
