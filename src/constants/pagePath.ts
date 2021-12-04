/**
 * 画面ごとのURL
 */
const PAGE_PATH: PagePathProps = {
  INDEX: '/',
  SAMPLE_COFFEE: '/sample-coffee',
  ERROR: '/error',
}

type PagePathProps = {
  [PAGE: string]: string
}

export default PAGE_PATH
