import { TextInput, TextInputProps } from "@mantine/core";
import { useStyles } from "@/utils/mantineStyles";

const MantineInput = ({...props}: TextInputProps) => {
  const { classes } = useStyles();

  return (
    <TextInput
      classNames={{ input: classes.input, description: classes.description, root: classes.root, label: classes.label }}
      label="Título"
      size="md"
      {...props}
    />
  );
};

export default MantineInput;
