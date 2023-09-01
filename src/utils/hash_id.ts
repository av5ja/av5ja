import { WeaponInfoMain } from "../enum/weapon_info_main"

export type Id = WeaponInfoMain.Id 

/**
 * IDからハッシュを計算する
 * @param id 
 * @returns 
 */
export function hash(id: WeaponInfoMain.Id | number): WeaponInfoMain.Hash {
    return WeaponInfoMain.Hash[WeaponInfoMain.Id[id]]
}

/**
 * HashからIDを計算する
 * @param hash 
 * @returns 
 */
export function id(hash: WeaponInfoMain.Hash | string): string {
    return WeaponInfoMain.Id[Object.entries(WeaponInfoMain.Hash).find(([, value]) => value === hash)?.[0] ?? WeaponInfoMain.Hash.Dummy]
}
