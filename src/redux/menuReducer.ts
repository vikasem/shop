import { menuApi } from "../api/api"
import { CategoryType, ItemsType } from "../types/types"

const FILTER_BY_CATEGORY = 'menu/FILTER_BY_CATEGORY'
const SHOW_ALL = 'menu/SHOW_ALL'
const SET_CATEGORY = 'menu/SET_CATEGORY'
const SET_ITEMS = 'menu/SET_ITEMS'
const SET_CATEGORY_API = 'menu/SET_CATEGORY_API'

// type ItemsType = {
//     id: number
//     compound: string
//     color: string
//     madeIn: string
//     size: Array<number>
//     category: string
//     price: number
//     description: string | null
//     photo: string
//     season: string
//     leng: number
//     sizeModel: number
// }

// type CategoryType = {
//     id: number | null
//     name: string | null
//     nameEng: string | null
// }

let initialState = {
    items: [
        //     {
        //         id: 1,
        //         compound: "Вискоза - 100%",
        //         color: "Зелёный",
        //         madeIn: "Беларусь",
        //         size: [42, 44, 46],
        //         category: "Платье",
        //         price: 1890,
        //         description: "Данный товар является частью проекта planet - специального раздела нашего каталога, где мы собрали экологичные, этичные, инклюзивные и благотворительные товары.",
        //         photo: "1.jpg",
        //         season: "Мульти",
        //         leng: 95,
        //         sizeModel: 44
        //     },
        //     {
        //         id: 2,
        //         compound: "Полиэстер - 95%, Лайкра - 5%",
        //         color: "Чёрный",
        //         madeIn: "Россия",
        //         size: [42, 44],
        //         category: "Платье",
        //         price: 2100,
        //         description: "Товар произведен в стране присутствия VOGA, что позволяет нам оптимизировать выбросы СО2 при доставке. Покупая этот товар, вы вносите свой вклад в сокращение углеродного следа и поддерживаете развитие локальных фабрик.",
        //         photo: "2.webp",
        //         season: "Мульти",
        //         leng: 105,
        //         sizeModel: 42
        //     },
        //     {
        //         id: 3,
        //         compound: "Хлопок - 76%, Полиэстер - 22%, Эластан - 2%",
        //         color: "Белый",
        //         madeIn: "Беларусь",
        //         size: [42, 44, 46],
        //         category: "Рубашка",
        //         price: 1800,
        //         description: "Товар произведен в стране присутствия VOGA, что позволяет нам оптимизировать выбросы СО2 при доставке. Покупая этот товар, вы вносите свой вклад в сокращение углеродного следа и поддерживаете развитие локальных фабрик.",
        //         photo: "3.jpg",
        //         season: "Мульти",
        //         leng: 75,
        //         sizeModel: 42
        //     },
        //     {
        //         id: 4,
        //         compound: "Лен - 100%",
        //         color: "Коричневый",
        //         madeIn: "Китай",
        //         size: [40, 42, 44, 46],
        //         category: "Рубашка",
        //         price: 2900,
        //         description: "Рубашка изо льна класса премиум, отличающегося изысканным блеском и особой фактурой. Благодаря дышащим свойствам натурального материала в ней легко и комфортно даже в жаркую погоду.",
        //         photo: "4.webp",
        //         season: "Мульти",
        //         leng: 66,
        //         sizeModel: 40
        //     },
        //     {
        //         id: 5,
        //         compound: "Микрофибра - 100%",
        //         color: "Зелёный",
        //         madeIn: "Россия",
        //         size: [40, 42, 44, 46],
        //         category: "Платье",
        //         price: 3300,
        //         description: "Данный товар является частью проекта planet - специального раздела нашего каталога, где мы собрали экологичные, этичные, инклюзивные и благотворительные товары.",
        //         photo: "5.webp",
        //         season: "Мульти",
        //         leng: 113,
        //         sizeModel: 42
        //     },
        //     {
        //         id: 6,
        //         compound: "Полиэстер - 97%, Эластан - 3%",
        //         color: "Бежевый",
        //         madeIn: "Россия",
        //         size: [42, 44],
        //         category: "Юбка",
        //         price: 2900,
        //         description: "Товар произведен в стране присутствия VOGA, что позволяет нам оптимизировать выбросы СО2 при доставке. Покупая этот товар, вы вносите свой вклад в сокращение углеродного следа и поддерживаете развитие локальных фабрик.",
        //         photo: "6.webp",
        //         season: "Мульти",
        //         leng: 78,
        //         sizeModel: 42
        //     },
        //     {
        //         id: 7,
        //         compound: "Микрофибра - 100%",
        //         color: "Бордовый",
        //         madeIn: "Беларусь",
        //         size: [42, 44, 46],
        //         category: "Платье",
        //         price: 4500,
        //         description: "Товар произведен в стране присутствия VOGA, что позволяет нам оптимизировать выбросы СО2 при доставке. Покупая этот товар, вы вносите свой вклад в сокращение углеродного следа и поддерживаете развитие локальных фабрик.",
        //         photo: "7.webp",
        //         season: "Мульти",
        //         leng: 80,
        //         sizeModel: 40
        //     },
        //     {
        //         id: 8,
        //         compound: "70% Вискоза, 25% Полиэстер, 5% Эластан",
        //         color: "Фиолетовый",
        //         madeIn: "Китай",
        //         size: [40, 42, 44, 46],
        //         category: "Юбка",
        //         price: 3280,
        //         description: "Юбка из вискозы класса премиум, отличающегося изысканным блеском и особой фактурой. Благодаря дышащим свойствам натурального материала в ней легко и комфортно даже в жаркую погоду.",
        //         photo: "8.webp",
        //         season: "Мульти",
        //         leng: 50,
        //         sizeModel: 40
        //     },
        //     {
        //         id: 9,
        //         compound: "Полиэстер - 100%",
        //         color: "Чёрный",
        //         madeIn: "Китай",
        //         size: [42, 44, 46],
        //         category: "Топ",
        //         price: 1600,
        //         description: "Товар подойдёт для вечернего корпоротивного образа вместе с костюмом любого цвета.",
        //         photo: "9.webp",
        //         season: "Мульти",
        //         leng: 32,
        //         sizeModel: 40
        //     },
        //     {
        //         id: 10,
        //         compound: "Полиэстер - 100%",
        //         color: "Бежевый",
        //         madeIn: "Китай",
        //         size: [40, 42, 44, 46],
        //         category: "Брюки",
        //         price: 2700,
        //         description: "Брюки класса премиум, отличающегося особой фактурой и высокой посадкой. Благодаря дышащим свойствам натурального материала в них легко и комфортно даже в жаркую погоду.",
        //         photo: "10.webp",
        //         season: "Мульти",
        //         leng: 112,
        //         sizeModel: 42
        //     },
        //     {
        //         id: 11,
        //         compound: "Вискоза - 80%, Нейлон - 20%",
        //         color: "Чёрный",
        //         madeIn: "Россия",
        //         size: [42, 46],
        //         category: "Топ",
        //         price: 2800,
        //         description: "Товар подойдёт для вечернего корпоротивного образа, особенно сочетается с фиолетовым, белым и тёмно-зелёным цветом.",
        //         photo: "11.webp",
        //         season: "Мульти",
        //         leng: 40,
        //         sizeModel: 42
        //     },
        //     {
        //         id: 12,
        //         compound: "Полиэстер - 92%, Спандекс - 8%",
        //         color: "Чёрный",
        //         madeIn: "Россия",
        //         size: [40, 42, 44, 46],
        //         category: "Юбка",
        //         price: 2250,
        //         description: "Товар произведен в стране присутствия VOGA, что позволяет нам оптимизировать выбросы СО2 при доставке. Покупая этот товар, вы вносите свой вклад в сокращение углеродного следа и поддерживаете развитие локальных фабрик.",
        //         photo: "12.webp",
        //         season: "Мульти",
        //         leng: 106,
        //         sizeModel: 42
        //     },
        //     {
        //         id: 13,
        //         compound: "Микрофибра - 97%, Спандекс - 3%",
        //         color: "Фиолетовый",
        //         madeIn: "Россия",
        //         size: [40, 42, 44, 46],
        //         category: "Платье",
        //         price: 5100,
        //         description: "Данный товар является частью проекта planet - специального раздела нашего каталога, где мы собрали экологичные, этичные, инклюзивные и благотворительные товары.",
        //         photo: "13.webp",
        //         season: "Мульти",
        //         leng: 165,
        //         sizeModel: 42
        //     },
        //     {
        //         id: 14,
        //         compound: "Хлопок - 100%",
        //         color: "Бежевый",
        //         madeIn: "Китай",
        //         size: [42, 44],
        //         category: "Рубашка",
        //         price: 3299,
        //         description: "Товар произведен в стране присутствия VOGA, что позволяет нам оптимизировать выбросы СО2 при доставке. Покупая этот товар, вы вносите свой вклад в сокращение углеродного следа и поддерживаете развитие локальных фабрик.",
        //         photo: "14.webp",
        //         season: "Мульти",
        //         leng: 86,
        //         sizeModel: 42
        //     },
        //     {
        //         id: 15,
        //         compound: "Полиэстер - 97%, Эластан - 3%",
        //         color: "Бежевый",
        //         madeIn: "Россия",
        //         size: [42, 44, 46],
        //         category: "Юбка",
        //         price: 2200,
        //         description: "Товар произведен в стране присутствия VOGA, что позволяет нам оптимизировать выбросы СО2 при доставке. Покупая этот товар, вы вносите свой вклад в сокращение углеродного следа и поддерживаете развитие локальных фабрик.",
        //         photo: "15.webp",
        //         season: "Мульти",
        //         leng: 41,
        //         sizeModel: 40
        //     },
        //     {
        //         id: 16,
        //         compound: "Хлопок - 95%, Эластан - 5%",
        //         color: "Белый",
        //         madeIn: "Россия",
        //         size: [40, 42, 44, 46],
        //         category: "Топ",
        //         price: 1980,
        //         description: "Топ из хлопка класса премиум, отличающегося особой фактурой. Благодаря дышащим свойствам натурального материала в нем легко и комфортно даже в жаркую погоду.",
        //         photo: "16.webp",
        //         season: "Мульти",
        //         leng: 35,
        //         sizeModel: 40
        //     },
        //     {
        //         id: 17,
        //         compound: "Полиэстер - 49%, Вискоза 37%, Лайкра - 14%",
        //         color: "Чёрный",
        //         madeIn: "Китай",
        //         size: [42, 44, 46],
        //         category: "Брюки",
        //         price: 3600,
        //         description: "Товар подойдёт для вечернего корпоротивного образа вместе с топом любого цвета.",
        //         photo: "17.webp",
        //         season: "Мульти",
        //         leng: 106,
        //         sizeModel: 42
        //     },
        //     {
        //         id: 18,
        //         compound: "Хлопок - 75%, Вискоза - 23%, Эластан - 2%",
        //         color: "Бордовый",
        //         madeIn: "Россия",
        //         size: [40, 42, 44, 46],
        //         category: "Брюки",
        //         price: 2750,
        //         description: "Брюки класса премиум, отличающегося особой фактурой и высокой посадкой. Благодаря дышащим свойствам натурального материала в них легко и комфортно даже в жаркую погоду.",
        //         photo: "18.webp",
        //         season: "Мульти",
        //         leng: 103,
        //         sizeModel: 44
        //     },
        //     {
        //         id: 19,
        //         compound: "Микрофибра - 100%",
        //         color: "Зелёный",
        //         madeIn: "Россия",
        //         size: [42, 46],
        //         category: "Платье",
        //         price: 4000,
        //         description: "Товар подойдёт для вечернего корпоротивного образа, особенно сочетается с фиолетовым, белым и тёмно-зелёным цветом.",
        //         photo: "19.webp",
        //         season: "Мульти",
        //         leng: 80,
        //         sizeModel: 42
        //     },
        //     {
        //         id: 20,
        //         compound: "Полиэстер - 92%, Спандекс - 8%",
        //         color: "Синий",
        //         madeIn: "Россия",
        //         size: [40, 42, 44, 46],
        //         category: "Топ",
        //         price: 1240,
        //         description: "Товар произведен в стране присутствия VOGA, что позволяет нам оптимизировать выбросы СО2 при доставке. Покупая этот товар, вы вносите свой вклад в сокращение углеродного следа и поддерживаете развитие локальных фабрик.",
        //         photo: "20.webp",
        //         season: "Мульти",
        //         leng: 25,
        //         sizeModel: 42
        //     },
        //     {
        //         id: 21,
        //         compound: "Хлопок - 100%",
        //         color: "Хаки",
        //         madeIn: "Турция",
        //         size: [42, 44, 46],
        //         category: "Рубашка",
        //         price: 2850,
        //         description: "Данный товар является частью проекта planet - специального раздела нашего каталога, где мы собрали экологичные, этичные, инклюзивные и благотворительные товары.",
        //         photo: "21.webp",
        //         season: "Мульти",
        //         leng: 75,
        //         sizeModel: 44
        //     },
        //     {
        //         id: 22,
        //         compound: "Терилен - 100%",
        //         color: "Чёрный",
        //         madeIn: "Россия",
        //         size: [42, 44],
        //         category: "Брюки",
        //         price: 3100,
        //         description: "Товар произведен в стране присутствия VOGA, что позволяет нам оптимизировать выбросы СО2 при доставке. Покупая этот товар, вы вносите свой вклад в сокращение углеродного следа и поддерживаете развитие локальных фабрик.",
        //         photo: "22.webp",
        //         season: "Мульти",
        //         leng: 111,
        //         sizeModel: 42
        //     },
        //     {
        //         id: 23,
        //         compound: "Хлопок - 76%, Полиэстер - 22%, Эластан - 2%",
        //         color: "Бежевый",
        //         madeIn: "Беларусь",
        //         size: [42, 44, 46],
        //         category: "Платье",
        //         price: 3850,
        //         description: "Товар произведен в стране присутствия VOGA, что позволяет нам оптимизировать выбросы СО2 при доставке. Покупая этот товар, вы вносите свой вклад в сокращение углеродного следа и поддерживаете развитие локальных фабрик.",
        //         photo: "23.webp",
        //         season: "Мульти",
        //         leng: 100,
        //         sizeModel: 42
        //     },
        //     {
        //         id: 24,
        //         compound: "Полиэстер - 100%",
        //         color: "Бордовый",
        //         madeIn: "Турция",
        //         size: [40, 42, 44, 46],
        //         category: "Платье",
        //         price: 7000,
        //         description: "Платье класса премиум, отличающегося изысканным блеском и особой фактурой. Благодаря дышащим свойствам натурального материала в нем легко и комфортно даже в жаркую погоду.",
        //         photo: "24.webp",
        //         season: "Мульти",
        //         leng: 160,
        //         sizeModel: 40
        //     },
    ] as Array<ItemsType>,
    category: [
        // {
        //     id: 1,
        //     name:"Платье",
        //     nameEng:"dress",
        // },
        // {
        //     id: 2,
        //     name:"Рубашка",
        //     nameEng:"shirt",
        // },
        // {
        //     id: 3,
        //     name:"Юбка",
        //     nameEng:"skirt",
        // },
        // {
        //     id: 4,
        //     name:"Брюки",
        //     nameEng:"trousers",
        // },
        // {
        //     id: 5,
        //     name:"Топ",
        //     nameEng:"top",
        // },
    ] as Array<CategoryType>,
    filterItems: [] as Array<ItemsType>,
    categoryName: {
        id: null,
        name: null,
        nameEng: null
    } as any 
}

