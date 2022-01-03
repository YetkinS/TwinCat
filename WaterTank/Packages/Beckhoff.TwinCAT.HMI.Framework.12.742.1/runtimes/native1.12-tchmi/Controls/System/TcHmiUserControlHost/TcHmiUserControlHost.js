var TcHmi;!function(t){let e;!function(e){let r;!function(e){class r extends e.TcHmiControl{constructor(element,e,r){super(element,e,r),this.__targetUserControlControlObject=null,this.__params=new Map,this.__partialDefaultVirtualRights=new Map,this.__onUserControlChangedEventDestroyEvent=null,this.__onUserControlConfigChangedEventDestroyEvent=null,this.__onUserControlCreatedEventDestroyEvent=null,this.__onUserControlRemovedEventDestroyEvent=null;let o=this.__attrs["data-tchmi-target-user-control"];if(!o)throw new Error("Required attribute=data-tchmi-target-user-control is missing.");if(this.__targetUserControlUrl=o.value,!this.__targetUserControlUrl)throw new Error("Required attribute=data-tchmi-target-user-control has invalid value.");if(this.__targetUserControlUrlClean=tchmi_path(this.__targetUserControlUrl),!this.__targetUserControlUrlClean)throw new Error("Required attribute=data-tchmi-target-user-control has invalid value.");this.__targetUserControlConfigUrl=this.__targetUserControlUrl.replace(".usercontrol",".usercontrol.json"),this.__targetUserControlConfigUrlClean=tchmi_path(this.__targetUserControlConfigUrl),!0===TCHMI_ENGINEERING&&(this.__onUserControlChangedEventDestroyEvent=t.EventProvider.register("System.onUserControlChanged",this.__onUserControlChanged()),this.__onUserControlConfigChangedEventDestroyEvent=t.EventProvider.register("System.onUserControlConfigChanged",this.__onUserControlConfigChanged()),this.__onUserControlCreatedEventDestroyEvent=t.EventProvider.register("System.onUserControlCreated",this.__onUserControlCreated()),this.__onUserControlRemovedEventDestroyEvent=t.EventProvider.register("System.onUserControlRemoved",this.__onUserControlRemoved()))}__previnit(){if(this.__elementTemplateRoot=this.__element.find(".TcHmi_Controls_System_TcHmiUserControlHost-template"),0===this.__elementTemplateRoot.length&&(this.__elementTemplateRoot=this.__element.find(".tchmi-user-control-host-template")),0===this.__elementTemplateRoot.length)throw new Error("Invalid Template.html");this.__processTargetUserControl(),super.__previnit()}__init(){super.__init()}__attach(){super.__attach()}__detach(){super.__detach()}destroy(){if(!this.__keepAlive){if(this.__elementTemplateRoot&&this.__elementTemplateRoot.empty(),this.__targetUserControlControlObject)try{this.__targetUserControlControlObject.destroy(),this.__targetUserControlControlObject=null}catch(e){TCHMI_CONSOLE_LOG_LEVEL>=1&&t.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiUserControlHost, Id="+this.getId()+"] Unexpected exception="+e+" while destroying existing TargetUserControl isntance.")}!0===TCHMI_ENGINEERING&&(null!==this.__onUserControlChangedEventDestroyEvent&&(this.__onUserControlChangedEventDestroyEvent(),this.__onUserControlChangedEventDestroyEvent=null),null!==this.__onUserControlConfigChangedEventDestroyEvent&&(this.__onUserControlConfigChangedEventDestroyEvent(),this.__onUserControlConfigChangedEventDestroyEvent=null),null!==this.__onUserControlCreatedEventDestroyEvent&&(this.__onUserControlCreatedEventDestroyEvent(),this.__onUserControlCreatedEventDestroyEvent=null),null!==this.__onUserControlRemovedEventDestroyEvent&&(this.__onUserControlRemovedEventDestroyEvent(),this.__onUserControlRemovedEventDestroyEvent=null)),this.__params=new Map,this.__partialDefaultVirtualRights=new Map,super.destroy()}}__setKeepAlive(value){super.__setKeepAlive(value),this.__targetUserControlControlObject&&this.__targetUserControlControlObject.__setKeepAlive(value)}__processTargetUserControl(){if(this.__elementTemplateRoot&&this.__elementTemplateRoot.empty(),this.__targetUserControlControlObject)try{this.__targetUserControlControlObject.destroy(),this.__targetUserControlControlObject=null}catch(e){TCHMI_CONSOLE_LOG_LEVEL>=1&&t.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiUserControlHost, Id="+this.getId()+", Attribut=TargetUserControl] Unexpected exception="+e+" while destroying existing TargetUserControl isntance.")}let r=this.__params;this.__params.forEach(t=>{t&&t.descr&&(t.descr.propertyGetterName&&this[t.descr.propertyGetterName]&&delete this[t.descr.propertyGetterName],t.descr.propertySetterName&&this[t.descr.propertySetterName]&&delete this[t.descr.propertySetterName])}),this.__params=new Map,this.__partialDefaultVirtualRights=new Map,this.__config=t.System.Data.Caches.partialCompositeConfigCache.get(this.__targetUserControlConfigUrlClean);let o=t.System.Data.Caches.partialMarkupCache.get(this.__targetUserControlUrlClean);if(this.__markup=o?o.markup:void 0,!this.__targetUserControlUrl)return;if(!this.__targetUserControlUrlClean)return;if(!this.__targetUserControlConfigUrl)return;if(!this.__targetUserControlConfigUrlClean)return;if(!this.__markup)return void(TCHMI_CONSOLE_LOG_LEVEL>=1&&t.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiUserControlHost, Id="+this.getId()+", Attribut=TargetUserControl] Required TargetUserControl file="+this.__targetUserControlUrlClean+" is missing."));if(!this.__config)return void(TCHMI_CONSOLE_LOG_LEVEL>=1&&t.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiUserControlHost, Id="+this.getId()+", Attribut=TargetUserControl] Required TargetUserControl configuration file="+this.__targetUserControlConfigUrlClean+" is missing."));if(!1===this.__isRecursionSave(this.__targetUserControlConfigUrlClean))return void(TCHMI_CONSOLE_LOG_LEVEL>=1&&t.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiUserControlHost, Id="+this.getId()+", Attribut=TargetUserControl] Loading file="+this.__targetUserControlUrl+" was blocked to avoid recursion!"));let s=this.__config,n=this.__markup,i=document.createElement("div");i.innerHTML=n;let l=i.firstElementChild;if(!l)return;if(l.getAttribute("data-tchmi-type")!==e.TcHmiUserControl.__type)return void(TCHMI_CONSOLE_LOG_LEVEL>=1&&t.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiUserControlHost, Id="+this.getId()+", Attribut=TargetUserControl] Wrong type (not TcHmi.Controls.System.TcHmiUserControl)."));if(!l.id)return void(TCHMI_CONSOLE_LOG_LEVEL>=1&&t.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiUserControlHost, Id="+this.getId()+", Attribut=TargetUserControl] Root element of file="+this.__targetUserControlUrl+" is missing required attribute=id."));let _=l.querySelectorAll("div[data-tchmi-type]"),h=[];h.push(l.id);for(let t=0,e=_.length;t<e;t++){let id=_[t].id;h.includes(id)||h.push(id)}h.sort((a,b)=>a&&a.indexOf&&a.indexOf(b)>-1?1:b&&b.indexOf&&b.indexOf(a)>-1?-1:0);const C=new t.System.SymbolExpressionParser(n);let g=C.resolveExpressionsBySymbolType(t.SymbolType.PartialParam);if(g)for(let t=0,e=g.length;t<e;t++){let e=g[t];n=n.replace(new RegExp(tchmi_escape_regex(""+e.toString()),"g"),`%pp%${this.__id}::${e.getContent()}%/pp%`)}let d=C.resolveExpressionsBySymbolType(t.SymbolType.Control);if(null!=d)for(let t=0,e=d.length;t<e;t++){let e=d[t];h.includes(e.getName())&&(n=n.replace(new RegExp(tchmi_escape_regex(""+e.toString()),"g"),`%ctrl%${this.__id}.${e.getContent()}%/ctrl%`))}let u="",c={};for(let t=0,e=h.length;t<e;t++){let e=h[t];e&&(c['"'+e]=`"${this.__id}.${e}`,c["'"+e]=`'${this.__id}.${e}`,u.length>0&&(u+="|"),u+=`"${tchmi_escape_regex(e)}|'${tchmi_escape_regex(e)}`)}if(n=n.replace(new RegExp(u,"g"),(t,...e)=>c.hasOwnProperty(t)?c[t]:t),i.innerHTML=n,l=i.firstElementChild,l){if(l.setAttribute("data-tchmi-partial-url",tchmi_path(this.__targetUserControlUrl)),s&&void 0!==s.parameters){const t=s.parameters;for(let e=0,o=t.length;e<o;e++)this.__registerUserControlParamAttribute(t[e],r?r.get(t[e].name):void 0)}if(s&&void 0!==s.virtualRights)for(let t=0,e=s.virtualRights.length;t<e;t++)this.__registerVirtualRight(s.virtualRights[t]);this.__targetUserControlControlObject=t.System.Services.controlManager.compile(l,this),void 0!==this.__targetUserControlControlObject&&null!==this.__targetUserControlControlObject?(this.__keepAlive&&this.__targetUserControlControlObject.__setKeepAlive(!0),"Content"===this.getWidthMode()&&this.__processWidth(),"Content"===this.getHeightMode()&&this.__processHeight(),this.__elementTemplateRoot[0].appendChild(this.__targetUserControlControlObject.getElement()[0])):this.__targetUserControlControlObject=null}}__registerUserControlParamAttribute(e,r){let o=this,s=e.name,n={descr:null,value:null};this.__params.set(s,n);let schema=t.Type.getSchema(e.type);schema||TCHMI_CONSOLE_LOG_LEVEL>=1&&t.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiUserControlHost, Id="+this.getId()+", Parameter="+s+"] Attribute uses invalid data type: "+e.type);let i=r||null,l=function(valueNew,r){tchmi_equal(n.value,valueNew)||(n.value=valueNew,t.EventProvider.raise(o.__id+".onPropertyChanged",{propertyName:e.propertyName,dirtyPaths:r}))},_=function(){return n.value},h=null;if(void 0!==this.__attrs&&null!==this.__attrs){let r=this.__attrs[e.name];r&&(h=t.ValueConverter.toSchemaType(r.value,schema),null===h&&(h=r.value))}if(n.descr=e,void 0!==e.defaultValueInternal?n.value=e.defaultValueInternal:schema&&(n.value=t.Type.Schema.resolveDefault(schema)),e.propertySetterName){if(this[e.propertySetterName])return TCHMI_CONSOLE_LOG_LEVEL>=1&&t.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiUserControlHost, Id="+this.getId()+", Parameter="+s+"] Name of setter: '"+e.propertySetterName+"' is already in use. Parameter won't be available for further use."),void this.__params.delete(s);this[e.propertySetterName]=l}else;if(this[e.propertyGetterName])return TCHMI_CONSOLE_LOG_LEVEL>=1&&t.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiUserControlHost, Id="+this.getId()+", Parameter="+s+"] Name of getter: '"+e.propertyGetterName+"' is already in use. Parameter won't be available for further use."),e.propertySetterName&&delete this[e.propertySetterName],void this.__params.delete(s);this[e.propertyGetterName]=_,i?l(i.value):null!=h&&!1===t.Symbol.isSymbolExpression(h)&&l(h)}__registerVirtualRight(t){!0!==t.defaultValueInternal&&!1!==t.defaultValueInternal||this.__partialDefaultVirtualRights.set(t.name,t)}__isRecursionSave(path){for(var t=this.__parent;null!==t;){if("TcHmi.Controls.System.TcHmiUserControlHost"===t.getType()&&void 0!==t.getTargetUserControl&&tchmi_path(t.getTargetUserControl())===path)return!1;t=t.getParent()}return!0}__refreshTargetPartial(){var t;this.__isDestroyed||(null===(t=this.__targetUserControlControlObject)||void 0===t||t.__setKeepAlive(!1),this.__processTargetUserControl())}__onUserControlChanged(){return(t,data)=>{data.url&&data.url===this.__targetUserControlUrlClean&&data.content&&this.__markup&&data.content!==this.__markup&&this.__refreshTargetPartial()}}__onUserControlConfigChanged(){return(t,data)=>{data.url&&data.url===this.__targetUserControlConfigUrlClean&&this.__refreshTargetPartial()}}__onUserControlCreated(){return(t,data)=>{data.url&&data.url===this.__targetUserControlUrlClean&&this.__refreshTargetPartial()}}__onUserControlRemoved(){return(t,data)=>{data.url&&data.url===this.__targetUserControlUrlClean&&this.__refreshTargetPartial()}}getTargetUserControl(){return this.__targetUserControlUrl}setIsEnabled(valueNew){super.setIsEnabled(valueNew)}__processIsEnabled(){super.__processIsEnabled(),this.__targetUserControlControlObject&&this.__targetUserControlControlObject.__processIsEnabled()}__processAccessConfig(){super.__processAccessConfig(),this.__targetUserControlControlObject&&this.__targetUserControlControlObject.__processAccessConfig()}setWidthMode(valueNew){let e=t.ValueConverter.toSizeModeWithContent(valueNew);null===e&&(e=this.getAttributeDefaultValueInternal("WidthMode")),e!==this.__widthMode&&(this.__widthMode=e,t.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"WidthMode"}),this.__processWidthMode())}__processWidth(callerControl){if("Content"===this.getWidthMode()){let e="";if(null!==this.__targetUserControlControlObject){const t=this.__targetUserControlControlObject.__getContentWidth();null!==t&&(e=t+"px"),callerControl&&this.__targetUserControlControlObject===callerControl||"Content"!==this.__targetUserControlControlObject.getWidthMode()||this.__targetUserControlControlObject.__processWidth(this)}t.StyleProvider.setSimpleElementStyle(this.__element,"width",e)}super.__processWidth(callerControl)}setHeightMode(valueNew){let e=t.ValueConverter.toSizeModeWithContent(valueNew);null===e&&(e=this.getAttributeDefaultValueInternal("HeightMode")),e!==this.__heightMode&&(this.__heightMode=e,t.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"HeightMode"}),this.__processHeightMode())}__processHeight(callerControl){if("Content"===this.getHeightMode()&&(this.__intHeight=null,null!==this.__targetUserControlControlObject)){const t=this.__targetUserControlControlObject.__getContentHeight();null!==t&&(this.__intHeight=t+"px"),callerControl&&this.__targetUserControlControlObject===callerControl||"Content"!==this.__targetUserControlControlObject.getHeightMode()||this.__targetUserControlControlObject.__processHeight(this)}super.__processHeight(callerControl)}__getContentWidth(){return"Collapsed"===this.__visibility?null:"Content"!==this.getWidthMode()?super.__getContentWidth():null!==this.__targetUserControlControlObject?this.__targetUserControlControlObject.__getContentWidth():null}__getContentHeight(){return"Collapsed"===this.__visibility?null:"Content"!==this.getHeightMode()?super.__getContentHeight():null!==this.__targetUserControlControlObject?this.__targetUserControlControlObject.__getContentHeight():null}getDescriptionAccessByName(name){if(!name)return null;let t=this.__partialDefaultVirtualRights.get(name);return t||null}}e.TcHmiUserControlHost=r}(r=e.System||(e.System={})),e.registerEx("TcHmiUserControlHost","TcHmi.Controls.System",t.Controls.System.TcHmiUserControlHost)}(e=t.Controls||(t.Controls={}))}(TcHmi||(TcHmi={}));