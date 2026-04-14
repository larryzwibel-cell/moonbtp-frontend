import { useState, useMemo } from 'react'
import { BRANDS } from '../data/products'
import TOP20_PRODUCTS from '../data/top20'

const BRAND_URLS = {
  "Leroy Merlin": (name) => `https://www.leroymerlin.fr/recherche=${encodeURIComponent(name)}`,
  "Brico Dépôt":  (name) => `https://www.bricodepot.fr/search?q=${encodeURIComponent(name)}`,
  "Castorama":    (name) => `https://www.castorama.fr/search?q=${encodeURIComponent(name)}`,
  "Point P":      (name) => `https://www.pointp.fr/recherche?q=${encodeURICompone
