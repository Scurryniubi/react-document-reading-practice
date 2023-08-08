export function getFinalState(baseState, queue) {
  let finalState = baseState;
  // TODO: 对队列做些什么...
  queue.map(item => {
    if (item instanceof Function) {
      // finalState = finalState + 1 // 有缺陷，只能应对自增1的情况
      finalState = item(finalState)
    }
    else {
      finalState = item
    }
  })

  return finalState;
}
