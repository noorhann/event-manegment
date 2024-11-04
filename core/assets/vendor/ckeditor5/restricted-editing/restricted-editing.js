!function(e){const t=e.en=e.en||{};t.dictionary=Object.assign(t.dictionary||{},{"Disable editing":"Disable editing","Enable editing":"Enable editing","Navigate editable regions":"Navigate editable regions","Next editable region":"Next editable region","Previous editable region":"Previous editable region"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={588:(e,t,i)=>{"use strict";i.d(t,{A:()=>o});var n=i(935),r=i.n(n)()((function(e){return e[1]}));r.push([e.id,":root{--ck-color-restricted-editing-exception-background:rgba(255,169,77,.2);--ck-color-restricted-editing-exception-hover-background:rgba(255,169,77,.35);--ck-color-restricted-editing-exception-brackets:rgba(204,105,0,.4);--ck-color-restricted-editing-selected-exception-background:rgba(255,169,77,.5);--ck-color-restricted-editing-selected-exception-brackets:rgba(204,105,0,.6)}.ck-editor__editable .restricted-editing-exception{background-color:var(--ck-color-restricted-editing-exception-background);border:1px solid;border-image:linear-gradient(to right,var(--ck-color-restricted-editing-exception-brackets) 0,var(--ck-color-restricted-editing-exception-brackets) 5px,transparent 6px,transparent calc(100% - 6px),var(--ck-color-restricted-editing-exception-brackets) calc(100% - 5px),var(--ck-color-restricted-editing-exception-brackets) 100%) 1;transition:background .2s ease-in-out}@media (prefers-reduced-motion:reduce){.ck-editor__editable .restricted-editing-exception{transition:none}}.ck-editor__editable .restricted-editing-exception.restricted-editing-exception_selected{background-color:var(--ck-color-restricted-editing-selected-exception-background);border-image:linear-gradient(to right,var(--ck-color-restricted-editing-selected-exception-brackets) 0,var(--ck-color-restricted-editing-selected-exception-brackets) 5px,var(--ck-color-restricted-editing-selected-exception-brackets) calc(100% - 5px),var(--ck-color-restricted-editing-selected-exception-brackets) 100%) 1}.ck-editor__editable .restricted-editing-exception.restricted-editing-exception_collapsed{padding-left:1ch}.ck-restricted-editing_mode_restricted,.ck-restricted-editing_mode_restricted *{cursor:default}.ck-restricted-editing_mode_restricted .restricted-editing-exception,.ck-restricted-editing_mode_restricted .restricted-editing-exception *{cursor:text}.ck-restricted-editing_mode_restricted .restricted-editing-exception:hover{background:var(--ck-color-restricted-editing-exception-hover-background)}",""]);const o=r},935:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=e(t);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(r[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);n&&r[c[0]]||(i&&(c[2]?c[2]="".concat(i," and ").concat(c[2]):c[2]=i),t.push(c))}},t}},591:(e,t,i)=>{"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},o=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),s=[];function a(e){for(var t=-1,i=0;i<s.length;i++)if(s[i].identifier===e){t=i;break}return t}function c(e,t){for(var i={},n=[],r=0;r<e.length;r++){var o=e[r],c=t.base?o[0]+t.base:o[0],d=i[c]||0,l="".concat(c," ").concat(d);i[c]=d+1;var g=a(l),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==g?(s[g].references++,s[g].updater(u)):s.push({identifier:l,updater:f(u,t),references:1}),n.push(l)}return n}function d(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=i.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var l,g=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,i,n){var r=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var o=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function m(e,t,i){var n=i.css,r=i.media,o=i.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,h=0;function f(e,t){var i,n,r;if(t.singleton){var o=h++;i=p||(p=d(t)),n=u.bind(null,i,o,!1),r=u.bind(null,i,o,!0)}else i=d(t),n=m.bind(null,i,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var i=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<i.length;n++){var r=a(i[n]);s[r].references--}for(var o=c(e,t),d=0;d<i.length;d++){var l=a(i[d]);0===s[l].references&&(s[l].updater(),s.splice(l,1))}i=o}}}},782:(e,t,i)=>{e.exports=i(237)("./src/core.js")},783:(e,t,i)=>{e.exports=i(237)("./src/engine.js")},311:(e,t,i)=>{e.exports=i(237)("./src/ui.js")},584:(e,t,i)=>{e.exports=i(237)("./src/utils.js")},237:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,i),o.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nc=void 0;var n={};(()=>{"use strict";i.r(n),i.d(n,{RestrictedEditingMode:()=>_,RestrictedEditingModeEditing:()=>u,RestrictedEditingModeUI:()=>v,StandardEditingMode:()=>T,StandardEditingModeEditing:()=>C,StandardEditingModeUI:()=>R});var e=i(782);class t extends e.Command{constructor(e,t){super(e),this.affectsData=!1,this._direction=t}refresh(){this.isEnabled=this._checkEnabled()}execute(){const e=r(this.editor.model,this._direction);e&&this.editor.model.change((t=>{t.setSelection(e)}))}_checkEnabled(){return!!r(this.editor.model,this._direction)}}function r(e,t){const i=e.document.selection.getFirstPosition(),n=[];for(const r of e.markers.getMarkersGroup("restrictedEditingException")){const e=r.getRange(),o=i.isTouching(e.start)&&i.hasSameParentAs(e.start)||i.isTouching(e.end)&&i.hasSameParentAs(e.end);e.containsPosition(i)||o||("forward"===t&&e.start.isAfter(i)||"backward"===t&&e.end.isBefore(i))&&n.push(e)}if(n.length)return n.sort(((e,i)=>"forward"===t?e.start.isAfter(i.start)?1:-1:e.start.isBefore(i.start)?1:-1)).shift()}var o=i(783);function s(e,t){for(const i of e.model.markers){if(a(i.getRange(),t)&&i.name.startsWith("restrictedEditingException:"))return i}}function a(e,t){return e.containsPosition(t)||e.end.isEqual(t)||e.start.isEqual(t)}const c="restricted-editing-exception_selected";function d(e,t,i,n){const r=s(e,t.getShiftedBy(i));return!(!r||!r.getStart().isEqual(t.getShiftedBy(i)))&&(n.updateMarker(r,{range:n.createRange(r.getStart().getShiftedBy(-i),r.getEnd())}),!0)}function l(e,t,i,n){const r=s(e,t);return!(!r||!r.getEnd().isEqual(t))&&(n.updateMarker(r,{range:n.createRange(r.getStart(),r.getEnd().getShiftedBy(i))}),!0)}const g="RestrictedEditingMode";class u extends e.Plugin{static get pluginName(){return"RestrictedEditingModeEditing"}constructor(e){super(e),e.config.define("restrictedEditing",{allowedCommands:["bold","italic","link","unlink"],allowedAttributes:["bold","italic","linkHref"]}),this._alwaysEnabled=new Set(["undo","redo"]),this._allowedInException=new Set(["input","insertText","delete","deleteForward"])}init(){const e=this.editor,i=e.editing.view;e.config.get("restrictedEditing.allowedCommands").forEach((e=>this._allowedInException.add(e))),this._setupConversion(),this._setupCommandsToggling(),this._setupRestrictions(),e.commands.add("goToPreviousRestrictedEditingException",new t(e,"backward")),e.commands.add("goToNextRestrictedEditingException",new t(e,"forward")),this.listenTo(i.document,"tab",((t,i)=>{const n=i.shiftKey?"goToPreviousRestrictedEditingException":"goToNextRestrictedEditingException";e.commands.get(n).isEnabled&&(e.execute(n),i.preventDefault(),i.stopPropagation()),t.stop()}),{context:"$capture"}),e.keystrokes.set("Ctrl+A",function(e){return(t,i)=>{const n=e.model,r=e.model.document.selection,o=s(e,r.focus);if(!o)return;const a=r.getFirstRange();(o.getRange().containsRange(a,!0)||r.isCollapsed)&&(i(),n.change((e=>{e.setSelection(o.getRange())})))}}(e)),i.change((e=>{for(const t of i.document.roots)e.addClass("ck-restricted-editing_mode_restricted",t)}))}enableCommand(e){this.editor.commands.get(e).clearForceDisabled(g),this._alwaysEnabled.add(e)}_setupConversion(){const e=this.editor,t=e.model.document;let i=0;var n;e.conversion.for("upcast").add((n={view:{name:"span",classes:"restricted-editing-exception"},model:()=>(i++,`restrictedEditingException:${i}`)},e=>e.on("element:span",((e,t,i)=>{const{writer:r}=i,s=new o.Matcher(n.view).match(t.viewItem);if(!s)return;const a=s.match;a.name=!0;const{modelRange:c}=i.convertChildren(t.viewItem,t.modelCursor);i.consumable.consume(t.viewItem,a);const d=n.model(),l=r.createElement("$marker",{"data-name":d}),g=r.createElement("$marker",{"data-name":d});r.insert(g,c.end),r.insert(l,c.start),t.modelRange=r.createRange(r.createPositionBefore(l),r.createPositionAfter(g)),t.modelCursor=t.modelRange.end})))),e.conversion.for("downcast").add((e=>{e.on("addMarker:restrictedEditingException",((e,t,i)=>{if(!t.item)return;if(t.item.is("selection")||!i.schema.isInline(t.item))return;if(!i.consumable.consume(t.item,e.name))return;const n=i.writer,r=n.createAttributeElement("span",{class:"restricted-editing-exception"},{id:t.markerName,priority:-10}),o=i.mapper.toViewRange(t.range),s=n.wrap(o,r);for(const e of s.getItems())if(e.is("attributeElement")&&e.isSimilar(r)){i.mapper.bindElementToMarker(e,t.markerName);break}}))})),e.conversion.for("downcast").markerToHighlight({model:"restrictedEditingException",view:()=>({name:"span",classes:"restricted-editing-exception",priority:-10})}),e.conversion.for("editingDowncast").markerToElement({model:"restrictedEditingException",view:(e,{writer:t})=>t.createUIElement("span",{class:"restricted-editing-exception restricted-editing-exception_collapsed"})}),e.conversion.for("dataDowncast").markerToElement({model:"restrictedEditingException",view:(e,{writer:t})=>t.createEmptyElement("span",{class:"restricted-editing-exception"})}),t.registerPostFixer(function(e){return t=>{let i=!1;const n=e.model.schema;for(const r of e.model.document.differ.getChanges())"insert"==r.type&&n.checkChild("$block",r.name)&&(i=d(e,r.position,r.length,t)||i,i=l(e,r.position,r.length,t)||i);return i}}(e)),t.registerPostFixer(function(e){return t=>{let i=!1;for(const{name:n,data:r}of e.model.document.differ.getChangedMarkers())n.startsWith("restrictedEditingException")&&r.newRange&&"$graveyard"==r.newRange.root.rootName&&(t.updateMarker(n,{range:t.createRange(t.createPositionAt(r.oldRange.start))}),i=!0);return i}}(e)),t.registerPostFixer(function(e){return t=>{let i=!1;const n=e.model.document.differ.getChangedMarkers();for(const{data:e,name:r}of n){if(!r.startsWith("restrictedEditingException"))continue;const n=e.newRange;if(!e.oldRange&&!n.isFlat){const e=n.start,o=n.end,s=e.path.length>o.path.length,a=s?n.start:t.createPositionAt(o.parent,0),c=s?t.createPositionAt(e.parent,"end"):n.end;t.updateMarker(r,{range:t.createRange(a,c)}),i=!0}}return i}}(e)),function(e){const t=e.editing.view,i=e.model,n=new Set;t.document.registerPostFixer((t=>{const r=i.document.selection,o=s(e,r.anchor);if(!o)return!1;for(const i of e.editing.mapper.markerNameToElements(o.name))t.addClass(c,i),n.add(i);return!1})),e.conversion.for("editingDowncast").add((e=>{function i(){t.change((e=>{for(const t of n.values())e.removeClass(c,t),n.delete(t)}))}e.on("insert",i,{priority:"highest"}),e.on("remove",i,{priority:"highest"}),e.on("attribute",i,{priority:"highest"}),e.on("cleanSelection",i)}))}(e)}_setupRestrictions(){const e=this.editor,t=e.model,i=t.document.selection,n=e.editing.view.document,r=e.plugins.get("ClipboardPipeline");this.listenTo(t,"deleteContent",function(e){return(t,i)=>{const[n]=i,r=s(e,n.focus)||s(e,n.anchor);if(!r)return void t.stop();if(n.isCollapsed)return;const o=r.getRange().getIntersection(n.getFirstRange());n.is("documentSelection")?e.model.change((e=>{e.setSelection(o)})):n.setTo(o)}}(e),{priority:"high"});const o=e.commands.get("insertText");o&&this.listenTo(o,"execute",function(e){return(t,i)=>{const[n]=i,{range:r}=n;r&&(p(e,r)||t.stop())}}(e),{priority:"high"}),this.listenTo(r,"contentInsertion",(t=>{p(e,i.getFirstRange())||t.stop()})),this.listenTo(n,"clipboardOutput",((t,n)=>{"cut"!=n.method||p(e,i.getFirstRange())||t.stop()}),{priority:"high"});const a=e.config.get("restrictedEditing.allowedAttributes");t.schema.addAttributeCheck(function(e){return(t,i)=>{if(t.startsWith("$clipboardHolder"))return e.includes(i)}}(a)),t.schema.addChildCheck(((e,t)=>{if(e.startsWith("$clipboardHolder"))return"$text"===t.name}))}_setupCommandsToggling(){const e=this.editor.model.document;this._disableCommands(),this.listenTo(e.selection,"change",this._checkCommands.bind(this)),this.listenTo(e,"change:data",this._checkCommands.bind(this))}_checkCommands(){const e=this.editor,t=e.model.document.selection;if(t.rangeCount>1)return void this._disableCommands();const i=s(e,t.focus);this._disableCommands(),function(e,t){if(!t)return!1;const i=t.getRange();return e.isCollapsed?a(i,e.focus):i.containsRange(e.getFirstRange(),!0)}(t,i)&&this._enableCommands(i)}_enableCommands(e){const t=this.editor;for(const[i,n]of t.commands)n.affectsData&&!this._alwaysEnabled.has(i)&&this._allowedInException.has(i)&&(m(i,t.model.document.selection,e.getRange())||n.clearForceDisabled(g))}_disableCommands(){const e=this.editor;for(const[t,i]of e.commands)i.affectsData&&!this._alwaysEnabled.has(t)&&i.forceDisabled(g)}}function m(e,t,i){return!("delete"!=e||!i.start.isEqual(t.focus))||!("deleteForward"!=e||!t.isCollapsed||!i.end.isEqual(t.focus))}function p(e,t){const i=s(e,t.start),n=s(e,t.end);return i&&n&&n===i}var h=i(311),f=i(584);const b='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 6.5a3.5 3.5 0 0 1 3.495 3.308L19 10v2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1v-2l.005-.192A3.5 3.5 0 0 1 15.5 6.5zm0 7.5a.5.5 0 0 0-.492.41L15 14.5v2a.5.5 0 0 0 .992.09L16 16.5v-2a.5.5 0 0 0-.5-.5zm0-6a2 2 0 0 0-2 2v2h4v-2a2 2 0 0 0-2-2zm-9.25 8a.75.75 0 1 1 0 1.5H.75a.75.75 0 1 1 0-1.5h5.5zm0-5a.75.75 0 1 1 0 1.5H.75a.75.75 0 1 1 0-1.5h5.5zm3-5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1 0-1.5h8.5zm6-5a.75.75 0 1 1 0 1.5H.75a.75.75 0 0 1 0-1.5h14.5z"/></svg>';class v extends e.Plugin{static get pluginName(){return"RestrictedEditingModeUI"}init(){const e=this.editor,t=e.t;e.ui.componentFactory.add("restrictedEditing",(i=>{const n=(0,h.createDropdown)(i),r=new f.Collection;return this._getButtonDefinitions().forEach((({commandName:e,label:t,keystroke:i})=>{r.add(this._getButtonDefinition(e,t,i))})),(0,h.addListToDropdown)(n,r,{role:"menu"}),n.buttonView.set({label:t("Navigate editable regions"),icon:b,tooltip:!0,isEnabled:!0,isOn:!1}),this.listenTo(n,"execute",(t=>{const{_commandName:i}=t.source;e.execute(i),e.editing.view.focus()})),n})),e.ui.componentFactory.add("menuBar:restrictedEditing",(e=>{const i=new h.MenuBarMenuView(e),n=new h.MenuBarMenuListView(e);return n.set({ariaLabel:t("Navigate editable regions"),role:"menu"}),i.buttonView.set({label:t("Navigate editable regions"),icon:b}),i.panelView.children.add(n),this._getButtonDefinitions().forEach((({commandName:t,label:r,keystroke:o})=>{const s=new h.MenuBarMenuListItemView(e,i),a=this._createMenuBarButton(r,t,o);a.delegate("execute").to(i),s.children.add(a),n.items.add(s)})),i}))}_createMenuBarButton(e,t,i){const n=this.editor,r=n.commands.get(t),o=new h.MenuBarMenuListItemButtonView(n.locale);return o.set({label:e,keystroke:i,isEnabled:!0,isOn:!1}),o.bind("isEnabled").to(r),this.listenTo(o,"execute",(()=>{n.execute(t),n.editing.view.focus()})),o}_getButtonDefinition(e,t,i){const n=this.editor.commands.get(e),r={type:"button",model:new h.ViewModel({label:t,withText:!0,keystroke:i,withKeystroke:!0,role:"menuitem",_commandName:e})};return r.model.bind("isEnabled").to(n,"isEnabled"),r}_getButtonDefinitions(){const e=this.editor.locale.t;return[{commandName:"goToPreviousRestrictedEditingException",label:e("Previous editable region"),keystroke:"Shift+Tab"},{commandName:"goToNextRestrictedEditingException",label:e("Next editable region"),keystroke:"Tab"}]}}var E=i(591),x=i.n(E),w=i(588),k={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};x()(w.A,k);w.A.locals;class _ extends e.Plugin{static get pluginName(){return"RestrictedEditingMode"}static get requires(){return[u,v]}}class y extends e.Command{refresh(){const e=this.editor.model,t=e.document;this.value=!!t.selection.getAttribute("restrictedEditingException"),this.isEnabled=e.schema.checkAttributeInSelection(t.selection,"restrictedEditingException")}execute(e={}){const t=this.editor.model,i=t.document.selection,n=void 0===e.forceValue?!this.value:e.forceValue;t.change((e=>{const r=t.schema.getValidRanges(i.getRanges(),"restrictedEditingException");if(i.isCollapsed)if(n)e.setSelectionAttribute("restrictedEditingException",n);else{const t=e=>e.item.getAttribute("restrictedEditingException")===this.value,n=i.focus,r=n.getLastMatchingPosition(t,{direction:"backward"}),o=n.getLastMatchingPosition(t);e.removeSelectionAttribute("restrictedEditingException"),n.isEqual(r)||n.isEqual(o)||e.removeAttribute("restrictedEditingException",e.createRange(r,o))}else for(const t of r)n?e.setAttribute("restrictedEditingException",n,t):e.removeAttribute("restrictedEditingException",t)}))}}class C extends e.Plugin{static get pluginName(){return"StandardEditingModeEditing"}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:["restrictedEditingException"]}),e.conversion.for("upcast").elementToAttribute({model:"restrictedEditingException",view:{name:"span",classes:"restricted-editing-exception"}}),e.conversion.for("downcast").attributeToElement({model:"restrictedEditingException",view:(e,{writer:t})=>{if(e)return t.createAttributeElement("span",{class:"restricted-editing-exception"},{priority:-10})}}),e.commands.add("restrictedEditingException",new y(e)),e.editing.view.change((t=>{for(const i of e.editing.view.document.roots)t.addClass("ck-restricted-editing_mode_standard",i)}))}}class R extends e.Plugin{static get pluginName(){return"StandardEditingModeUI"}init(){const e=this.editor;e.ui.componentFactory.add("restrictedEditingException",(()=>{const e=this._createButton(h.ButtonView);return e.set({tooltip:!0,isToggleable:!0}),e})),e.ui.componentFactory.add("menuBar:restrictedEditingException",(()=>this._createButton(h.MenuBarMenuListItemButtonView)))}_createButton(e){const t=this.editor,i=t.locale,n=this.editor.commands.get("restrictedEditingException"),r=new e(i),o=i.t;return r.icon='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.25 16a.75.75 0 1 1 0 1.5H.75a.75.75 0 1 1 0-1.5h5.5zm0-5a.75.75 0 1 1 0 1.5H.75a.75.75 0 1 1 0-1.5h5.5zm3-5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1 0-1.5h8.5zm6-5a.75.75 0 1 1 0 1.5H.75a.75.75 0 0 1 0-1.5h14.5zm.25 5.5a3.5 3.5 0 0 1 3.143 1.959.75.75 0 0 1-1.36.636A2 2 0 0 0 13.5 10v2H19a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1v-2l.005-.192A3.5 3.5 0 0 1 15.5 6.5zm0 7.5a.5.5 0 0 0-.492.41L15 14.5v2a.5.5 0 0 0 .992.09L16 16.5v-2a.5.5 0 0 0-.5-.5z"/></svg>',r.bind("isOn","isEnabled").to(n,"value","isEnabled"),r.bind("label").to(n,"value",(e=>o(e?"Disable editing":"Enable editing"))),this.listenTo(r,"execute",(()=>{t.execute("restrictedEditingException"),t.editing.view.focus()})),r}}class T extends e.Plugin{static get pluginName(){return"StandardEditingMode"}static get requires(){return[C,R]}}})(),(window.CKEditor5=window.CKEditor5||{}).restrictedEditing=n})();