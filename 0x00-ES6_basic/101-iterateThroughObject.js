export default function iterateThroughObject(reportWithIterator) {
  const iterator = reportWithIterator[Symbol.iterator]();
  let n = iterator.next();
  let res = '';

  while (!n.done) {
    res += `${n.value} | `;
    n = iterator.next();
  }
  return res.slice(0, res.length - 3);
}
