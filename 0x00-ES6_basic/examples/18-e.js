function getArea(width, height){
    if(isNaN(width) || isNaN(height)){
        throw new Error("Paramerter is not a number");
    }
}

try {
    getArea('a', 4);
}catch (e){
    console.log(e);
}