const invader = {
    boardResult : document.querySelector('.boardResult'),
    grille : document.createElement('div'),
    form : document.querySelector('.configuration'),
    inputGrilleSize : document.querySelector('.invaderGridSize'),
    inputPixelSize : document.querySelector('.invaderPixelSize'),
    buttonValidateForm : document.querySelector('.startInvader'),
    colors : document.querySelectorAll('.color'),
    currentColor : "plain",
    palette : document.createElement('div'),
    buttonPlain :document.createElement('button'),
    buttonEmpty :document.createElement('button'),
    buttonLight :document.createElement('button'),
    buttonHighlight :document.createElement('button'),

    styles: [
        'plain',
        'empty',
        'light',
        'highlight',
    ],


    init : function() {
        invader.boardResult.innerHTML = "";
        invader.grille.id = 'invader';
        invader.boardResult.appendChild(invader.grille);

        invader.inputPixelSize.addEventListener('input', invader.changePixelSize)
    
        invader.buttonValidateForm.addEventListener('click', invader.gerenerateNewGrid);

        invader.buttonPlain.classList = "color plain";
        invader.buttonEmpty.classList = "color empty";
        invader.buttonLight.classList = "color light";
        invader.buttonHighlight.classList = "color highlight";

        invader.palette.appendChild(invader.buttonPlain);
        invader.palette.appendChild(invader.buttonEmpty);
        invader.palette.appendChild(invader.buttonLight);
        invader.palette.appendChild(invader.buttonHighlight);
        invader.palette.id = 'palette';
        invader.boardResult.appendChild(invader.palette);

        invader.colors = document.querySelectorAll('.color');

        for (let button of invader.colors){
            button.addEventListener('click', invader.getCurrentColor);
        }

        invader.gerenerateNewGrid();
    },

    changePixelSize: function(){
        const allPixels = document.querySelectorAll('.cellule');
        const pixelSize = invader.inputPixelSize.value;
        for (const pixel of allPixels) {
            pixel.style.width = `${pixelSize}px`;
            pixel.style.height = `${pixelSize}px`;
        }
    },

    gerenerateNewGrid : function(event) {
        if (event) {
            event.preventDefault();
        }

        const grilleSize = invader.inputGrilleSize.value;
        const pixelSize = invader.inputPixelSize.value;
        invader.grille.innerHTML = "";

        for (i = 0 ; i < grilleSize ; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            for (x = 0 ; x < grilleSize ; x++) {
                const pixElement = document.createElement('div');
                pixElement.classList.add('cellule');
                pixElement.style.width = `${pixelSize}px`;
                pixElement.style.height = `${pixelSize}px`;
                pixElement.addEventListener('click', invader.handleClickPixElement);
                row.appendChild(pixElement);
            }
            invader.grille.appendChild(row);
        }
        
    },

    handleClickPixElement : function(event){
        const cellTarget = event.currentTarget;

        if (invader.currentColor === "plain"){
            cellTarget.classList.remove('empty', 'light', 'highlight');
            cellTarget.classList.toggle(invader.currentColor);
        } else if (invader.currentColor === "empty") {
            cellTarget.classList.remove('plain', 'light', 'highlight');
            cellTarget.classList.toggle(invader.currentColor);
        } else if (invader.currentColor === "light") {
            cellTarget.classList.remove('plain', 'empty', 'highlight');
            cellTarget.classList.toggle(invader.currentColor);
        } else if (invader.currentColor === "highlight") {
            cellTarget.classList.remove('plain', 'empty', 'light');
            cellTarget.classList.toggle(invader.currentColor);
        }
    },

    getCurrentColor : function(event){
        const colorElement = event.currentTarget;

        if (colorElement.classList.contains('plain')) {
            invader.currentColor = "plain";
        } else if (colorElement.classList.contains('empty')){
            invader.currentColor = "empty";
        } else if (colorElement.classList.contains('light')){
            invader.currentColor = "light";
        } else if (colorElement.classList.contains('highlight')){
            invader.currentColor = "highlight";
        }
    }

}