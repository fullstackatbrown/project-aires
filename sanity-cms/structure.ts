import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
const listedTypeIds = new Set([
  'post',
  'category',
  'author',
  'currentProject',
  'pastProject',
])

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
      S.divider(),
      S.documentTypeListItem('currentProject').title('Current projects'),
      S.documentTypeListItem('pastProject').title('Past projects'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !listedTypeIds.has(item.getId()!),
      ),
    ])
