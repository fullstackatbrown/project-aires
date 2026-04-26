import { type SchemaTypeDefinition } from "sanity";

import { authorType } from "./authorType";
import { blockContentType } from "./blockContentType";
import { eBoardType } from "./eBoardType";
import { postType } from "./postType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [authorType, blockContentType, eBoardType, postType],
};
