const parseData = function (input) {
    const {data, column} = input;

    // const person1 = {}
    // person1[column[0].name]="Anna";
    // person1[column[1].name]=16;
    // person1[column[2].name]="Female";
    // person1[column[3].name]="2004-12-01";
    // const person2 = {}
    // person2[column[0].name]="Kevin";
    // person2[column[1].name]=22;
    // person2[column[2].name]="Male";
    // person2[column[3].name]="1998-01-21";

    const arr = [];

    for (let i = 0; i < data.length; i++) {
        const person = {}
        for (let j = 0; j < data[i].length; j++) {
            person[column[j].name]=data[i][j];
        }
        arr.push(person)
    }
    return arr;
}
export {parseData};
