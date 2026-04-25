import type { StructureResolver } from "sanity/structure";

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
    .title("Content")
    .items([
      S.listItem()
        .title("Blog")
        .child(
          S.list()
            .title("Blog")
            .items([
              S.documentTypeListItem("post").title("Posts"),
              S.documentTypeListItem("author").title("Authors"),
            ]),
        ),
      S.documentTypeListItem("e-board").title("E-Board"),
      S.divider(),
      S.documentTypeListItem('currentProject').title('Current projects'),
      S.documentTypeListItem('pastProject').title('Past projects'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["post", "author", "e-board"].includes(item.getId()!),
      ),
    ]);
