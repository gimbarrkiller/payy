import{i as f,I as L,E as h,q as m}from"./gpb-fns.1cc41912.js";function H(t={value:!1}){const{globalLoaderShow:s,globalLoaderHide:a}=f(),{localLoaderHandler:r,loadersHandler:u}=L(),{t:d}=h(),o=()=>{t.value=!0,document.title=d("tabTitle.processing")},e=()=>{t.value=!1},n=()=>{a(),e()};async function i(l,c=!1){c?(s(),await l(),setTimeout(a)):(o(),await l(),setTimeout(e))}return m(()=>{r({localeLoaderShow:o,localeLoaderHide:e}),u(n)}),{globalLoaderShow:s,globalLoaderHide:a,localeLoaderShow:o,localeLoaderHide:e,hideLoaders:n,fetchWithLoader:i}}export{H as u};
