<?php 
if (!empty($_POST['name']) AND  !empty($_POST['phone'])){
  
  $headers = 'From: \r\n'.
             'Reply-To: dtsybulnikvlad@gmail.com\r\n'.
              'X-Mailer: PHP/'. phpversion();
             
  $theme = 'Новое сообщение';

  $letter .='Имя: '.$_POST['name'].'\r\n';
  $letter .='Телефон: '.$_POST['phone'].'\r\n';
 
  
  if (mail('tsybulnikvlad@gmail.com', $theme, $letter, $headers)){
    echo "Сообщение отправлено!";
  } else {
    echo "Ошибка при отправке!";
  }
} else {
  echo "Ошибка: Заполните все поля!";
}