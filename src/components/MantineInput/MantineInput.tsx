import { createStyles, TextInput, TextInputProps } from "@mantine/core";

const useStyles = createStyles(() => ({
  root: {
    fontFamily: "inherit",
  },
  input: {
    "&:focus": {
      borderColor: "#0194FE",
    },
  },
  description: {
    margin: "-.3rem 0"
  }
}));

const MantineInput = ({...props}: TextInputProps) => {
  const { classes } = useStyles();

  return (
    <TextInput
      classNames={{ input: classes.input, description: classes.description, root: classes.root}}
      label="Título"
      size="md"
      {...props}
    />
  );
};

export default MantineInput;
