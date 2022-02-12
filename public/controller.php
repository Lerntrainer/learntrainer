<?php
include 'Model/Lernkarte.php';
include 'Model/Lernkasten.php';

$verzeichnis='../Lernkasten';

switch ($_GET['action']){
    case 'getLernkaesten':
        if ( $handle = opendir($verzeichnis) )
        {
            // einlesen der Verzeichnisses
            while (($file = readdir($handle)) !== false)
            {
                if ($file !=='.' || $file !=='..'){
                    $lernkaesten = $file;
                }
            }
            closedir($handle);
        }
        return $lernkaesten;
        break;
    case 'getLernkasten':
        break;

}