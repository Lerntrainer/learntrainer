<?php

class Lernkarte
{
    /**
     * @var string
     */
    private $frage='';
    /**
     * @var string
     */
    private $antwort='';
    /**
     * @param array $array
     */
    function __construct($array){

    }

    /**
     * @return string
     */
    public function getAntwort()
    {
        return $this->antwort;
    }

    /**
     * @param string $antwort
     */
    public function setAntwort($antwort)
    {
        $this->antwort = $antwort;
    }
}