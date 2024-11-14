/*  B"H
 */

export function rest<T>(url: string): Promise<T> {
  return fetch(url).then((x) => x.json())
}
