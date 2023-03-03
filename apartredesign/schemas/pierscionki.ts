import { defineField, defineType } from "sanity";


export default defineType({
    name: "pierscionki",
    title: "Pierscionki",
    type: "document",
    groups: [
        {
            name:'details',
            title: 'Product Details'            
        }
    ],
    fields: [
        defineField({
            name:"title",
            title: "Title",
            type: "string",
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
            type: "string",
            group: "details",
        }),
        defineField({
            name: "marka",
            title: "Marka",
            type: "string",
            group: "details",
        }),
        defineField({
            name: "kolekcja",
            title: "Kolekcja",
            type: "string",
            group: "details",
        }),
        defineField({
            name: "kamien",
            title: "Kamień",
            type: "string",
            group: "details",
        }),
        defineField({
            name: "liczba_diamentow",
            title: "Liczba diamentów",
            type: "number",
            group: "details",
        }),
        defineField({
            name: "masa_diamentow",
            title: "Masa diamentów",
            type: "number",
            group: "details",
        }),
        defineField({
            name: "surowiec",
            title: "Surowiec",
            type: "string",
            group: "details",
        }),
        defineField({
            name: "proba",
            title: "Próba",
            type: "number",
            group: "details",
        }),
        defineField({
            name: "Opis",
            title: "Opis produktu",
            type: "blockContent"
        })
    ]
})