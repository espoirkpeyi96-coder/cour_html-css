<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $nom = htmlspecialchars($_POST["nom"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // Prévenir injection d'entêtes
    $email = str_replace(array("\r","\n"),'', $email);

    if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
        echo "Email invalide.";
        exit;
    }

    $destinataire = "espoirkpeyi8@gmail.com"; // 🔴 CHANGE TON EMAIL
    $sujet = "Nouveau message depuis la plateforme HTML & CSS";

    $contenu = "Nom : $nom\n";
    $contenu .= "Email : $email\n\n";
    $contenu .= "Message :\n$message";

    $headers = "From: $email";

    if(mail($destinataire,$sujet,$contenu,$headers)){
        echo "Message envoyé avec succès.";
    }else{
        echo "Erreur lors de l'envoi.";
    }
}
?>
