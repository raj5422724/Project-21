function hascollided(b,w) {

    bulletrightedge = b.x + b.width;
    wallleftedge = w.x;
    if(bulletrightedge>=wallleftedge) {

        return true;

    }
    return false;

}