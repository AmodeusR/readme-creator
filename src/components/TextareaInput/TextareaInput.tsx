import { Textarea, TextareaProps } from "@mantine/core";
import { useStyles } from "@/utils/mantineStyles";

const TextareaInput = ({ ...props }: TextareaProps) => {
  const { classes } = useStyles();
  return (
    <>
      <Textarea
        classNames={{
          input: classes.input,
          description: classes.description,
          root: classes.root,
          label: classes.label,
        }}
        size="md"
        {...props}
      />
    </>
  );
};

export default TextareaInput;
