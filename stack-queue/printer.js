// 문제 URL : https://programmers.co.kr/learn/courses/30/lessons/42587

module.exports.solution = function (priorities, location) {
  let list = priorities.map((priority, index) => {
    return { priority: priority, index: index };
  });
  let printed = [];
  do {
    // 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
    const front = list.splice(0,1);

    if(list.filter((item) => item.priority > front[0].priority).length > 0) {
      // 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
      list = list.concat(front);
    } else {
      // 3. 그렇지 않으면 J를 인쇄합니다.
      printed.push(front[0].index);
    }
  } while(printed.indexOf(location) === -1);

  return printed.length;
};
