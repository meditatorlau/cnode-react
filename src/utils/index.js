export function getDateDiff(dateTimeStamp) {
  const dateTime = new Date(dateTimeStamp).getTime();
  console.log();
  let result;
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const now = new Date().getTime();
  const diffValue = now - dateTime;
  if (diffValue < 0) { return; }
  const monthC = diffValue / month;
  const weekC = diffValue / (7 * day);
  const dayC = diffValue / day;
  const hourC = diffValue / hour;
  const minC = diffValue / minute;

  if (monthC >= 1) {
    result = `${parseInt(monthC, 10)}月前`;
  } else if (weekC >= 1) {
    result = `${parseInt(weekC, 10)}周前`;
  } else if (dayC >= 1) {
    result = `${parseInt(dayC, 10)}天前`;
  } else if (hourC >= 1) {
    result = `${parseInt(hourC, 10)}小时前`;
  } else if (minC >= 1) {
    result = `${parseInt(minC, 10)}分钟前`;
  } else {
    result = '刚刚';
  }

  return result;
}
