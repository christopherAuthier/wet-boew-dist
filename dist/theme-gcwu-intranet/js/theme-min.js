/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-eng.txt / wet-boew.github.io/wet-boew/Licence-fra.txt
 *
 * Version: v3.0.8-development Build: 2013-05-31 07:33 PM
 *
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-gcwu-intranet",psnb:null,search:null,bcrumb:null,title:null,sft:null,gcft:null,gridsmenu:null,wmms:c("#gcwu-wmms"),menu:null,init:function(){b.psnb=pe.header.find("#gcwu-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#gcwu-srchbx");b.bcrumb=pe.header.find("#gcwu-bc");b.title=pe.header.find("#gcwu-title");b.sft=pe.footer.find("#gcwu-sft");b.gcft=pe.footer.find("#gcwu-gcft");b.gridsmenu=pe.main.find(".module-menu-section");var e=pe.menu.navcurrent(b.menubar,b.bcrumb),d=e.parents("div.mb-sm");if(d.length!==0){d.prev().children("a").addClass("nav-current-nocss")}if(pe.secnav.length!==0){e=pe.menu.navcurrent(pe.secnav,b.bcrumb);d=e.parents("ul");d.prev().children("a").addClass("nav-current-nocss")}if(b.gridsmenu.length!==0){e=pe.menu.navcurrent(b.gridsmenu,b.bcrumb)}if(b.psnb.length!==0&&b.search.length===0){b.psnb.addClass("mobile-change")}else{if(b.psnb.length===0&&b.search.length!==0){b.search.addClass("mobile-change")}}},mobileview:function(){var r,f="",q=pe.dic.get("%menu"),o=pe.dic.get("%search"),g,w,s,x="",l='data-role="popup" data-overlay-theme="a"',e='<a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right">'+pe.dic.get("%close")+"</a>",n="",t,d,k,m,j,h,z,A,u,v,p,y=c(document);if(b.menubar.length!==0||pe.secnav.length!==0||b.bcrumb.length!==0){z=b.menubar.find("ul.mb-menu li");r="<div "+l+' id="jqm-wb-mb"><div data-role="header">';g=(pe.secnav.length!==0?pe.secnav[0].getElementsByTagName("h2")[0]:"");r+="<h1>"+q+"</h1>"+e+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length!==0){p=b.bcrumb[0];r+='<section><div id="jqm-mb-location-text">'+p.innerHTML+"</div></section>";p.parentNode.removeChild(p)}else{r+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length!==0){f+="<section><div><h2>"+g.innerHTML+'</h2><div data-role="controlgroup">'+pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true,true)+"</div></div></section>";p=pe.secnav[0];p.parentNode.removeChild(p)}if(b.menubar.length!==0){f+="<section><div><h2>"+b.psnb.children(":header")[0].innerHTML+'</h2><div data-role="controlgroup">'+pe.menu.buildmobile(z,3,"a",true,true,"c",true,true)+"</div></div></section>"}r+='<div id="jqm-mb-menu"></div></nav></div></div></div>';x+=r;b.menu=f;n+='<li><a data-rel="popup" data-theme="a" data-icon="site-menu" href="#jqm-wb-mb">'+q+"</a></li>"}if(b.search.length!==0){w=b.search[0].innerHTML;s="<div "+l+' id="jqm-wb-search"><div data-role="header"><h1>'+o+"</h1>"+e+'</div><div data-role="content"><div>'+w.substring(w.indexOf("<form"))+"</div></div></div>";x+=s;n+='<li><a data-rel="popup" data-theme="a" data-icon="search" href="#jqm-wb-search">'+o+"</a></li>"}pe.bodydiv.append(x);if(n.length!==0){t=c('<div data-role="navbar" data-iconpos="right"><ul class="wb-hide">'+n+"</ul></div>");b.title.after(t)}j=document.getElementById("gcwu-lang");if(j!==null){d=j.getElementsByTagName("a");h='<div data-role="navbar"><ul>';for(u=0,v=d.length;u<v;u+=1){k=d[u];h+='<li><a href="'+k.href+'" data-theme="a">'+k.innerHTML+"</a></li>"}h+="</ul></div>";j=document.getElementById("gcwu-ef-lang").parentNode.innerHTML=h;j=document.getElementById("gcwu-other-lang");if(j!==null){j.parentNode.removeChild(j)}}if(b.sft.length!==0){d=b.sft.find("#gcwu-tctr a, .gcwu-col-head a").get();A=document.getElementById("gcwu-sft-in");if(b.gcft.length!==0){p=b.gcft[0];p.parentNode.removeChild(p)}}else{A=document.getElementById("gcwu-tc");if(A!==null){d=A.getElementsByTagName("a")}}if(A!==null){m='<ul class="ui-grid-a">';for(u=0,v=d.length;u<v;u+=1){k=d[u];m+='<li class="ui-block-'+(u%2!==0?"b":"a")+'"><a href="'+k.href+'" data-role="button" data-theme="c" data-corners="false">'+k.innerHTML+"</a></li>"}m+="</ul>";A.id="";A.className="";A.setAttribute("data-role","footer");A.innerHTML=m}if(b.wmms.length!==0){p=b.wmms[0];pe.footer[0].getElementsByTagName("footer")[0].appendChild(p.cloneNode(true));p.parentNode.removeChild(p)}y.on("pagecreate",function(){if(b.menubar.length!==0){p=b.psnb[0];p.parentNode.removeChild(p)}if(b.search.length!==0){p=b.search[0];p.parentNode.removeChild(p)}if(n.length!==0){t.children().removeClass("wb-hide");var B=pe.bodydiv.find("#jqm-mb-menu");if(B.length!==0){B.append(b.menu);t.find('a[href="#jqm-wb-mb"]').one("click vclick",function(){B.trigger("create");pe.menu.correctmobile(B)})}}function i(D,C,G,F){var E;c.mobile.showPageLoadingMsg();E=c.mobile.transitionHandlers.simultaneous("pop",C,G,F);E.done(function(){c.mobile.hidePageLoadingMsg()});return E}c.mobile.transitionHandlers.loadingTransition=i;c.mobile.defaultDialogTransition="loadingTransition"});y.trigger("mobileviewloaded");return}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));