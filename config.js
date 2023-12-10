const config = {
  bseUrl: import.meta.env.VITE_BASE_URL,
  any: "",
  categories: [
    { id: "655b4ec133dd362ae53081f7", name: "KG" },
    { id: "655b4ecd33dd362ae53081f9", name: "Primary_Education" },
    { id: "655b4ee433dd362ae53081fb", name: "Preparatory_Education" },
    { id: "655b4efb33dd362ae53081fd", name: "Secondary_Education" },
    { id: "655b4f0a33dd362ae53081ff", name: "General" },
  ],
  getCategoryName(id) {
    for (const category of config.categories) {
      if (category.id === id) {
        return category.name;
      }
    }
    return undefined;
  },
};
export default config;
