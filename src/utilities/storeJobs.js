const getJobs = () => {
  let jobs = localStorage.getItem("applied-job");
  if (jobs) {
    return JSON.parse(jobs);
  } else {
    return null;
  }
};

const storeJobs = (appliedJob) => {
  let jobs = getJobs();
  if (jobs) {
    const isExist = jobs.find((job) => job === appliedJob.id);
    if (isExist) {
      return false;
    } else {
      localStorage.setItem(
        "applied-job",
        JSON.stringify([...jobs, appliedJob.id])
      );
      return true;
    }
  } else {
    localStorage.setItem("applied-job", JSON.stringify([appliedJob.id]));
    return true;
  }
};

const appliedJobs = async () => {
  let appliedJob = getJobs();
  if (!appliedJob) {
    return false;
  } else {
    const res = await fetch("/data/jobs.json");
    const jobs = await res.json();

    let applied = [];

    for (const key of appliedJob) {
      const single = jobs.find((job) => job.id === key);
      applied.push(single);
    }
    return applied;
  }
};

export { getJobs, storeJobs, appliedJobs };
