// Define Scene Prototype


var opening = ['What am I doing here?', 'This is pathetic.', 'Wait.', 'Hullo?', 'Is someone there?', 'Oh!', 'Oh hullo!', 'I\'m so glad you are here!', 'You see, I\'ve been on this stage for a while. You\'re the first person I\'ve seen in a long time.', 'Listen, it\'s not a particularly good show.', 'I forgot my lines.', 'Actually, I don\'t know if I ever had lines.', 'Maybe I did once.', 'The problem is, not many people like plays without lines.', 'So, I\'ve been up here by myself for...', 'Well...', '...Eons, you might say.', 'Do you think you can help me?', 'If you give me some lines, I\'ll act it out!', 'Please.', 'Please don\'t leave me here.', 'I\'m so alone.']
var n = 0;

document.body.onkeyup = function(e, scene){
    if(e.keyCode == 32){
        document.getElementById('main').textContent = opening[n];
        n++;
    }
}

