<?php
include 'Model/Lernkarte.php';
include 'Model/Lernkasten.php';

$verzeichnis='./Lernkasten/';

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
        // Datei öffnen, $handle ist der Dateizeiger
        $handle = fopen ($verzeichnis.$_GET['filename'], 'rb');
        $result = [];
        while (($csv_array = fgetcsv ($handle,0,';')) !== FALSE ) {
            // Ausgeben des Arrays $csv_array
            $result[] = [
                'Frage' => $csv_array[0],
                'Antwort' => $csv_array[1],
            ];
        }
        fclose($handle);
        echo json_encode(['result' => $result]);
        break;

}