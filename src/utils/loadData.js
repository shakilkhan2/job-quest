const loadData = async (limit) => {
  const [category, jobs] = await Promise.all([
    fetch("/category.json").then((res) => res.json()),
    fetch("/jobType.json").then((res) => res.json()),
  ]);

  if (limit) {
    return { category: category.slice(0, 4), jobs };
  }
  return { category, jobs };
};

export default loadData;
