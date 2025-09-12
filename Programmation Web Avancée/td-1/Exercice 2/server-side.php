<html>
<body>

Bienvenue <?php echo $_POST["Nom"]; ?> !
<br>
<?php
    $birthdate = $_POST["Date"];
    $currentdate = date("Y-m-d");
    $birthDate = new DateTime($birthdate);

    
    $currentDate = new DateTime($currentdate);
    $interval = $birthDate->diff($currentDate);
    echo "Votre anniversaire est le : " . $birthDate->format('d') . ", " .
        $birthDate->format('m') . ", " . $birthDate->format('Y') . ". ";
    echo "Vous avez : " . $interval->y . " ans, " . $interval->m." mois, ".$interval->d." jours - ";
    echo "soit un total de : " . $interval->days . " jours ! ";
?>



</body>
</html>