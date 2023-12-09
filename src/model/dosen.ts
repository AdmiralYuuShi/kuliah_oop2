export class Dosen {
  nidn: string | null
  nama: string | null
  jenisKelamin: boolean | null

  constructor(nidn: string, nama: string, jenisKelamin: boolean) {
    this.nidn = nidn
    this.nama = nama
    this.jenisKelamin = jenisKelamin
  }
}

