import{u as n,av as t,i}from"./index-2PiHdJuC.js";function p(){const o=n(),s=t.create({baseURL:"http://taskflow.local/api",headers:{"Content-Type":"application/json"}});return s.interceptors.response.use(e=>e,e=>(e.response&&e.response.status===401&&(i.error("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại."),localStorage.removeItem("accessToken"),o.push({name:"admin-login"})),Promise.reject(e))),{axiosInstance:s,initializeAxios:e=>{s.defaults.headers.common.Authorization=`Bearer ${e}`}}}export{p as u};