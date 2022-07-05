"use strict";const btnPreview=document.querySelector(".js-btnPreview"),namePreview=document.querySelector(".js-namePreview"),positionPreview=document.querySelector(".js-positionPreview"),imgPreview=document.querySelector(".js-imgPreview"),iconPreview=document.querySelector(".js-iconPreview"),allInputs=document.querySelector(".js_allInputs"),titleDesign=document.querySelector(".js__design"),sectionDesign=document.querySelector(".js-sectionDesign"),arrowDesign=document.querySelector(".js_arrowDesign"),sectionFill=document.querySelector(".js-sectionFill"),titleFill=document.querySelector(".js__fill"),arrowFill=document.querySelector(".js_arrowFill");let inputName=document.querySelector(".js-inputName"),inputPosition=document.querySelector(".js-inputPosition"),addImage=document.querySelector(".js-inputImage"),inputEmail=document.querySelector(".js-inputEmail"),inputPhone=document.querySelector(".js-inputPhone"),inputLinkedin=document.querySelector(".js-inputLinkedin"),inputGithub=document.querySelector(".js-inputGithub");const contentShareOne=document.querySelector(".js__content_shareOne"),titleShare=document.querySelector(".js__share"),arrowShare=document.querySelector(".js_arrowShare"),btnShare=document.querySelector(".js-btnShare"),contentShareTwo=document.querySelector(".js__content-shareTwo"),handleClick=e=>{const t=e.currentTarget;t.classList.contains("js__design")?(sectionDesign.classList.toggle("hidden"),arrowDesign.classList.toggle("arrow-translate"),sectionFill.classList.add("hidden"),contentShareOne.classList.add("hidden"),arrowFill.classList.add("arrow-translate"),arrowShare.classList.add("arrow-translate")):t.classList.contains("js__fill")?(sectionFill.classList.toggle("hidden"),arrowFill.classList.toggle("arrow-translate"),sectionDesign.classList.add("hidden"),contentShareOne.classList.add("hidden"),arrowDesign.classList.add("arrow-translate"),arrowShare.classList.add("arrow-translate")):t.classList.contains("js__share")&&(contentShareOne.classList.toggle("hidden"),arrowShare.classList.toggle("arrow-translate"),sectionFill.classList.add("hidden"),sectionDesign.classList.add("hidden"),arrowFill.classList.add("arrow-translate"),arrowDesign.classList.add("arrow-translate"))};titleDesign.addEventListener("click",handleClick),titleFill.addEventListener("click",handleClick),titleShare.addEventListener("click",handleClick);const handleClickBtn=e=>{e.preventDefault(),contentShareTwo.classList.remove("hidden"),btnShare.classList.add("btn-share-grey")};btnShare.addEventListener("click",handleClickBtn);const data={palette:1,name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""},linkPhone=document.querySelector(".js_link_phone"),linkEmail=document.querySelector(".js_link_email"),linkLinkedin=document.querySelector(".js_link_linkedin"),linkGithub=document.querySelector(".js_link_github");function previewCard(){namePreview.innerHTML=data.name,positionPreview.innerHTML=data.job,linkPhone.href=data.phone,linkLinkedin.href=data.linkedin,linkGithub.href=data.github}const handleInput=e=>{const t=e.target.name,n=e.target.value;data[t]=n,previewCard()};allInputs.addEventListener("keyup",handleInput);