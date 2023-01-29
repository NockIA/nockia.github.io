function seeMore(bouton) {
    var divContenu = bouton.nextSibling;
    if(divContenu.nodeType == 3) divContenu = divContenu.nextSibling;
    if(divContenu.style.display == 'block') {
        divContenu.style.display = 'none';
    } else {
        divContenu.style.display = 'block';
    }
}