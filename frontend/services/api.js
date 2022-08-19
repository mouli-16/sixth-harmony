// import axios from 'axios'


// export default {
//   api: ((()=>{
//     const i = axios.create({
//       baseURL: process.env.NEXT_PUBLIC_BE_URL,
//     })
//     const t = localStorage.getItem('access_token')
//     if(t) {
//       i.defaults.headers.common['X-Access-Token'] = t
//     }
//     return i
//   })()),
//   async loginOTP(entry) {
//     const res = await axios.post('http://localhost:5000/auth/otp', entry)
//     return res.status
//   },
//   async loginVerify(entry) {
//     const res = await axios.post('http://localhost:5000/auth/verify', entry)
//     if (res.status === 200) {
//       localStorage.setItem('access_token', res.data.token)
//       this.api.defaults.headers.common['X-Access-Token'] = res.data.token;
//     }
//   }
// };
