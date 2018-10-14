// 函数判断两次密码输入是否正确
function psd_test(){
    var psd = document.getElementById("psd").value;
    var psd1 = document.getElementById("psd1").value;
    if(psd==psd1){
        return true;
    }else{
        return false;
    }
}


$(document).ready(function(){
    alert("Hello!");
    
    // 省市集联
    var provinces = ["湖北省","江苏省","福建省","四川省","广东省"];
    
    var $province = $("#province");
    
    $.each(provinces,function(i,n){
        $province.append('<option value="'+i+'">'+n+'</option>');    
    });
    
    var cities = [
        ["武汉市","咸宁市","襄阳市","黄石市","荆州市"],
        ["南京市","无锡市","徐州市","扬州市","苏州市"],
        ["福州市","厦门市","泉州市","龙岩市","莆田市"],
        ["成都市","绵阳市","广元市","南充市","巴中市"],
        ["广州市","深圳市","佛山市","汕头市","河源市"]
    ];
    
    var $city = $("#city");
    
    $("#province").change(function(){
        //alert($(this).val());
        //alert(this.value);
        //先清空右边列表
        //$city.get(0).option.length = 1;
        $city.empty();
        var val = $(this).val();
        
        $.each(cities,function(i,n){
            if(i == val){
                $.each(n,function(j,m){
                    //alert(j + " " + m);
                    $city.append("<option>"+m+"</option>");
                });
            }
        });
    }); 
    
    // input required内容提示
    $(":input.required").each(function(){
        var $required = $("<strong class='high'>*</strong>");
        $(this).parent().append($required);      

       
    });
    
    $(":input").blur(function(){
        var $parent = $(this).parent();
        $parent.find(".formtips").remove();
        // 用户名验证
        if($(this).is("#username")){
            if(this.value==""||this.value=="wustzz"){
                var errorMsg = "请输入正确的用户名格式.";
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }else{
                var okMsg = "✓";
                $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
            }
        }
        // 邮箱验证
        if($(this).is("#email")){
            if(this.value==""||( this.value!="" && !(/.+@.+\.[a-zA-Z]{2,4}$/).test(this.value) )){
                var errorMsg = "请输入正确的邮箱格式.";
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }else{
                var okMsg = "✓";
                 $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
            }
        }
        // 密码验证
        if($(this).is("#psd")){
            if(this.value==""||(this.value!="" && !(/^\d{6}$/).test(this.value))){
                var errorMsg = "密码格式错误,输入6位数字密码";
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }else{
                var okMsg = "✓";
                $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
            }
        }
        // 确认密码验证
        if($(this).is("#psd1")){
            if(!psd_test()){
                var errorMsg = "两次密码输入不同";
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }else{
                var okMsg = "✓";
                $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
            }
        }
        // 手机号验证
        if($(this).is("#tel")){
            if(this.value==""||(this.value!=="" && !(/^1567\d{7}$/).test(this.value) )){
                var errorMsg = "电话号码格式不对";
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }else{
                var okMsg = "✓";
                $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
            }
        }
        // 日期jquery ui
        $("#date").datepicker({
            dateFormat:"yy-mm-dd",
            inline:true,
            changeMonth:true,
            changeYear:true
        });
      
        
    });
      
    $("#submit").click(function(){
        (":input.required").trigger('blur');
        var numError = $('form.onError').length;
        if(numError>0){
            return false;
        }
        alert("注册成功");
    });
        
    $("#reset").click(function(){
        $(".formtips").remove();
    });
    
    
});



