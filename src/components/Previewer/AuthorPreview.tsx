import { PreviewersProps } from "./previewers.types";
import { Author } from "@/redux/slices/readmeSlice.types";

const AuthorPreview = ({ source, language }: PreviewersProps<Author>) => {
  return (
    <div className="previewer__author">

    </div>
  );
};

export default AuthorPreview;
