var TcHmi;!function(o){let r;!function(r){let e;!function(r){r.ForceLogoutEx=function(r,e){return o.Server.forceLogout(e,e=>{if(e.error!==o.Errors.NONE)return TCHMI_CONSOLE_LOG_LEVEL>=1&&o.Log.error("[Source=Framework, Module=TcHmi.Functions.Beckhoff.ForceLogoutEx] "+o.Log.buildMessage(e.details)),void r.error(e.error,{code:e.error,message:o.Errors[e.error],reason:"Function: TcHmi.Functions.Beckhoff.LoginEx",domain:"Function",errors:e.details?[e.details]:void 0});r.success()})}}(e=r.Beckhoff||(r.Beckhoff={})),r.registerFunctionEx("ForceLogoutEx","TcHmi.Functions.Beckhoff",e.ForceLogoutEx)}(r=o.Functions||(o.Functions={}))}(TcHmi||(TcHmi={}));