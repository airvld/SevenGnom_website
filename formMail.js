let button = document.querySelector('button');

/*add event on the send button*/
button.addEventListener('click', function(event) {
  event.preventDefault();
/*create object*/
  let formData = {
    name: document.querySelector('#name').value,
    messangerContact: document.querySelector('#messanger-contact').value,
    messanger: document.querySelector('#messanger').value,
    message: document.querySelector('#message').value
  }

 /*transmit data*/ 
  let request = new XMLHttpRequest();

  request.open('POST', "mail.php")
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send('name=' + encodeURIComponent(formData.name) + '&messangerContact=' + encodeURIComponent(formData.messangerContact) + '&messanger=' +  encodeURIComponent(formData.messanger) + '&message=' +    encodeURIComponent(formData.message))
})