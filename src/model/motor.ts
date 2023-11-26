import { Kendaraan } from './kendaraan'

export class Motor extends Kendaraan {
  constructor(kode: string, cc: number, hargaBeli: number, keuntungan: number) {
    super('Motor', kode, cc, hargaBeli, keuntungan)
  }
}
