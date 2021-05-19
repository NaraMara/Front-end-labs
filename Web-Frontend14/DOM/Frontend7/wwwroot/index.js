$(function(){

let item= $('.item').clone()
let list=$('.list')
let result=$('.result')
$('.item .up-button').click(UP)
$('.item .down-button').click(DOWN)
$('.item .delete-button').click(DELETE)

$('.add-button').click(function(){
    let newItem=$(item.clone())
    $(newItem).find('.up-button').click(UP)
    $(newItem).find('.down-button').click(DOWN)
    $(newItem).find('.delete-button').click(DELETE)
    $(list).append(newItem)
});

$('.save-button').click(function(){

    let keyAndValue={}
    for (current of $(list).children()) {
        keyAndValue[current.children[0].value] = current.children[1].value;
    }

    $(result).html(JSON.stringify(keyAndValue))

})
function DELETE(){
    $(this).parent().remove()
}
function UP(){
     

    $(this).parent().insertBefore($(this).parent().prev())
    
};
function DOWN(){
    
    
    $(this).parent().insertAfter($(this).parent().next())
    
};


});
