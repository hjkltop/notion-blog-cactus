import pMap from 'p-map'
import pMemoize from 'p-memoize'
import { ExtendedRecordMap, SearchParams, SearchResults } from 'notion-types'
import { mergeRecordMaps } from 'notion-utils'

import { NotionAPI } from 'notion-client'

export const notionApi = new NotionAPI({
  apiBaseUrl: process.env.NOTION_API_BASE_URL
})
// import { getPreviewImageMap } from './preview-images'
// import { getTweetAstMap } from './tweet-embeds'
import {
  isPreviewImageSupportEnabled,
} from '../config'

const getNavigationLinkPages = pMemoize(
  async (): Promise<ExtendedRecordMap[]> => {
    return []
  }
)

export async function getPage(pageId: string): Promise<ExtendedRecordMap> {
  let recordMap = await notionApi.getPage(pageId)

  if (isPreviewImageSupportEnabled) {
    // const previewImageMap = await getPreviewImageMap(recordMap)
    // ;(recordMap as any).preview_images = previewImageMap
  }

  return recordMap
}

export async function search(params: SearchParams): Promise<SearchResults> {
  return notionApi.search(params)
}
