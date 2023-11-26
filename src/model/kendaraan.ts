export class Kendaraan {
  tipe: string
  kode: string
  cc: number
  hargaBeli: number
  keuntungan: number

  constructor(tipe: string, kode: string, cc: number, hargaBeli: number, keuntungan: number) {
    this.tipe = tipe
    this.kode = kode
    this.cc = cc
    this.hargaBeli = hargaBeli
    this.keuntungan = keuntungan
  }
}

// <v-select
//   label="Select"
//   :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
// ></v-select>

// <template>
//   <v-form v-model="valid">
//     <v-container>
//       <v-row>
//         <v-col
//           cols="12"
//           md="4"
//         >
//           <v-text-field
//             v-model="firstname"
//             :rules="nameRules"
//             :counter="10"
//             label="First name"
//             required
//             hide-details
//           ></v-text-field>
//         </v-col>

//         <v-col
//           cols="12"
//           md="4"
//         >
//           <v-text-field
//             v-model="lastname"
//             :rules="nameRules"
//             :counter="10"
//             label="Last name"
//             hide-details
//             required
//           ></v-text-field>
//         </v-col>

//         <v-col
//           cols="12"
//           md="4"
//         >
//           <v-text-field
//             v-model="email"
//             :rules="emailRules"
//             label="E-mail"
//             hide-details
//             required
//           ></v-text-field>
//         </v-col>
//       </v-row>
//     </v-container>
//   </v-form>
// </template>

// <script>
//   export default {
//     data: () => ({
//       valid: false,
//       firstname: '',
//       lastname: '',
//       nameRules: [
//         value => {
//           if (value) return true

//           return 'Name is required.'
//         },
//         value => {
//           if (value?.length <= 10) return true

//           return 'Name must be less than 10 characters.'
//         },
//       ],
//       email: '',
//       emailRules: [
//         value => {
//           if (value) return true

//           return 'E-mail is requred.'
//         },
//         value => {
//           if (/.+@.+\..+/.test(value)) return true

//           return 'E-mail must be valid.'
//         },
//       ],
//     }),
//   }
// </script>
