var TcHmi;!function(o){let n;!function(n){let i;!function(n){n.Login=function(n,i,c=!0,e=!0){return o.Server.loginEx2(n,i,c,e,null,n=>{n.error!==o.Errors.NONE&&TCHMI_CONSOLE_LOG_LEVEL>=1&&o.Log.error("[Source=Framework, Module=TcHmi.Functions.Beckhoff.Login] "+o.Log.buildMessage(n.details))})}}(i=n.Beckhoff||(n.Beckhoff={})),n.registerFunctionEx("Login","TcHmi.Functions.Beckhoff",i.Login)}(n=o.Functions||(o.Functions={}))}(TcHmi||(TcHmi={}));