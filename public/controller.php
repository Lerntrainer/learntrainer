<?php
include 'Model/Lernkarte.php';
include 'Model/Lernkasten.php';

$verzeichnis='./Lernkasten';

switch ($_GET['action']){
    case 'getLernkaesten':
        if (is_dir($verzeichnis)){
            if ( $handle = opendir($verzeichnis) )
            {
                while (($file = readdir($handle)) !== false)
                {
                    if ($file !=='.' || $file !=='..'){
                        $lernkaesten[] = $file;
                    }
                }
                closedir($handle);
            }
        }
        for ($i = 2, $iMax = count($lernkaesten); $i< $iMax; $i++){
            $return[]= $lernkaesten[$i];
        }


        echo json_encode(['result' => $return]);
        break;
    case 'getLernkasten':
        break;

}