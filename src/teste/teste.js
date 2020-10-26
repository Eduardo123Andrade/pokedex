import axios from 'axios'

export async function getAxios () {
    const result = await axios.get('algum link')
    // result.data => JSON
    /**
     * {
     *  nome: 'Eduardo'
     * }
     * 
     * 
     * console.log(result.data.nome) => Eduardo
     */
    // .then(result => console.log("ok"))
  // return axios.get()
//   ...
console.log()
}
