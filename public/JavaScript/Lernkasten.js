class Lernkasten {
    _lernkarten = {};

    get lernkastenElement() {
        return this._lernkastenElement;
    }

    set lernkastenElement(value) {
        this._lernkastenElement = value;
    }
    get lernkasten() {
        return this._lernkasten;
    }

    set lernkasten(value) {
        this._lernkasten = value;
    }
    get lernkarten() {
        return this._lernkarten;
    }
    set lernkarten(value) {
        this._lernkarten = value;
    }
    constructor(lernkasten) {

        this._lernkasten = lernkasten;
        this._lernkastenElement = $(".lernkasten");
    }

    erstelleAnsicht() {
        console.info(this._lernkasten);
        for (var i = 0; i <this._lernkasten.length; i++) {
            var newP = document.createElement("p");
            var button =    $(document.createElement('button')).prop({
                type: 'button',
                innerHTML: this._lernkasten[i],
                class: 'ui-button ui-corner-all ui-widget',
            });
            button[0].addEventListener("click",function(){
                console.info(button[0].innerHTML);
                $.get({
                    url: "learntrainer/public/controller.php",
                    data: {action:"getLernkasten",
                            filename:button[0].innerHTML},
                    success: function (data) {
                        var daten = JSON.parse(data);
                        console.log(daten.result);
                        for (var j = 1; j < daten.result.length; j++) {
                            this._lernkarten.j = new Lernkarte(daten.result[j][0],daten.result[j][1],j);
                        }
                        console.info(this._lernkarten);
                        $('<div />').html(this._lernkarten[0].erstelleAnsicht()).dialog({
                            minHeight:300,
                            minWidth:300,
                            resizable: true,
                            draggable:true,
                            title:button[0].innerHTML,
                        });
                    }
                });


            })
            newP.append(button[0]);
            this._lernkastenElement.append(newP);
        }
    }
}