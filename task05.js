function trianlgeAreaCalc(side1, side2, side3){
    var semiPerimeter = 1/2 * (side1 + side2 + side3);
    var area = Math.sqrt(semiPerimeter *(semiPerimeter - side1) *(semiPerimeter - side2) *(semiPerimeter - side3));
    return area;
}
