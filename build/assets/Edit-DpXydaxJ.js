import{l as M,m as O,E as j,e as u,x as z,f as G,G as H,K as I,D as a,L as X,r as W,z as J,o as y,c as k,b as e,t as i,u as o,h as C,a as p,d as w,A,F as Y,n as d,k as Q,H as Z,g as $,w as R}from"./app-DmP38fiz.js";import{d as ee}from"./debounce-XxfNuXcX.js";import{b as te,a as se,u as oe}from"./notifier-oDSeFarO.js";import{u as ae,a as ne,o as le}from"./switch-DdjbC4Z_.js";import"./isObjectLike-mqpIr8Ea.js";import"./isSymbol-BpHlYMiq.js";const ie={class:"mr:8 font:24"},re={class:"form-table",role:"presentation"},ue={scope:"row"},ce={class:"flex"},de=e("span",{class:"text"},"Paste Token",-1),me=e("p",{class:"description"}," Paste the Token produced by Yabe Ukiyo to fill the below fields automatically. ",-1),fe={scope:"row"},ve=e("span",{class:"fg:red-35"},"*",-1),ye={scope:"row"},pe=e("span",{class:"fg:red-35"},"*",-1),be={key:0,class:"description"},ge={key:0},he={class:"font:semibold"},_e=e("br",null,null,-1),ke=e("span",{class:"font:semibold"},"Bricks: ",-1),we=e("br",null,null,-1),xe=e("span",{class:"font:semibold"},"Yabe Ukiyo: ",-1),De={scope:"row"},Ue=e("span",{class:"fg:red-35"},"*",-1),Te={class:"flex"},Ce={class:"rel flex mr:8 align-items:center"},Ve=["type"],Be=e("p",{class:"description"},' You also can use the "My Templates Access" password provided by the remote site here. ',-1),Ne={scope:"row"},Re={class:"flex align-items:center"},Se=["disabled"],Le={__name:"Edit",setup(Fe){const x=te(),E=M(),S=O(),D=se(),m=oe(),U=j(),f=u({}),V=u(!1),T=u(!0),b=u(""),g=u(""),r=u(!0),v=u(""),F=u(null),B={status:null,connected:!1,yabeUkiyoDetected:!1,bricksDetected:!1},n=u({...B});z(v,ee((s,t)=>{s!==t&&(n.value={...B},s!==""&&F.value.checkValidity()&&(n.value.status="loading",x.request({method:"POST",url:"/admin/remotes/check-connection",data:{remote_url:s.trim().replace(/\/$/,"")}}).then(l=>{l.status===200?(n.value={...n.value,status:!0,connected:!0},n.value.yabeUkiyoDetected=l.data.namespaces.find(_=>_==="yabe-ukiyo/v1")!==void 0,n.value.bricksDetected=l.data.namespaces.find(_=>_==="bricks/v1")!==void 0):n.value.status=!1}).catch(l=>{n.value={...B,status:!1}})))},100));async function q(){return m.add("remotes.edit:fetch-item"),x.request({method:"GET",url:`/admin/remotes/detail/${E.params.id}`}).then(s=>s.data).then(s=>{b.value=s.license_key,g.value=s.title,r.value=s.status,v.value=s.remote_url,f.value=s}).finally(()=>{m.remove("remotes.edit:fetch-item")})}function L(s){s.preventDefault(),m.add("remote.edit:send-form");let t=x.request({method:"POST",url:`/admin/remotes/update/${f.value.id}`,data:{title:g.value,license_key:b.value,status:r.value,remote_url:v.value}}).then(l=>{U.add({type:"success",message:"<p>Remote updated successfully.</p>"}),q()}).finally(()=>{m.remove("remote.edit:send-form")});D.async(t,"Remote updated successfully.",void 0,"Updating remote...")}function P(){confirm(a("Are you sure you want to delete the remote?","yabe-ukiyo"))&&(V.value=!0,m.add("remotes.edit:delete"),x.request({method:"POST",url:`/admin/remotes/delete/${f.value.id}`}).then(s=>{S.push({name:"remotes.index"})}).catch(function(s){D.alert(s.message)}).finally(()=>{V.value=!1,m.remove("remotes.edit:delete")}))}function K(){navigator.clipboard.readText().then(s=>{try{const t=atob(s).split(`
`);t.length===3&&(v.value=t[0],g.value=t[1],b.value=t[2])}catch{}})}const N=G(()=>f.value?f.value.license_key!==b.value||f.value.title!==g.value||f.value.status!==r.value||f.value.remote_url!==v.value:!1),h=u(null);return z(N,(s,t)=>{s&&!h.value?h.value=U.add({type:"warning",message:"<p>You have unsaved changes.</p>"}):(U.remove(h.value),h.value=null)}),H(()=>{let s=q();D.async(s,"Remote details loaded.",t=>{D.alert(t.response&&t.response.status===404?"Remote not found.":"Failed to load remote details."),S.go(-1)},"Fetching remote details...")}),I((s,t,l)=>{N.value&&!confirm(a("You have unsaved changes. Are you sure you want to leave?","yabe-ukiyo"))||l()}),window.onbeforeunload=function(s){if(N.value)return a("You have unsaved changes. Are you sure you want to leave?","yabe-ukiyo")},X(()=>{window.onbeforeunload=null,h.value&&U.remove(h.value)}),(s,t)=>{const l=W("font-awesome-icon"),_=J("ripple");return y(),k(Y,null,[e("span",ie,"» "+i(o(a)("Edit","yabe-ukiyo")),1),e("form",{onSubmit:L},[e("div",null,[e("table",re,[e("tbody",null,[e("tr",null,[e("th",ue,[e("label",null,i(o(a)("Token","yabe-ukiyo")),1)]),e("td",null,[e("div",ce,[C((y(),k("div",{onClick:t[0]||(t[0]=c=>K()),class:"button flex align-items:center"},[p(l,{icon:["fas","paste"],class:"font:15 mr:6"}),de])),[[_]])]),me])]),e("tr",null,[e("th",fe,[e("label",null,[w(i(o(a)("Title","yabe-ukiyo"))+" ",1),ve])]),e("td",null,[C(e("input",{type:"text",name:"title","onUpdate:modelValue":t[1]||(t[1]=c=>g.value=c),required:""},null,512),[[A,g.value,void 0,{trim:!0,lazy:!0}]])])]),e("tr",null,[e("th",ye,[e("label",null,[w(i(o(a)("Remote URL","yabe-ukiyo"))+" ",1),pe])]),e("td",null,[C(e("input",{type:"url",ref_key:"remoteUrlField",ref:F,name:"remote_url","onUpdate:modelValue":t[2]||(t[2]=c=>v.value=c),required:""},null,512),[[A,v.value,void 0,{trim:!0,lazy:!0}]]),n.value.status!==null?(y(),k("p",be,[n.value.status==="loading"?(y(),k("span",ge,[p(l,{icon:["fas","spinner"],class:"mr:4 fg:gray-60 animation:rotate|linear|1s|infinite"}),w(" "+i(o(a)("Connecting","yabe-ukiyo"))+"... ",1)])):(y(),k(Y,{key:1},[e("span",he,i(o(a)("Server","yabe-ukiyo"))+": ",1),e("span",{class:d(n.value.connected?"fg:green-50":"fg:red-40")},i(n.value.connected?o(a)("Connected","yabe-ukiyo"):o(a)("Failed to connect","yabe-ukiyo")),3),_e,ke,e("span",{class:d(n.value.bricksDetected?"fg:green-50":"fg:red-40")},i(n.value.bricksDetected?o(a)("Detected","yabe-ukiyo"):o(a)("Not detected","yabe-ukiyo")),3),we,xe,e("span",{class:d(n.value.yabeUkiyoDetected?"fg:green-50":"fg:yellow-60")},i(n.value.yabeUkiyoDetected?o(a)("Detected","yabe-ukiyo"):o(a)("Not detected","yabe-ukiyo")),3)],64))])):Q("",!0)])]),e("tr",null,[e("th",De,[e("label",null,[w(i(o(a)("License Key","yabe-ukiyo"))+" ",1),Ue])]),e("td",null,[e("div",Te,[e("div",Ce,[C(e("input",{type:T.value?"text":"password",name:"secret_license_key","onUpdate:modelValue":t[3]||(t[3]=c=>b.value=c),autocomplete:"current-password",class:"min-w:300 hide::-ms-reveal",required:""},null,8,Ve),[[Z,b.value]]),e("span",{onClick:t[4]||(t[4]=c=>T.value=!T.value),class:"flex align-items:center ml:-24 fg:gray-60 fg:gray-40:hover cursor:pointer"},[T.value?(y(),$(l,{key:1,icon:["fas","eye-slash"],class:"font:15"})):(y(),$(l,{key:0,icon:["fas","eye"],class:"font:15"}))])])]),Be])]),e("tr",null,[e("th",Ne,[e("label",null,i(o(a)("Status","yabe-ukiyo")),1)]),e("td",null,[p(o(le),{as:"div",class:"flex align-items:center"},{default:R(()=>[p(o(ae),{modelValue:r.value,"onUpdate:modelValue":t[5]||(t[5]=c=>r.value=c),class:d([[r.value?"bg:sky-60":"opacity:.5 bg:gray-20"],"rel inline-flex p:0 h:24 w:44 flex-shrink:0 cursor:pointer rounded b:2 b:transparent transition-property:color,background-color,border-color,text-decoration-color,fill,stroke transition-duration:200 transition-timing-function:cubic-bezier(0.4,0,0.2,1) box-shadow:rgb(255,255,255)|0|0|0|2,rgb(14,165,233)|0|0|0|4,rgba(0,0,0,0)|0|0|0|0:focus outline:2|solid|transparent:focus"])},{default:R(()=>[e("span",{class:d([[r.value?"translateX(20)":"translateX(0)"],"pointer-events:none rel inline-block font:12 h:20 w:20 rounded bg:white transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter transition-duration:200 transition-timing-function:cubic-bezier(0.4,0,0.2,1) box-shadow:rgb(255,255,255)|0|0|0|0,rgba(59,130,246,0.5)|0|0|0|0,rgba(0,0,0,0.1)|0|1|3|0,rgba(0,0,0,0.1)|0|1|2|-1"])},[e("span",{"aria-hidden":"true",class:d([[r.value?"opacity:0 transition-timing-function:ease-out transition-duration:100":"opacity:1 transition-timing-function:ease-in transition-duration:200"],"abs inset:0 flex h:full w:full align-items:center justify-content:center tw-transition-opacity"])},[p(l,{icon:["fas","xmark"],class:"fg:gray-60"})],2),e("span",{"aria-hidden":"true",class:d([[r.value?"opacity:1 transition-timing-function:ease-in transition-duration:200":"opacity:0 transition-timing-function:ease-out transition-duration:100"],"abs inset:0 flex h:full w:full align-items:center justify-content:center tw-transition-opacity"])},[p(l,{icon:["fas","check"],class:"fg:sky-60"})],2)],2)]),_:1},8,["modelValue","class"]),p(o(ne),{as:"span",class:d([[r.value?"fg:black":"fg:gray-60"],"ml:8 font:medium tw-cursor-pointer"])},{default:R(()=>[w(i(r.value?"enabled":"disabled"),1)]),_:1},8,["class"])]),_:1})])])])]),e("div",Re,[e("button",{type:"submit",name:"save",id:"save",disabled:o(m).isBusy,class:"button button-primary button-large",value:"save"},"Save",8,Se),e("a",{class:d([{"cursor:wait":o(m).isBusy},"ml:12 fg:red-40 text:underline cursor:pointer fg:red-30:hover"]),onClick:P},i(V.value?"Deleting...":"Delete"),3)])])],32)],64)}}};export{Le as default};
