import { WeaponInfoMain, hash, id } from "../src/utils/weapon_info_main";

describe('Enum', () => {
    const verifier: string = 'OwaTAOolhambwvY3RXSD-efxqdBEVNnQkc0bBJ7zaak';

    describe('WeaponInfoMain', () => {
        it('Id', () => {
            const all_cases: WeaponInfoMain.Id[] = Object.values(WeaponInfoMain.Id).filter((id) => !isNaN(id as number)) as WeaponInfoMain.Id[];
            console.log(all_cases.map((id) => hash(id)))
            expect(all_cases.length).toBe(69);
            
        });

        it('Hash', () => {
            const all_cases = Object.values(WeaponInfoMain.Hash)
            console.log(all_cases.map((hash) => id(hash)))
            expect(all_cases.length).toBe(69);
        });
    })
});
