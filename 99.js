let friends = ['Asim', 'Marvin', 'Alex', 'Tesfa', 'Marlon'];




// for (i = 100; i>0 ; i--)
for (let i = 0; i < friends.length; i++) {
    // console.log(friends[i]);
    let eachFriend = friends[i]
    console.log(eachFriend);
    for (let j = 100; j > 0; j--) {
        if (j > 2) {
            console.log(j + ` Lines of Code on the floor ` + j + ` Lines of Code , ` + eachFriend + ` Slips and Falls, Breaks His Balls ` + (j - 1) + ` Lines of Code on the Floor`)
        } else if (j == 2) {
            console.log(j + ` Lines of Code on the floor ` + j + ` Lines of Code , ` + eachFriend + ` Slips and Falls, Breaks His Balls ` + (j - 1) + ` Line of Code on the Floor`);
        } else if (j == 1) {
            console.log(j + ` Line of Code on the floor ` + j + ` Line of Code , ` + eachFriend + ` Slips and Falls, Breaks His Balls ` + j + `NO MORE LINES STOP SLIPPING JEEZ`);

        }
    }
}

// console.log(j)
// # DISGUSTING INEFFICIENT STOP REPEATING CODE KYLE
//         if (j > 1) {
//             console.log(+j + ` Lines of Code on the floor ` + j + ` Lines of Code , ` + friends[0] + ` Slips and Falls, Breaks His Balls ` + j + ` Lines of Code on the Floor`);

//         } else if (j <= 1)
//             console.log(+j + ` Line of Code on the floor ` + j + ` Line of Code , ` + friends[0] + ` Slips and Falls, Breaks His Balls ` + j + `Line of Code on the Floor`);
//         else(j = 0)
//         console.log(` STOP SLIPPING ` + friends[0] + ` I CLEANED THIS MESS UP`)
//     }
// }

// for (let j = 100; j > 0; j--)
//     if (j > 1) {
//         console.log(+j + ` Lines of Code on the floor ` + j + ` Lines of Code , ` + friends[1] + ` Slips and Falls, Breaks His Balls ` + j + ` Lines of Code on the Floor`);

//     } else if (j <= 1)
//     console.log(+j + ` Line of Code on the floor ` + j + ` Line of Code , ` + friends[1] + ` Slips and Falls, Breaks His Balls ` + j + `Line of Code on the Floor`);
// else(j = 0)
// console.log(` STOP SLIPPING ` + friends[1] + ` I CLEANED THIS MESS UP`)

// for (let j = 100; j > 0; j--)
//     if (j > 1) {
//         console.log(+j + ` Lines of Code on the floor ` + j + ` Lines of Code , ` + friends[2] + ` Slips and Falls, Breaks His Balls ` + j + ` Lines of Code on the Floor`);

//     } else if (j <= 1)
//     console.log(+j + ` Line of Code on the floor ` + j + ` Line of Code , ` + friends[2] + ` Slips and Falls, Breaks His Balls ` + j + `Line of Code on the Floor`);
// else(j = 0)
// console.log(` STOP SLIPPING ` + friends[2] + ` I CLEANED THIS MESS UP `)


// for (let j = 100; j > 0; j--)
//     if (j > 1) {
//         console.log(+j + ` Lines of Code on the floor ` + j + ` Lines of Code , ` + friends[3] + ` Slips and Falls, Breaks His Balls ` + j + ` Lines of Code on the Floor`);

//     } else if (j <= 1)
//     console.log(+j + ` Line of Code on the floor ` + j + ` Line of Code , ` + friends[3] + ` Slips and Falls, Breaks His Balls ` + j + `Line of Code on the Floor`);
// else(j = 0)
// console.log(` STOP SLIPPING ` + friends[3] + ` I CLEANED THIS MESS UP `)


// for (let j = 100; j > 0; j--)
//     if (j > 1) {
//         console.log(+j + ` Lines of Code on the floor ` + j + ` Lines of Code , ` + friends[4] + ` Slips and Falls, Breaks His Balls ` + j + ` Lines of Code on the Floor`);

//     } else if (j <= 1)
//     console.log(+j + ` Line of Code on the floor ` + j + ` Line of Code , ` + friends[4] + ` Slips and Falls, Breaks His Balls ` + j + `Line of Code on the Floor`);
// else(j = 0)
// console.log(` STOP SLIPPING ` + friends[4] + `I CLEANED THIS MESS UP`)





//THE DO WHILE GUY 

// console.log(+ i + ` Lines of Code on the floor` + i + ` Lines of Code,` + friends[1] + ` Slips and Falls, Breaks His Balls`  + i + ` Lines of Code on the Floor`);
// console.log(+ i + ` Lines of Code on the floor` + i + ` Lines of Code,` + friends[2] + ` Slips and Falls, Breaks His Balls`  + i + ` Lines of Code on the Floor`);
// console.log(+ i + ` Lines of Code on the floor` + i + ` Lines of Code,` + friends[3] + ` Slips and Falls, Breaks His Balls`  + i + ` Lines of Code on the Floor`);
// console.log(+ i + ` Lines of Code on the floor` + i + ` Lines of Code,` + friends[4] + ` Slips and Falls, Breaks His Balls`  + i + ` Lines of Code on the Floor`);

// do {
//    console.log( + [i] + `Lines of Code on the floor` +[i]+ `Lines of Code,` + friends[0] + `Slips and Falls, Breaks His Balls`  + [i] + `Lines of Code on the Floor`);
//    console.log( + [i] + `Lines of Code on the floor` +[i]+ `Lines of Code,` + friends[1] + `Slips and Falls, Breaks His Balls`  + [i] + `Lines of Code on the Floor`);
//    console.log( + [i] + `Lines of Code on the floor` +[i]+ `Lines of Code,` + friends[2] + `Slips and Falls, Breaks Her Balls`  + [i] + `Lines of Code on the Floor`);
//    console.log( + [i] + `Lines of Code on the floor` +[i]+ `Lines of Code,` + friends[3] + `Slips and Falls, Breaks His Balls`  + [i] + `Lines of Code on the Floor`);
//    console.log( + [i] + `Lines of Code on the floor` +[i]+ `Lines of Code,` + friends[4] + `Slips and Falls, Breaks His Balls`  + [i] + `Lines of Code on the Floor`);
// }

// while  (friends>0);