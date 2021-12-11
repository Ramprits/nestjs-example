export interface CommonPaginationResponse {
  data: any[],
  meta: {
    total: number,
    page: number,
    last_page: number
  }
}