type InitialStateType = typeof initialState

let menuReducer = (state = initialState, action: any):InitialStateType => {
    switch (action.type) {
        case SET_CATEGORY:
            return {
                ...state,
                categoryName: state.category.find(el => el.nameEng === action.category),
                //filterItems:state.items.filter(el=>el.category === action.category)
                //filterItems:state.items.filter(el=>el.category === state.categoryName.name)
            }
        case FILTER_BY_CATEGORY:
            return {
                ...state,
                //categoryName:state.category.find(el => el.nameEng === action.category),
                //filterItems:state.items.filter(el=>el.category === action.category)
                filterItems: state.items.filter(el => el.category === state.categoryName.name)
            }
        case SHOW_ALL:
            return {
                ...state,
                filterItems: state.items,
            }
        case SET_ITEMS:
            return {
                ...state,
                items: action.items,
            }
        case SET_CATEGORY_API:
            return {
                ...state,
                category: action.category,
            }
        default:
            return state
    }
}

type filterByCategoryActionType = {
    type: typeof FILTER_BY_CATEGORY
}

type setCategoryActionType = {
    type: typeof SET_CATEGORY,
    category: string
}

type showAllActionType = {
    type: typeof SHOW_ALL
}

type setItemsActionType = {
    type: typeof SET_ITEMS,
    items: Array<ItemsType>
}

type setCategoryApiActionType = {
    type: typeof SET_CATEGORY_API,
    category: Array<CategoryType>
}

export let filterByCategorySuccess = ():filterByCategoryActionType => ({ type: FILTER_BY_CATEGORY })
export let setCategory = (category:string):setCategoryActionType => ({ type: SET_CATEGORY, category })
export let showAllSuccess = ():showAllActionType => ({ type: SHOW_ALL })
export let setItems = (items:Array<ItemsType>):setItemsActionType => ({ type: SET_ITEMS, items })
export let setCategoryApi = (category:Array<CategoryType>):setCategoryApiActionType => ({ type: SET_CATEGORY_API, category })

export let filterByCategory = (category: string) => (dispatch:any) => {
    dispatch(setCategory(category))
    dispatch(filterByCategorySuccess())
}

export let loadItems = () => async (dispatch:any) => {
    let data = await menuApi.getItems()
    dispatch(setItems(data))
}

export let loadCategory = () => async (dispatch:any) => {
    let data = await menuApi.getCategory()
    dispatch(setCategoryApi(data))
}


export default menuReducer