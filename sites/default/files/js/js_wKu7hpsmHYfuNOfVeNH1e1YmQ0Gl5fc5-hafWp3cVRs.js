/* @license GNU-GPL-2.0-or-later https://www.drupal.org/licensing/faq */
(function(){const settingsElement=document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');window.drupalSettings={};if(settingsElement!==null)window.drupalSettings=JSON.parse(settingsElement.textContent);})();;
window.Drupal={behaviors:{},locale:{}};(function(Drupal,drupalSettings,drupalTranslations,console,Proxy,Reflect){Drupal.throwError=function(error){setTimeout(()=>{throw error;},0);};Drupal.attachBehaviors=function(context,settings){context=context||document;settings=settings||drupalSettings;const behaviors=Drupal.behaviors;Object.keys(behaviors||{}).forEach((i)=>{if(typeof behaviors[i].attach==='function')try{behaviors[i].attach(context,settings);}catch(e){Drupal.throwError(e);}});};Drupal.detachBehaviors=function(context,settings,trigger){context=context||document;settings=settings||drupalSettings;trigger=trigger||'unload';const behaviors=Drupal.behaviors;Object.keys(behaviors||{}).forEach((i)=>{if(typeof behaviors[i].detach==='function')try{behaviors[i].detach(context,settings,trigger);}catch(e){Drupal.throwError(e);}});};Drupal.checkPlain=function(str){str=str.toString().replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');return str;};Drupal.formatString=function(str,args){const processedArgs={};Object.keys(args||{}).forEach((key)=>{switch(key.charAt(0)){case '@':processedArgs[key]=Drupal.checkPlain(args[key]);break;case '!':processedArgs[key]=args[key];break;default:processedArgs[key]=Drupal.theme('placeholder',args[key]);break;}});return Drupal.stringReplace(str,processedArgs,null);};Drupal.stringReplace=function(str,args,keys){if(str.length===0)return str;if(!Array.isArray(keys)){keys=Object.keys(args||{});keys.sort((a,b)=>a.length-b.length);}if(keys.length===0)return str;const key=keys.pop();const fragments=str.split(key);if(keys.length){for(let i=0;i<fragments.length;i++)fragments[i]=Drupal.stringReplace(fragments[i],args,keys.slice(0));}return fragments.join(args[key]);};Drupal.t=function(str,args,options){options=options||{};options.context=options.context||'';if(typeof drupalTranslations!=='undefined'&&drupalTranslations.strings&&drupalTranslations.strings[options.context]&&drupalTranslations.strings[options.context][str])str=drupalTranslations.strings[options.context][str];if(args)str=Drupal.formatString(str,args);return str;};Drupal.url=function(path){return drupalSettings.path.baseUrl+drupalSettings.path.pathPrefix+path;};Drupal.url.toAbsolute=function(url){const urlParsingNode=document.createElement('a');try{url=decodeURIComponent(url);}catch(e){}urlParsingNode.setAttribute('href',url);return urlParsingNode.cloneNode(false).href;};Drupal.url.isLocal=function(url){let absoluteUrl=Drupal.url.toAbsolute(url);let {protocol}=window.location;if(protocol==='http:'&&absoluteUrl.indexOf('https:')===0)protocol='https:';let baseUrl=`${protocol}//${window.location.host}${drupalSettings.path.baseUrl.slice(0,-1)}`;try{absoluteUrl=decodeURIComponent(absoluteUrl);}catch(e){}try{baseUrl=decodeURIComponent(baseUrl);}catch(e){}return absoluteUrl===baseUrl||absoluteUrl.indexOf(`${baseUrl}/`)===0;};Drupal.formatPlural=function(count,singular,plural,args,options){args=args||{};args['@count']=count;const pluralDelimiter=drupalSettings.pluralDelimiter;const translations=Drupal.t(singular+pluralDelimiter+plural,args,options).split(pluralDelimiter);let index=0;if(typeof drupalTranslations!=='undefined'&&drupalTranslations.pluralFormula)index=count in drupalTranslations.pluralFormula?drupalTranslations.pluralFormula[count]:drupalTranslations.pluralFormula.default;else{if(args['@count']!==1)index=1;}return translations[index];};Drupal.encodePath=function(item){return window.encodeURIComponent(item).replace(/%2F/g,'/');};Drupal.deprecationError=({message})=>{if(drupalSettings.suppressDeprecationErrors===false&&typeof console!=='undefined'&&console.warn)console.warn(`[Deprecation] ${message}`);};Drupal.deprecatedProperty=({target,deprecatedProperty,message})=>{if(!Proxy||!Reflect)return target;return new Proxy(target,{get:(target,key,...rest)=>{if(key===deprecatedProperty)Drupal.deprecationError({message});return Reflect.get(target,key,...rest);}});};Drupal.theme=function(func,...args){if(func in Drupal.theme)return Drupal.theme[func](...args);};Drupal.theme.placeholder=function(str){return `<em class="placeholder">${Drupal.checkPlain(str)}</em>`;};Drupal.elementIsVisible=function(elem){return !!(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length);};Drupal.elementIsHidden=function(elem){return !Drupal.elementIsVisible(elem);};})(Drupal,window.drupalSettings,window.drupalTranslations,window.console,window.Proxy,window.Reflect);;
if(window.jQuery)jQuery.noConflict();document.documentElement.className+=' js';(function(Drupal,drupalSettings){const domReady=(callback)=>{const listener=()=>{callback();document.removeEventListener('DOMContentLoaded',listener);};if(document.readyState!=='loading')setTimeout(callback,0);else document.addEventListener('DOMContentLoaded',listener);};domReady(()=>{Drupal.attachBehaviors(document,drupalSettings);});})(Drupal,window.drupalSettings);;
"use strict";(function(Drupal,drupalSettings,navigator,window){'use strict';if('serviceWorker' in navigator)window.addEventListener('load',function(){let scope=drupalSettings.path.baseUrl;if(typeof drupalSettings.pwa.scope!=="undefined"&&drupalSettings.pwa.scope!==null)scope=drupalSettings.pwa.scope;navigator.serviceWorker.register(drupalSettings.pwa.installPath,{scope}).then(function(registration){console.log("Service Worker registered! Scope: ".concat(registration.scope));}).catch(function(err){console.log("Service Worker registration failed: ".concat(err));});});})(Drupal,drupalSettings,navigator,window);;
if(Element.prototype.closest){const eventTypes=['animationcancel','animationend','animationiteration','animationstart','blur','canplay','canplaythrough','change','click','compositionend','compositionstart','compositionupdate','contextmenu','dblclick','drag','dragend','dragenter','dragleave','dragover','dragstart','drop','durationchange','emptied','ended','focus','focusin','focusout','fullscreenchange','fullscreenerror','gotpointercapture','input','loadeddata','loadedmetadata','lostpointercapture','mousedown','mouseenter','mouseleave','mousemove','mouseout','mouseover','mouseup','pause','play','playing','pointercancel','pointerdown','pointerenter','pointerleave','pointermove','pointerout','pointerover','pointerup','ratechange','reset','seeked','seeking','show','slotchange','stalled','submit','suspend','SVGAbort','SVGError','SVGLoad','SVGResize','SVGScroll','SVGUnload','SVGZoom','timeupdate','touchcancel','touchend','touchmove','touchstart','transitionend','unload','volumechange','waiting'];eventTypes.forEach((eventType)=>{document.addEventListener(eventType,function(event){if(event.target!==document&&event.target.closest('.js--event--'+eventType)){let elem=event.target.closest('.js--event--'+eventType);const eventTypeCamel=eventType.charAt(0).toUpperCase()+eventType.slice(1).toLowerCase();elem.classList.add('js--event--'+eventType+'--once');if(elem.dataset["jsEvent"+eventTypeCamel+'Count'])elem.dataset["jsEvent"+eventTypeCamel+'Count']++;else elem.dataset["jsEvent"+eventTypeCamel+'Count']=1;elem.classList.toggle('js--event--'+eventType+'--toggle');}},false);});};
let scrollY=window.scrollY;var scrollClasses=function(e){if(window.scrollY>scrollY){document.body.classList.add('body-scroll--down');document.body.classList.remove('body-scroll--up');}else{if(window.scrollY<scrollY){document.body.classList.add('body-scroll--up');document.body.classList.remove('body-scroll--down');}}if(window.scrollY===0)document.body.classList.add('body-scroll--top');else document.body.classList.remove('body-scroll--top');scrollY=window.scrollY;};var debounce=function(fn,wait){var time=Date.now();return function(e){if((time+wait-Date.now())<0){fn(e);time=Date.now();}};};window.addEventListener('scroll',debounce(scrollClasses,20));;
let mutationCallbackRegistry=[];if("MutationObserver" in window){var mutationObserver=new MutationObserver(function(mutations){mutations.forEach(function(mutation){if(mutation.target!==document.body&&mutationCallbackRegistry.length)mutationCallbackRegistry.forEach((registrant)=>{if(mutation.type&&(mutation.type==="attributes"||mutation.type==="childList")){let elems=[];if(mutation.type==="childList")elems=mutation.target.querySelectorAll('.'+registrant.jsClass+':not(.'+registrant.jsClass+'--initialized)');else{if(mutation.type==="attributes")if(mutation.target.classList.contains(registrant.jsClass)&&!mutation.target.classList.contains(registrant.jsClass+'--initialized'))elems.push(mutation.target);}if(elems.length)Array.prototype.forEach.call(elems,(elem)=>{elem.classList.add(registrant.jsClass+'--initialized');window[registrant.initializationFunction].apply(elem,[mutation.type]);});}});});});mutationObserver.observe(document.body,{attributes:true,characterData:true,childList:true,subtree:true,attributeOldValue:false,characterDataOldValue:false});}var utilityInitializer=function(jsClass,initializationFunction){const startElements=document.querySelectorAll('.'+jsClass);if(startElements.length)Array.prototype.forEach.call(startElements,(elem)=>{if(!elem.classList.contains(jsClass+'--initialized')){elem.classList.add(jsClass+'--initialized');window[initializationFunction].apply(elem,["load"]);}});mutationCallbackRegistry.push({'jsClass':jsClass,'initializationFunction':initializationFunction});};;
const allAnchors=document.querySelectorAll('a');if(allAnchors.length)Array.prototype.forEach.call(allAnchors,(thisAnchor)=>{if(thisAnchor.href.length&&thisAnchor.hostname!==window.location.hostname&&thisAnchor.href.substring(0,6)!=='mailto'&&thisAnchor.href.substring(0,3)!=='tel'&&thisAnchor.href.substring(0,1)!=='#'){thisAnchor.setAttribute('target','_blank');thisAnchor.setAttribute('rel','external noopener noreferrer');}});;
var swapPictureSrc=function(elem){const dataSrc=elem.querySelectorAll('[data-src],[data-srcset]');Array.prototype.forEach.call(dataSrc,(thisSrc)=>{if(thisSrc.dataset.src){thisSrc.src=thisSrc.dataset.src;delete thisSrc.dataset.src;}else{thisSrc.srcset=thisSrc.dataset.srcset;delete thisSrc.dataset.srcset;}});elem.classList.add('picture--lazy-load--loaded');};if('IntersectionObserver' in window){document.body.classList.add('js--animation');let animationObserver=new IntersectionObserver((entries)=>{entries.forEach((entry)=>{if(entry.intersectionRatio>=0.5){if(entry.target.classList.contains('picture--lazy-load'))swapPictureSrc(entry.target);else if(entry.target.classList.contains('field-type--decimal')){var thisPrecision=0;if(entry.target.textContent.indexOf('.')!==-1)thisPrecision=entry.target.textContent.split(".")[1].length;var targetNum=Number.parseFloat(entry.target.textContent);entry.target.classList.add('js--animation--observed');var current=0;if(thisPrecision>=1)current=0+Number.parseFloat(entry.target.textContent.split(".")[1]).toFixed(thisPrecision);entry.target.textContent=current;var stepTime=Math.abs(Math.floor(2500/targetNum));var timer=setInterval(function(){current++;entry.target.textContent=current;if(current>=targetNum)clearInterval(timer);},stepTime);}else{entry.target.classList.add('js--animation--observed');if(entry.target.dataset.animation){entry.target.classList.add('animated');entry.target.classList.add(entry.target.dataset.animation);}}animationObserver.unobserve(entry.target);}});},{threshold:0.5});var animationInitializationFunction=function(initType){animationObserver.observe(this);};utilityInitializer('js--to-animate','animationInitializationFunction');utilityInitializer('field-type--decimal','animationInitializationFunction');window.addEventListener('load',(event)=>{utilityInitializer('picture--lazy-load','animationInitializationFunction');});}else{const pictureLazyLoad=elem.querySelectorAll('.picture--lazy-load');Array.prototype.forEach.call(pictureLazyLoad,(thisPic)=>{swapPictureSrc(thisPic);});};
var childLinkInitializationFunction=function(initType){const thisLink=this.querySelector('a[href]');if(thisLink&&thisLink.href&&thisLink.href.length>=1)this.classList.add('card--hover','cursor--pointer');};utilityInitializer('js--child--link','childLinkInitializationFunction');let childLinkDown,childLinkUp;document.addEventListener('mousedown',(event)=>{childLinkDown=+new Date();},false);document.addEventListener('mouseup',function(event){if(event.target!==document&&event.target.closest('.js--child--link')){childLinkUp=+new Date();if((childLinkUp-childLinkDown)<200)event.target.closest('.js--child--link').querySelector('a[href]').click();}},false);;
var dismissibleInitializationFunction=function(initType){if(this.hasAttribute('id')){let storedInfo=localStorage.getItem('js--dismissible--'+this.getAttribute('id'));if(storedInfo==='hidden'){this.classList.add('display--none');this.parentNode.removeChild(this);}}const dismissButton=`
    <button type="button" class="js--dismissible--close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  `;if(window.getComputedStyle(this).getPropertyValue('position')==="static")this.classList.add('position--relative');this.insertAdjacentHTML('afterBegin',dismissButton);};utilityInitializer('js--dismissible','dismissibleInitializationFunction');document.addEventListener('click',function(event){if(event.target!==document&&event.target.closest('.js--dismissible--close')&&event.target.closest('.js--dismissible')){let dismissible=event.target.closest('.js--dismissible');dismissible.classList.add('display--none','js--dismissible--closed');dismissible.parentNode.removeChild(dismissible);if(dismissible.hasAttribute('id'))localStorage.setItem('js--dismissible--'+dismissible.getAttribute('id'),'hidden');}},false);;
var togglebelowInitializationFunction=function(initType){let ariaExpanded=this.getAttribute('aria-expanded');if(!ariaExpanded||(ariaExpanded!=="true"&&ariaExpanded!=="false")){this.setAttribute('aria-expanded',"false");ariaExpanded="false";}if(ariaExpanded==="true"){this.querySelector('.js--toggle-below--label').textContent="Close below";this.nextElementSibling.classList.add('js--toggle-below--open');this.nextElementSibling.classList.remove('js--toggle-below--closed');}else{this.querySelector('.js--toggle-below--label').textContent="Open below";this.nextElementSibling.classList.add('js--toggle-below--closed');this.nextElementSibling.classList.remove('js--toggle-below--open');}};utilityInitializer('js--toggle-below','togglebelowInitializationFunction');document.addEventListener('click',function(event){let toggleBelow,ariaExpanded;if(event.target!==document&&event.target.closest('.js--toggle-below')){toggleBelow=event.target.closest('.js--toggle-below');ariaExpanded=toggleBelow.getAttribute('aria-expanded');if(!ariaExpanded||ariaExpanded==="false"){toggleBelow.querySelector('.js--toggle-below--label').textContent="Close below";ariaExpanded="true";}else{toggleBelow.querySelector('.js--toggle-below--label').textContent="Open below";ariaExpanded="false";}toggleBelow.setAttribute('aria-expanded',ariaExpanded);if(ariaExpanded==="true"){toggleBelow.nextElementSibling.classList.add('js--toggle-below--open');toggleBelow.nextElementSibling.classList.remove('js--toggle-below--closed');if(toggleBelow.nextElementSibling.querySelector('input'))toggleBelow.nextElementSibling.querySelector('input').focus();}else{toggleBelow.nextElementSibling.classList.add('js--toggle-below--closed');toggleBelow.nextElementSibling.classList.remove('js--toggle-below--open');}}},false);;
const shareToNativeButton=`
    <button type="button" class="js--share-to-native fab position--fixed bottom--0 color--grey
      right--0 font-size--2em margin-horizontal--4 margin-vertical--4 z-index--3"
      aria-label="Share this page">
      <figure class="figure figure--icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54">
          <path fill-rule="evenodd" d="M46 35v9c0 2-1 5-3 7l-6 2H9l-7-2c-2-2-2-5-2-7V16c0-2 0-5 2-6 2-2 4-3 7-3h9v1l-1 1-4 2H9l-4 2-1 3v28l1 4 4 1h28l3-1 2-4v-8l2-1 1-1zm8-16L41 32h-2l-1-2v-6h-6c-7 0-12 1-14 4-3 3-4 8-3 16v1h-1l-1-1v-1l-2-2-1-3a24 24 0 01-2-8v-3l1-3a12 12 0 012-6l2-2 3-2 5-2 5-1h12V5l1-2 1-1 1 1 13 13z"/>
        </svg>
      </figure>
    </button>
  `;if("share" in navigator){const shareToNative=async function(shareUrl,shareTitle,shareText,shareImgUrl){let share={url:shareUrl,title:shareTitle,text:shareText};if(shareImgUrl){const shareFileName=shareImgUrl.substr(shareImgUrl.lastIndexOf("/")+1);let fetchImgUrl=shareImgUrl;if(fetchImgUrl.indexOf(window.location.hostname)!==-1)fetchImgUrl=fetchImgUrl.substr(fetchImgUrl.indexOf(window.location.origin)+window.location.origin.length);try{const response=await fetch(fetchImgUrl);const blob=await response.blob();const file=new File([blob],shareFileName,{type:blob.type});share.files=[file];}catch(err){console.log(err.name,err.message);}}await navigator.share(share);};document.body.insertAdjacentHTML('beforeEnd',shareToNativeButton);document.addEventListener('click',function(event){if(event.target!==document&&event.target.closest('.js--share-to-native'))shareToNative(window.location.href,document.title,document.querySelector('[property="og:description"]').getAttribute('content'));},false);};
var childTabsInitializationFunction=function(initType){const thisId=this.getAttribute('id');let wrapper=document.createElement('div');this.appendChild(wrapper).classList.add('tabs--content');while(this.firstChild!==wrapper)wrapper.appendChild(this.firstChild);let tabsList='<ul role="tablist" class="tabs">';const thisDetails=this.querySelectorAll('.tabs--content > details');Array.prototype.forEach.call(thisDetails,(elem,i)=>{if(!i)elem.setAttribute('open',true);let classString=(!i)?' class="is-active" aria-selected="true"':'';let hashString=elem.getAttribute('id');let tabTitle=elem.querySelector('summary').textContent;tabsList+='<li role="presentation"><a id="'+thisId+'-tab-'+i+'" role="tab" href="#'+hashString+'"'+classString+'>'+tabTitle+'</a>';elem.setAttribute('aria-labelledby',thisId+'-tab-'+i);});tabsList+='</ul>';this.insertAdjacentHTML('afterbegin',tabsList);};utilityInitializer('child-display-mode--tab','childTabsInitializationFunction');document.addEventListener('click',function(event){if(event.target!==document&&event.target.closest('.tabs a')){if(!event.target.closest('#block-frost-theme-local-tasks'))event.preventDefault();let bubbled=event.target.closest('.tabs a');const idSelector=bubbled.getAttribute('href');const allTabs=bubbled.closest('.tabs').querySelectorAll('a');Array.prototype.forEach.call(allTabs,(elem,i)=>{elem.classList.remove('is-active');elem.removeAttribute('aria-selected');});bubbled.setAttribute('aria-selected',true);bubbled.classList.add('is-active');const parentElem=bubbled.closest('.child-display-mode--tab');const allDetails=parentElem.querySelectorAll('details');Array.prototype.forEach.call(allDetails,(elem,i)=>{elem.removeAttribute('open');});const clickedDetails=parentElem.querySelector(idSelector).setAttribute('open',true);}},false);;
document.addEventListener('click',function(event){if(event.target!==document&&event.target.closest('.js--hamburger')){let burger=event.target.closest('.js--hamburger');const burgerTarget=burger.getAttribute('aria-controls');burger.classList.toggle('is-active');document.querySelector('#'+burgerTarget).classList.toggle('open');document.body.classList.toggle('mobile--tray--open');let expanded=burger.getAttribute('aria-expanded')==='true'||false;burger.setAttribute('aria-expanded',!expanded);}},false);;
'use strict';document.body.classList.add('js');;