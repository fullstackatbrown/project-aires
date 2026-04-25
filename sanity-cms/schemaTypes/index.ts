import { type SchemaTypeDefinition } from "sanity";

<<<<<<< HEAD
import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import { currentProjectType, pastProjectType } from './projectTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    currentProjectType,
    pastProjectType,
  ],
}
=======
import { authorType } from "./authorType";
import { blockContentType } from "./blockContentType";
import { eBoardType } from "./eBoardType";
import { postType } from "./postType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [authorType, blockContentType, eBoardType, postType],
};
>>>>>>> origin/main
