import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
  label: {
    fontWeight: "normal",
  },
  root: {
    fontFamily: "inherit",
  },
  input: {
    "&:focus": {
      borderColor: "#0194FE",
    },
  },
  description: {
    fontFamily: "inherit",
    margin: "-.3rem 0"
  },
  icon: {
    marginLeft: "2px",
  },
  value: {
    color: "white",
    backgroundColor: "hsl(346, 99%, 65%)",
  },
  defaultValueRemove: {
    color: "white",
  },
}));