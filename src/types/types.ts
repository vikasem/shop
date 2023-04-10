export type ItemsType = {
    id: number
    compound: string
    color: string
    madeIn: string
    size: Array<number>
    category: string
    price: number
    description: string | null
    photo: string
    season: string
    leng: number
    sizeModel: number
}

export type CategoryType = {
    id: number | null
    name: string | null
    nameEng: string | null
}