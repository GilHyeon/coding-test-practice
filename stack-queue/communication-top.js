// 문제 : https://programmers.co.kr/learn/courses/30/lessons/42588

module.exports.solution = (heights) => {
  const answer = [];
  function findReceiver(receiveTop) {
    if (receiveTop.length) {
      // 신호를 수신한 탑을 반환합니다.
      return receiveTop.pop().topNumber;
    } else {
      // 신호를 수신한 탑이 없으면 0을 반환합니다.
      return 0;
    }
  }

  heights.forEach((sender, index, srcArray) => {
    // 신호를 수신할 수 있는 탑을 찾습니다.
    const receiveTop = srcArray
      .map((receiver, i) => (i < index && receiver > sender) ? {topNumber: i + 1, height: i} : null)
      .filter(e => e !== null);

    // 수신이 가능한 탑 중에서 가장 가까운 탑을 answer에 저장합니다.
    answer.push(findReceiver(receiveTop));
  });
  return answer;
};
