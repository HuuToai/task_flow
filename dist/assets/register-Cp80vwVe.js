import{_ as k,d as E,l as y,u as M,f as S,m as C,n as U,t as x,r as m,o as V,g as $,c as r,w as u,p as q,i as h,b as s,q as l}from"./index-CWKSPOWA.js";import{u as j}from"./use-menu-CfziPbpX.js";import{u as O}from"./use-axios-Ce0bIm_6.js";import{E as T,u as L}from"./use-erorrs-CBB6RLYs.js";import{_ as z}from"./user-D9ry9BRp.js";const A=E({components:{ErrorMessage:T},setup(){const o=L(),e=y(()=>o.errors);j().onSelectedKeys(["users-register"]);const w=M(),v=S([]),n=C({name:"",email:"",password:"",password_confirmation:"",department_id:[]}),c=localStorage.getItem("accessToken"),i=O();c&&i.initializeAxios(c);const g=async()=>{try{const t=await i.axiosInstance.get("/users/create");v.value=t.data.departments}catch(t){console.error("Lỗi khi lấy danh sách phòng ban:",t)}},d=(t,p)=>p.label.toLowerCase().indexOf(t.toLowerCase())>=0,f=()=>{o.clearAllErrors(),n.name?n.name.length<3&&o.setError("name","Tên người dùng phải có ít nhất 3 ký tự!"):o.setError("name","Vui lòng nhập vào tên người dùng!"),n.email?/\S+@\S+\.\S+/.test(n.email)||o.setError("email","Email không hợp lệ!"):o.setError("email","Vui lòng nhập vào Email!"),n.password?n.password.length<6&&o.setError("password","Mật khẩu phải có ít nhất 6 ký tự!"):o.setError("password","Vui lòng nhập vào mật khẩu!"),n.password!==n.password_confirmation?o.setError("password_confirmation","Xác nhận mật khẩu không chính xác!"):n.password_confirmation||o.setError("password_confirmation","Vui lòng nhập xác nhận mật khẩu"),(!n.department_id||n.department_id.length===0)&&o.setError("department_id","Vui lòng chọn phòng ban"),Object.keys(e.value).length===0&&i.axiosInstance.post("/users/register",n).then(t=>{t.status==201&&(h.success(t.data.message),w.push({name:"admin-users"}))}).catch(t=>{if(t.response&&t.response.data.errors){const p=t.response.data.errors;Object.keys(p).forEach(a=>{const b=p[a][0];o.setError(a,b)})}else h.error(t.response.data.message)})};return U(()=>{g()}),{departments:v,...x(n),errors:e,filterOption:d,createUsers:f}}}),B={class:"row"},I={class:"col-12 col-sm-4"},X={class:"row"},N={class:"col-12 d-flex justify-content-center mb-3"},P={class:"col-12 d-flex justify-content-center"},R={class:"col-12 col-sm-8"},H={class:"row mb-3"},K={class:"col-12 col-sm-3 text-start text-sm-end"},D={class:"col-12 col-sm-5"},F={class:"row mb-3"},G={class:"col-12 col-sm-3 text-start text-sm-end"},J={class:"col-12 col-sm-5"},Q={class:"row mb-3"},W={class:"col-12 col-sm-3 text-start text-sm-end"},Y={class:"col-12 col-sm-5"},Z={class:"row mb-3"},ss={class:"col-12 col-sm-3 text-start text-sm-end"},es={class:"col-12 col-sm-5"},os={class:"row mb-3"},ts={class:"col-12 col-sm-3 text-start text-sm-end"},rs={class:"col-12 col-sm-5"},ns={class:"row"},as={class:"col-12 d-grid d-sm-flex justify-content-sm-end mx-auto"};function ls(o,e,_,w,v,n){const c=m("a-avatar"),i=m("a-button"),g=m("a-input"),d=m("ErrorMessage"),f=m("a-select"),t=m("a-input-password"),p=m("a-card");return V(),$("form",{onSubmit:e[6]||(e[6]=q(a=>o.createUsers(),["prevent"]))},[r(p,{title:"Tạo mới tài khoản",style:{width:"100%"}},{default:u(()=>[s("div",B,[s("div",I,[s("div",X,[s("div",N,[r(c,{shape:"square",size:200},{icon:u(()=>e[7]||(e[7]=[s("img",{src:z,alt:"avatar"},null,-1)])),_:1})]),s("div",P,[r(i,{type:"primary"},{default:u(()=>e[8]||(e[8]=[s("i",{class:"fa-solid fa-plus me-2"},null,-1),s("span",null,"Chọn ảnh",-1)])),_:1})])])]),s("div",R,[s("div",H,[s("div",K,[s("label",null,[e[9]||(e[9]=s("span",{class:"text-danger me-1"},"*",-1)),s("span",{class:l({"text-danger":o.errors.name})}," Tên tài khoản ",2)])]),s("div",D,[r(g,{required:"",placeholder:"Tên tài khoản","allow-clear":"",value:o.name,"onUpdate:value":e[0]||(e[0]=a=>o.name=a),class:l({"input-danger":o.errors.name})},null,8,["value","class"]),e[10]||(e[10]=s("div",{class:"w-100"},null,-1)),r(d,{message:o.errors.name},null,8,["message"])])]),s("div",F,[s("div",G,[s("label",null,[e[11]||(e[11]=s("span",{class:"text-danger me-1"},"*",-1)),s("span",{class:l({"text-danger":o.errors.email})}," Email ",2)])]),s("div",J,[r(g,{placeholder:"Email","allow-clear":"",required:"",id:"email",value:o.email,"onUpdate:value":e[1]||(e[1]=a=>o.email=a),class:l({"input-danger":o.errors.email})},null,8,["value","class"]),e[12]||(e[12]=s("div",{class:"w-100"},null,-1)),r(d,{message:o.errors.email},null,8,["message"])])]),s("div",Q,[s("div",W,[s("label",null,[e[13]||(e[13]=s("span",{class:"text-danger me-1"},"*",-1)),s("span",{class:l({"text-danger":o.errors.department_id})}," Phòng ban",2)])]),s("div",Y,[r(f,{"show-search":"",placeholder:"Phòng ban",style:{width:"100%"},options:o.departments,"filter-option":o.filterOption,"allow-clear":"",value:o.department_id,"onUpdate:value":e[2]||(e[2]=a=>o.department_id=a),class:l({"select-danger":o.errors.department_id})},null,8,["options","filter-option","value","class"]),e[14]||(e[14]=s("div",{class:"w-100"},null,-1)),r(d,{message:o.errors.department_id},null,8,["message"])])]),s("div",Z,[s("div",ss,[s("label",null,[e[15]||(e[15]=s("span",{class:"text-danger me-1"},"*",-1)),s("span",{class:l({"text-danger":o.errors.password})}," Mật khẩu ",2)])]),s("div",es,[r(t,{placeholder:"Mật khẩu","allow-clear":"",required:"",value:o.password,"onUpdate:value":e[3]||(e[3]=a=>o.password=a),class:l({"input-danger":o.errors.password})},null,8,["value","class"]),e[16]||(e[16]=s("div",{class:"w-100"},null,-1)),r(d,{message:o.errors.password},null,8,["message"])])]),s("div",os,[s("div",ts,[s("label",null,[e[17]||(e[17]=s("span",{class:"text-danger me-1"},"*",-1)),s("span",{class:l({"text-danger":o.errors.password_confirmation})}," Xác nhận mật khẩu ",2)])]),s("div",rs,[r(t,{placeholder:"Xác nhận mật khẩu","allow-clear":"",required:"",value:o.password_confirmation,"onUpdate:value":e[4]||(e[4]=a=>o.password_confirmation=a),class:l({"input-danger":o.errors.password_confirmation})},null,8,["value","class"]),e[18]||(e[18]=s("div",{class:"w-100"},null,-1)),r(d,{message:o.errors.password_confirmation},null,8,["message"])])])])]),s("div",ns,[s("div",as,[r(i,{class:"me-0 me-sm-2 mb-2 mb-sm-0",type:"primary",danger:"",ghost:"",onClick:e[5]||(e[5]=a=>o.$router.push({name:"admin-users"}))},{default:u(()=>e[19]||(e[19]=[s("span",null,"Hủy",-1)])),_:1}),r(i,{type:"primary","html-type":"submit"},{default:u(()=>e[20]||(e[20]=[s("span",null,"Lưu",-1)])),_:1})])])]),_:1})],32)}const cs=k(A,[["render",ls]]);export{cs as default};