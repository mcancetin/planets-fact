const planetColors: Record<string, string> = {
  mercury: "bg-sky-blue",
  venus: "bg-golden-yellow",
  earth: "bg-vibrant-purple",
  mars: "bg-bright-red",
  jupiter: "bg-deep-red",
  saturn: "bg-burnt-orange",
  uranus: "bg-teal-green",
  neptune: "bg-bright-blue",
};

export const getPlanetColor = (planet: string) => planetColors[planet] || "";
