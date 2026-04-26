import { defineArrayMember, defineField, defineType } from "sanity";

const projectFields = [
  defineField({
    name: "title",
    title: "Title",
    type: "string",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "summary",
    title: "Summary",
    type: "string",
    description: "Short text shown on the project card.",
  }),
  defineField({
    name: "fullDescription",
    title: "Full description",
    type: "blockContent",
    description: "Rich text: bold, bullets, links, and images.",
  }),
  defineField({
    name: "images",
    title: "Images",
    type: "array",
    of: [
      defineArrayMember({
        type: "image",
        options: { hotspot: true },
        fields: [
          defineField({
            name: "alt",
            type: "string",
            title: "Alternative text",
          }),
        ],
      }),
    ],
    options: { layout: "grid" },
  }),
];

export const currentProjectType = defineType({
  name: "currentProject",
  title: "Current project",
  type: "document",
  fields: projectFields,
  preview: {
    select: { title: "title", media: "images.0" },
  },
});

export const pastProjectType = defineType({
  name: "pastProject",
  title: "Past project",
  type: "document",
  fields: projectFields,
  preview: {
    select: { title: "title", media: "images.0" },
  },
});
