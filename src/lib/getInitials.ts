export function getInitials(name: string | null | undefined): string {
  if (!name) return "U";

  return name
    .trim()
    .split(/\s+/)
    .filter(word => word.length > 0)
    .map(word => word.charAt(0))
    .filter(char => /[a-zA-Z]/.test(char))
    .join("")
    .toUpperCase()
    .slice(0, 2) || "U";
}
