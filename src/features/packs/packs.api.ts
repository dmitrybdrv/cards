import { instance } from 'common/api'
import { CardPacksType, PacksParamsType } from './packs.types'

/**
 * packsApi - объект с методами для работы с колодами (packs)
 */
export const packsApi = {

   getPacks(params?: PacksParamsType) {
       return instance.get<CardPacksType>(`/cards/pack`, { params })
   }

}