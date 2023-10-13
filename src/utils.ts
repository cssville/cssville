
export default function hexToRgba(hex: string, alpha: number = 1.0): string {
  var commaSeparatedRGB = hexToRgbCommaSeparated(hex);
  if (alpha > 0 && alpha < 1) {
    return `rgba(${commaSeparatedRGB}, ${alpha})`;
  }
  return `rgb(${commaSeparatedRGB})`;
}

export function hexToRgbCommaSeparated(hex: string): string {
  hex = hex.replace(/^#/, '');
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}