//Third part

let name ='Adam'

console.log (name + "'s apple")
console.log ('Hello World!')

$('h1').text('We are having a 10 minute break')

$('p').html('StayAtHome Coding Camp, Likes: <spam>13</spam>');

$('spam').css('background', 'lime')
$('spam').css('padding', '10px')

$('h2').toggleClass('blue')
$('h2').toggleClass('blue')


$('ul').append('<li>My name is ' + name + '</li>')
$('ul').append('<li>My name is ' + name + '</li>')
$('ul').append('<li>My name is ' + name + '</li>')
$('ul').append('<li>My name is ' + name + '</li>')
$('ul').append('<li id="special-list-item">Removable ' + name + '</li>')



$('#special-list-item').remove()

let addButtonHandler = () => {
    if ($('li').length < 5) {
     $('ul').append('<li>My name is ' + name + '</li>');
    }
}

$('#add-button').click(addButtonHandler)

$('#remove-button').click(()=>{
    $('li:last-child').remove()
})

//Fourth part

let age = 12;

console.log('Starting the if')

if (age < 18) {
    console.log('Not old enough to drive')
}  else {
    console.log('Old enough to drive')}

 console.log('This is after the if')    

 let colors = ['orange', 'magenta', 'lime', 'yellow', 'cyan']

 $('#box-container').append('<div class="box"></div>')
 $('.box:last-child').css('background', colors[0])
 $('#box-container').append('<div class="box"></div>')
 $('.box:last-child').css('background', colors[1])
 $('#box-container').append('<div class="box"></div>')
 $('.box:last-child').css('background', colors[2])
 $('#box-container').append('<div class="box"></div>')
 $('.box:last-child').css('background', colors[3])
 $('#box-container').append('<div class="box"></div>')
 $('.box:last-child').css('background', colors[4])
 $('#box-container').append('<div class="box"></div>')
 $('.box:last-child').css('background', colors[5])

 colors.push('purple')

 colors.forEach((color)=>{
    $('#box-container').append('<div class="box"></div>')
    $('.box:last-child').css('background', color)
 })

 for(let i=0; i<100; i=i+1) {
     console.log(i);

     
 }


