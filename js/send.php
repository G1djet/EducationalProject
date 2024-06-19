<?php
// Получаем данные из $_POST
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Настройки электронной почты
$to = "spam3124@mail.ru"; // Укажите адрес электронной почты, на который отправить форму
$subject = "Новое сообщение с сайта"; // Тема письма
$body = "Имя: $name\nEmail: $email\nСообщение: $message";
$headers = "From: $email";

// Отправляем письмо
if (mail($to, $subject, $body, $headers)) {
    $response = array(
        'status' => 'success',
        'message' => 'Сообщение успешно отправлено!'
    );
} else {
    $response = array(
        'status' => 'error',
        'message' => 'Произошла ошибка при отправке сообщения.'
    );
}

// Возвращаем ответ в формате JSON
header('Content-Type: application/json');
echo json_encode($response);
?>