import{r,o as u,c as b,b as e,w as i,v as p,h as _,t as m,g as x}from"./index-b0996cd7.js";import{C as h,r as f,n as d}from"./reinit-1fd21b3b.js";const v={class:"w-full p-6 mx-auto"},w={class:"flex flex-wrap -mx-3"},g={class:"w-full max-w-full px-3"},y={class:"relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border"},k=e("div",{class:"p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl"},[e("h6",{class:"mb-0"},"评论区设置")],-1),C={class:"flex-auto p-4"},S={class:"flex flex-col pl-0 mb-0 rounded-lg"},N={class:"relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit"},B={class:"min-h-6 mb-0.5 block pl-0"},D=e("label",{class:"label-text"},"启用评论区",-1),O=e("h6",{class:"mt-6 font-bold leading-tight uppercase text-xs text-slate-500"},"评论区特殊设置",-1),V={class:"flex flex-col pl-0 mb-0 rounded-lg"},J={class:"label-text"},A=["disabled"],M=e("br",null,null,-1),n="CommentSetting",E={__name:"comment",setup(T){const t=r({enable:!0,delay:3}),a=new h("CyanAcc","CyanAccDB"),c=async()=>{await a.write(n,JSON.stringify(t.value)),await f()?d.success("设置已保存并应用"):d.info("设置已保存，但尚未应用")};return(async()=>{const o=JSON.parse(await a.read(n)||"{}");Object.keys(o).length!==0?t.value=o:await a.write(n,JSON.stringify(t.value))})(),(o,l)=>(u(),b("div",v,[e("div",w,[e("div",g,[e("div",y,[k,e("div",C,[e("ul",S,[e("li",N,[e("div",B,[i(e("input",{class:"check-btn",type:"checkbox","onUpdate:modelValue":l[0]||(l[0]=s=>t.value.enable=s)},null,512),[[p,t.value.enable]]),D])])]),O,e("ul",V,[e("label",J,[_("评论区等待时间:"),e("span",null,m(t.value.delay)+"秒",1)]),i(e("input",{type:"range",min:"3",max:"20",class:"slider w-full",disabled:!t.value.enable,"onUpdate:modelValue":l[1]||(l[1]=s=>t.value.delay=s)},null,8,A),[[x,t.value.delay,void 0,{number:!0}]])]),M,e("button",{type:"button",class:"apply-btn",onClick:l[2]||(l[2]=s=>c())},"保存")])])])])]))}};export{E as default};
