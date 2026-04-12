import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const eBoardType = defineType({
  name: "eBoard",
  title: "E-Board",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
      validation: (rule) =>
        rule.regex(/^(19|20)\d{2}$/).error("Use format YYYY (example: 2026)."),
    }),
    defineField({
      name: "concentration",
      title: "Concentration",
      type: "string",
    }),
    defineField({
      name: "roleAtAIRES",
      title: "Role at AIRES",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      description:
        "A brief biography of the e-board member (360 characters MAX).",
      validation: (rule) => rule.max(360),
    }),
    defineField({
      name: "headshot",
      title: "Headshot",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
        }),
      ],
    }),
  ],
});
