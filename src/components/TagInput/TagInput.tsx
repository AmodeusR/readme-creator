import { useState } from "react";
import { MultiSelect } from "@mantine/core";

const frameworks = ["React", "Vue", "Angular"];

const TagInput = () => {
  const [data, setData] = useState<string[]>([...frameworks]);


  return (
    <div>
      <MultiSelect data={data} label="Título" size="md"  />
    </div>
  );
};

export default TagInput;
