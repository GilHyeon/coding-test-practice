// 문제 : https://programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

const inspectPublish = (progresses, inspectIndex) => progresses.filter(
  (p, index) => p.progress < 100 && index < inspectIndex)
  .length === 0;

module.exports.solution = (progresses, speeds) => {
  let currentProgresses = progresses.map((p, index) => ({
    progress: p,
    published : false,
    speed: speeds[index],
  }));
  const publishJobs = [];
  while(currentProgresses.length > 0) {
    // 개발이 완료된 기능은 출시합니다.
    currentProgresses = currentProgresses.map((p, index, array) => ({
      ...p,
      published: !!(p.progress >= 100 && inspectPublish(array, index)),
    }));
    const publishJobsCount = currentProgresses.filter(p => p.published).length;
    publishJobsCount && publishJobs.push(publishJobsCount);
    // 출시 완료된 작업은 제거합니다.
    currentProgresses = currentProgresses.filter(p => !p.published);
    // 개발속도 만큼 작업을 진행합니다.
    currentProgresses = currentProgresses.map(p => ({
      ...p,
      progress: p.progress + p.speed,
    }));
  }
  return publishJobs;
};


