/* B"H
 */

export interface DataEnvelope<T> {
  data: T
  message?: string
  isSuccess: boolean
}

export interface DataListEnvelope<T> extends DataEnvelope<T[]> {
  data: T[]
  total: number
}
