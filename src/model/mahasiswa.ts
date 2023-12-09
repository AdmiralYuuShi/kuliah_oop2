export class Mahasiswa {
  npm: string | null
  nama: string | null 
  ipk: number | null

  constructor(npm: string, nama: string, ipk: number) {
    this.npm = npm
    this.nama = nama
    this.ipk = ipk
  }
}
