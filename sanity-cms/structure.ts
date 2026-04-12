import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
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
              S.documentTypeListItem("category").title("Categories"),
              S.documentTypeListItem("author").title("Authors"),
            ]),
        ),
      S.documentTypeListItem("eBoard").title("E-Board"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["post", "category", "author", "eBoard"].includes(item.getId()!),
      ),
    ]);
