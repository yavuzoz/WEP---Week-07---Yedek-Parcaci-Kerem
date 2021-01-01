const yedekParca = [
    "lastik ",
    "akü ",
    "motor ",
    "cam ",
    "ayna ",
    "far anahtari",
    "sis fari",
    "5 ileri 1 geri vites",
    "motor",
];

// buyuk harflerle yedek parca listesi
function changeToUpperCase() {
    let newList = [];
    for (let index = 0; index < yedekParca.length; index++) {
        let element = yedekParca[index];
        newList.push(element.toUpperCase());
    }
    console.log("Büyük harflere cevrili sekli: " + newList);
}
changeToUpperCase();

//parca isimlerinden sayilar cikartmak icin
let newYedekParcaArray = [];
function deleteNumbersFromArray() {
    for (let index = 0; index < yedekParca.length; index++) {
        let element = yedekParca[index];
        element.split("");
        let usingArrayFrom = Array.from(element);
        // console.log(usingArrayFrom);
        newYedekParcaArray.push(usingArrayFrom);
    }
    newYedekParcaArray[7].splice(0, 1);
    newYedekParcaArray[7].splice(7, 1);
    console.log("arrayin numaralar silinmis hali" + newYedekParcaArray);
    return newYedekParcaArray;
}
deleteNumbersFromArray();

// reverse;array icindeki elemanlari tersine yazdirmak icin
function reverseElementsName() {
    let reverseArray = [];
    for (let index = 0; index < newYedekParcaArray.length; index++) {
        let newElement = newYedekParcaArray[index].reverse();
        reverseArray.push(newElement);
    }
    console.log("Ters eleman ismi: " + reverseArray);
    return reverseArray;
}
reverseElementsName();

// add KEREMAG_ to beginn array element
function addElement() {
    const beginnAddElement = "KEREMAG_";
    let myArray = [];
    for (let index = 0; index < yedekParca.length; index++) {
        let newElement = beginnAddElement + yedekParca[index];
        myArray.push(newElement);
    }
    console.log(myArray);
}
addElement();

//parcanin sisteme girildigi tarih
function addDateEnd() {
    let newArray = [];
    const date = new Date();
    for (let index = 0; index < yedekParca.length; index++) {
        let newElement = yedekParca[index] + date;

        newArray.push(newElement);
    }
    console.log(newArray);
}
addDateEnd();