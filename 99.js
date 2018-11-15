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

