"use client";

import { useEffect, useState } from "react";
import { MultiSelect, MultiSelectProps } from "@mantine/core";
import { useStyles } from "@/utils/mantineStyles";
import { useAppDispatch, useAppSelector} from "@/redux/hooks";
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
  const { overview, creatorFormLanguage } = useAppSelector(state => state.readme);
  
  useEffect(() => {
    dispatch(dispatcher(chosenOptions));
  }, [chosenOptions]);
  
  // Hard fix to chosenOptions not updating when changing language
  useEffect(() => {
    if(props.value) {
      setChosenOptions(overview[creatorFormLanguage].challenges);
    }
  }, [creatorFormLanguage]);
  
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
      searchable
      creatable
      onChange={setChosenOptions}
      getCreateLabel={(query) => `+ Criar ${query}`}
      onCreate={(query) => {
        setChosenOptions([...chosenOptions, query]);
        return query;
      }}
      {...props}
    />
  );
}
