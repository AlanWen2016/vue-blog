export default {
    methods : {
        getCookie(c_name){
            if (document.cookie.length>0)
            {
                let c_start=document.cookie.indexOf(c_name + "=")
                if (c_start!=-1)
                {
                    c_start=c_start + c_name.length+1
                    let c_end=document.cookie.indexOf(";",c_start)
                    if (c_end==-1) c_end=document.cookie.length
                    return unescape(document.cookie.substring(c_start,c_end));
                }
            }
            return ""
        },
        setCookie(c_name, value, expiredays){
            let exdate=new Date();
            exdate.setDate(exdate.getDate()+ expiredays);
            document.cookie=c_name+ "=" + value + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString()) + "; path=/";
        },
        delCookie(c_name){
            let exp = new Date();
            exp.setTime(exp.getTime() - 1);
            document.cookie = c_name + "=;expires=" + exp.toGMTString() + "; path=/";
        }
    }
}