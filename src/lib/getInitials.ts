export function getInitials(name: string | null | undefined): string {
  if (!name) return "U";

  return name
    .split(" ")
    .map((x) => x.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);
}
