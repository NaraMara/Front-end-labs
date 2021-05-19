$(function(){
//this is my awesome code 
let prevPanel=$('.calc-result-previous-value');
let curPanel=$('.calc-result-current-value');

let lastAction='';

$('.calc-button-number').click(function(){

    if($(curPanel).html().length<19)
    {
        if($(curPanel).html()=="0")
        {
            $(curPanel).html($(this).html());
        } else
        {
            curPanel.html($(curPanel).html()+$(this).html());
        }
        
    }
    
   

});
$('.calc-button-add').click(function(){

if(lastAction!='')
{
    Calculate();
    lastAction='add';
}else
{
        
    $(prevPanel).html($(curPanel).html()+'+');
    $(curPanel).html("0");
    lastAction='add';
}
});
$('.calc-button-subtract').click(function(){

    if(lastAction!='')
    {
        Calculate();
        lastAction='subtract'
    }else
    {
            
        $(prevPanel).html($(curPanel).html()+'-');
        $(curPanel).html("0");
        lastAction='subtract'
    }
});
$('.calc-button-multiply').click(function(){

    if(lastAction!='')
    {
        Calculate();
        lastAction='multiply'
    }else
    {
            
        $(prevPanel).html($(curPanel).html()+'*');
        $(curPanel).html("0");
        lastAction='multiply'
    }
});
$('.calc-button-divide').click(function(){

    if(lastAction!='')
    {
        Calculate();
        lastAction='divide'
    }else
    {
            
        $(prevPanel).html($(curPanel).html()+'/');
        $(curPanel).html("0");
        lastAction='divide'
    }
});
$('.calc-button-comma').click(function(){

    if ($(curPanel).html().indexOf('.')==-1){
        $(curPanel).html($(curPanel).html()+".");
    }
     
});
$('.calc-button-clear').click(function(){

     $(curPanel).html('0')
     $(prevPanel).html('')
     lastAction=''
});
$('.calc-button-back').click(function(){

    if($(curPanel).html().length==1)
    {
        $(curPanel).html(0)

    } else 
    {
        $(curPanel).html($(curPanel).html().slice(0,$(curPanel).html().length-1))
        
        
    }
});
$('.calc-button-equals').click(Calculate);

function nya(){
    console.log("nya");
}
function Calculate(){

    switch (lastAction) {
        case 'add':
            $(curPanel).html(parseFloat(prevPanel.html())+parseFloat(curPanel.html()));
            break;

        case 'subtract':
            $(curPanel).html(parseFloat(prevPanel.html())-parseFloat(curPanel.html()));
            break;
        case 'multiply':
            $(curPanel).html(parseFloat(prevPanel.html())*parseFloat(curPanel.html()));
            break;
         case 'divide':
            if($(curPanel).html()=='0')   
               { alert('ya ne diana damirovna , ya tak ne umeyu');
                $(curPanel).html(prevPanel.html());
                }
                else
                {
                    $(curPanel).html(parseFloat(prevPanel.html())/parseFloat(curPanel.html()));

                }
             break;       
         
        default:
            break;
    }
    $(prevPanel).html('');
    lastAction='';
}




});