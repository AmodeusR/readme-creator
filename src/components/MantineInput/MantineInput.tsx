import { createStyles, TextInput, TextInputProps } from "@mantine/core";

const useStyles = createStyles(() => ({
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
      classNames={{ input: classes.input, description: classes.description }}
      label="Título"
      size="md"
      {...props}
    />
  );
};

export default MantineInput;
