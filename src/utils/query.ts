import { sleep } from './index'

/**
 *
 * @param condition return true to stop query.
 * @param timeout
 */
export async function queryCondition(
  condition: () => boolean | Promise<boolean>,
  timeout = 1000
) {
  while (!(await condition())) {
    await sleep(timeout)
  }
}
