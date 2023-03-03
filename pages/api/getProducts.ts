import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from "../../sanity"
import { productsGroqQuery } from '../../utils/productsGroqQuery'


const query = groq`{
    "pierscionki":*[_type == "pierscionki"]{
      Opis,
        _id,
        title,
        category,
        cena,
        image,
        slug,
        "details":{
          nr_wzoru,
            marka,
            kolekcja,
            kamien,
            liczba_diamentow,
            masa_diamentow,
            surowiec,
            proba,
        }
    },
    
    "kolczyki": *[_type == "kolczyki"]{
        Opis,
          _id,
        title,
        category,
        cena,
        image,
        slug,
        "details": {
          nr_wzoru,
            marka,
            kolekcja,
            surowiec,
            proba,
            szerokosc,
            dlugosc
        },
      },
    "naszyjniki": *[_type == "naszyjniki"]{
          Opis,
          _id,
        title,
        category,
        cena,
        image,
        slug,
        "details": {
          nr_wzoru,
            marka,
            kolekcja,
            surowiec,
            proba,
        },
    },
      "beads": *[_type == "beads"]{
          Opis,
          _id,
        title,
        category,
        cena,
        image,
        slug,
        "details": {
          nr_wzoru,
            marka,
            kolekcja,
            kamien,
            surowiec,
            proba,
            dlugosc,
        },
    },
      "charms": *[_type == "charms"]{
          Opis,
          _id,
        title,
        category,
        cena,
        image,
        slug,
        "details": {
          nr_wzoru,
            marka,
            kolekcja,
            surowiec,
            proba,
            dlugosc
        },
    },
      "zawieszki": *[_type == "zawieszki"]{
          Opis,
          _id,
        title,
        category,
        cena,
        image,
        slug,
        "details": {
          nr_wzoru,
            marka,
            kolekcja,
            surowiec,
            proba,
            dlugosc,
            srednica
        },
    },
      "bransoletki": *[_type == "bransoletki"]{
          Opis,
          _id,
        title,
        category,
        cena,
        image,
        slug,
        "details": {
          nr_wzoru,
            marka,
            kolekcja,
            surowiec,
            proba,
            szerokosc,
        },
    },
      "zegarki": *[_type == "zegarki"]{
          Opis,
          _id,
        title,
        category,
        cena,
        image,
        slug,
        "details": {
          nr_wzoru,
            marka,
            kolekcja,
            mechanizm,
            kaliber,
            rodzaj_koperty,
            wymiary_koperty,
            szklo,
            pasek,
            zapiecie,
            wodoszczelnosc,
            gwarancja_producenta
        },
    },
  }`

    type Data = {
        products: ProductList
      }
      
const handler = async (
        req: NextApiRequest,
        res: NextApiResponse<Data>
      ) => {
        const products = await sanityClient.fetch(query)
        res.status(200).json(products)
      }
export default handler