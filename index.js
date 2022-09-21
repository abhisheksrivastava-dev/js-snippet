let count = 0;
function functionClick () {
    let value = document.getElementById('comment-box').value;
    if(value.trim()){
        console.log(value)
        var div = document.createElement('div');
        div.innerHTML = value;
        div.setAttribute('id', 'comment-' + count);
        var mainCommentsDiv = document.getElementById('comments');
        mainCommentsDiv.insertBefore(div, mainCommentsDiv.firstChild);
        document.getElementById('comment-box').value = ''
        count++;
    } else {
        alert('Please Enter The Comment');
    }
}

document.querySelector('button').addEventListener('click', functionClick);