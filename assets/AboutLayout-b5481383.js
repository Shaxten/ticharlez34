import{u as d,r as u,o as m,c,b as o,w as r,k as n,p as v,q as f,h as b}from"./index-14a1c28b.js";const h={id:"form"},y={__name:"AboutLayout",setup(w){const i=d(),a=u(""),l=u(""),p=()=>{f(b(),a.value,l.value).then(e=>{console.log("Successfully registered!"),i.push("/ticharlez34/")}).catch(e=>{console.log(e.code),alert(e.message)})};return(e,t)=>(m(),c("form",{onSubmit:t[2]||(t[2]=v((...s)=>e.onSubmit&&e.onSubmit(...s),["prevent"]))},[o("div",h,[o("p",null,[r(o("input",{type:"email",placeholder:"email","onUpdate:modelValue":t[0]||(t[0]=s=>a.value=s)},null,512),[[n,a.value]])]),o("p",null,[r(o("input",{type:"password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=s=>l.value=s)},null,512),[[n,l.value]])]),o("button",{type:"submit",onClick:p},"Create account")])],32))}};export{y as default};
