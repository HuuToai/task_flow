import{u as v}from"./use-menu-rR8rP7ih.js";import{u as I}from"./use-axios-BjUjc9os.js";import{_ as C,f as b,d as S,r as p,o as n,a as $,w as s,b as a,c as o,g as d,x as j,j as _,F as x,i as h}from"./index-2PiHdJuC.js";import{M as w}from"./index-D70LART2.js";b([]);const B=S({created(){localStorage.getItem("accessToken")||this.$router.push({name:"admin-login"})},setup(){v().onSelectedKeys(["admin-projects"]);const e=b([]),g=[{title:"#",key:"index"},{title:"Tên dự án",key:"text",dataIndex:"text"},{title:"Mô tả",dataIndex:"description",key:"description"},{title:"Thời lượng",dataIndex:"duration",key:"duration"},{title:" Tiến độ",dataIndex:"progress",key:"progress"},{title:"Thêm bởi",dataIndex:"start_date",key:"start_date"},{title:"Thêm bởi",dataIndex:"end_date",key:"end_date"},{title:"Trạng thái tài khoản",key:"is_active"},{title:"Phòng ban",dataIndex:"assignee",key:"assignee"},{title:"Công cụ",key:"action",fixed:"right"}],l=I(),k=localStorage.getItem("accessToken");k&&l.initializeAxios(k);const f=async()=>{try{const t=await l.axiosInstance.get("/projects");e.value=t.data}catch(t){console.log(t)}},u=t=>{l.axiosInstance.delete(`/users/delete/${t}`).then(c=>{c.status===200&&(h.success("Xóa người dùng thành công"),getUsers())}).catch(c=>{console.log(c),h.error("Xóa người dùng thất bại")})},r=t=>{w.confirm({title:"Bạn có chắc chắn muốn xóa người dùng này?",okText:"Xóa",okType:"danger",cancelText:"Hủy",onOk:()=>{u(t)}})};return f(),{projects:e,columns:g,confirmDelete:r}}}),M={class:"row mb-3"},D={class:"col-12 justify-content-end d-flex"},N={class:"row"},V={class:"col-12"},X={key:0},A={key:0,class:"text-primary"},F={key:1,class:"text-danger"};function K(i,e,g,l,k,f){const u=p("router-link"),r=p("a-button"),t=p("a-table"),c=p("a-card");return n(),$(c,{title:"Tài khoản",style:{width:"100%"}},{default:s(()=>[a("div",M,[a("div",D,[o(r,{type:"primary"},{default:s(()=>[o(u,{to:{name:"users-register"}},{default:s(()=>e[0]||(e[0]=[a("i",{class:"fa-solid fa-user-plus"},null,-1)])),_:1})]),_:1})])]),a("div",N,[a("div",V,[o(t,{dataSource:i.users,columns:i.columns,scroll:{x:576}},{bodyCell:s(({column:y,index:T,record:m})=>[y.key==="index"?(n(),d("span",X,j(T+1),1)):_("",!0),y.key==="is_active"?(n(),d(x,{key:1},[m.is_active==1?(n(),d("span",A," Kích hoạt ")):m.is_active!==1?(n(),d("span",F," Bị khóa ")):_("",!0)],64)):_("",!0),y.key==="action"?(n(),d(x,{key:2},[o(u,{to:{name:"admin-users-edit",params:{id:m.id}}},{default:s(()=>[o(r,{type:"primary",class:"me-sm-2 mb-2 mb-sm-0"},{default:s(()=>e[1]||(e[1]=[a("i",{class:"fa-regular fa-pen-to-square"},null,-1)])),_:1})]),_:2},1032,["to"]),o(r,{type:"primary",danger:"",onClick:P=>i.confirmDelete(m.id)},{default:s(()=>e[2]||(e[2]=[a("i",{class:"fa-solid fa-trash"},null,-1)])),_:2},1032,["onClick"])],64)):_("",!0)]),_:1},8,["dataSource","columns"])])])]),_:1})}const H=C(B,[["render",K]]);export{H as default};