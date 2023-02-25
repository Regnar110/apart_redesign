import { defineField, defineType } from "sanity";


export default defineType({
    name: "naszyjniki",
    title: "Naszyjniki",
    type: "document",
    fields: [
        defineField({
            name:"title",
            title: "Title",
            type: "string"
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96
            }
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "array",
            of: [{ type: "image" }],
            options: {
                hotspot: true
            }
        }),
        defineField({ 
            //pole zapewniające utworzenie relacji między PRODUKTEM
            // a kategorią do którego zostanie dodany.
            //NP mackbook to będzie kategoria laptops.
            // sluży do powiązania produktu z kategorią. do stworzenia
            //relacji między nimi. Jak w bazach np PSQL
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: "category" }]
        }),
        defineField({
            name: "cena",
            title: "Cena",
            type: "number"
        }),
        defineField({
            name: "nr_wzoru",
            title: "Nr wzoru",
            type: "string"
        }),
        defineField({
            name: "marka",
            title: "Marka",
            type: "string"
        }),
        defineField({
            name: "kolekcja",
            title: "Kolekcja",
            type: "string"
        }),
        defineField({
            name: "surowiec",
            title: "Surowiec",
            type: "string"
        }),
        defineField({
            name: "proba",
            title: "Próba",
            type: "number"
        }),
        defineField({
            name: "Opis",
            title: "Opis produktu",
            type: "blockContent"
        })
    ]
})