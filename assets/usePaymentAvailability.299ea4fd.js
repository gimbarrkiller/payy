import{j as u,ag as c,h as i,k as m}from"./gpb-fns.1cc41912.js";import{u as p}from"./useLoader.c46ce039.js";async function l(s){const a=u(),t=c(),{fetchWithLoader:o}=p(),{checkPaymentState:n}=i(),{state:r}=m(),e=a.hash.slice(1);e&&!a.params.payment&&await o(async()=>{s.value=await r(e),await n(s.value,e)},!0),e&&a.params.payment&&(s.value=JSON.parse(a.params.payment)),e||t.push({name:"main",query:a.query})}export{l as u};
