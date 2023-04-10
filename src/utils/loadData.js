const loadData = async (limit) => {
  const res = await fetch("/category.json");
  const data = await res.json();
  const jobsRes = await fetch("/jobType.json");
  const jobs = await jobsRes.json();

  if (limit) {
    return { category: data.slice(0, 4), jobs };
  }
  return { category: data, jobs };
};

export default loadData;
