class Lernkarte {
    get stelle() {
        return this._stelle;
    }

    set stelle(value) {
        this._stelle = value;
    }

    get antwort() {
        return this._antwort;
    }

    set antwort(value) {
        this._antwort = value;
    }
    get frage() {
        return this._frage;
    }

    set frage(value) {
        this._frage = value;
    }



    constructor(frage,antwort,stelle) {
        this._frage = frage;
        this._antwort = antwort;
        this._stelle = stelle;
    }
    erstelleAnsicht(lernkarten){
        var ansicht = [];
        for (var m=1;m<lernkarten.length;m++) {
           ansicht[m] = $('<div id="'+m+'"></div>').hide();
           ansicht[m].append($('<h2></h2>').text(lernkarten[m]._frage).attr('id','frage'+m));
           ansicht[m].append($('<h3></h3>').text(lernkarten[m]._antwort).attr('id','antwort'+m).hide());
           ansicht[m].append($('<input/>').attr({
                type: 'button',
                id:'btn_showAnswer'+m,
                value: 'Antwort zeigen',
                onclick:'showAnswer()'
            }).hide());
            ansicht[m].append($('<input/>').attr({
                type: 'button',
                id:'btn_rightAnswer'+m,
                value: 'richtige Antwort',
                onclick:'rightAnswer()'
            }).hide());
            ansicht[m].append($('<input/>').attr({
                type: 'button',
                id:'btn_falseAnswer'+m,
                value: 'falsche Antwort',
                onclick:'falseAnswer()',
                visibility: 'hidden'
            }).hide());
        }


        //document.getElementById('frage1').show();
        // $('#frage1').show();
        // $('#btn_showAnswer1');
        // ansicht = '<div>' +
        //     '<h2>' +this._frage+ '</h2>' +
        //     '<h3 class="antwort" id="answer">' +this._antwort+ '</h3>' +
        //     '<button onclick="showAnswer()" id="btn_showAnswer">Anwort zeigen</button>' +
        //     '<button onclick="rightAnswer()" id="btn_rightAnswer" style="visibility:hidden">richtige Antwort</button>' +
        //     '<button onclick="falseAnswer()" id="btn_falseAnswer" style="visibility:hidden">falsche Antwort</button>' +
        //     '<div id="div_lernkarten" lernkarten='+lernkarten+' style="visibility:hidden"></div>' +
        //     '<\div>'
        return ansicht;
    }
}