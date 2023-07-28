export function shortenText(text: string | undefined, stringLength: number ) {
  if (typeof text !== "string") return;

  if (text.length > stringLength) {
    return text.slice(0, stringLength) + "...";
  }

  return text;
}