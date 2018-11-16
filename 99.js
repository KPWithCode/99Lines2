document.addEventListener("DOMContentLoaded", function (event) {
    let friends = ['Asim', 'Marvin', 'Alex', 'Tesfa', 'Marlon'];

    // Create div for each friend with class of friend and h3 header
    let div1 = document.createElement('div')
    div1.className=('friend')
    let divHeader=document.createElement('h3')
    let divHeaderText = document.createTextNode('Asim')
    document.body.appendChild(div1)
    div1.appendChild(divHeader)
    divHeader.appendChild(divHeaderText)

    let div2 = document.createElement('div')
    div2.className=('friend')
    let divHeader2=document.createElement('h3')
    let divHeaderText2 = document.createTextNode('Marvin')
    document.body.appendChild(div2)
    div2.appendChild(divHeader2)
    divHeader2.appendChild(divHeaderText2)

    let div3 = document.createElement('div')
    div3.className=('friend')
    let divHeader3=document.createElement('h3')
    let divHeaderText3 = document.createTextNode('Alex')
    document.body.appendChild(div3)
    div3.appendChild(divHeader3)
    divHeader3.appendChild(divHeaderText3)

    let div4 = document.createElement('div')
    div4.className=('friend')
    let divHeader4=document.createElement('h3')
    let divHeaderText4 = document.createTextNode('Tesfa')
    document.body.appendChild(div4)
    div4.appendChild(divHeader4)
    divHeader4.appendChild(divHeaderText4)

    let div5 = document.createElement('div')
    div5.className=('friend')
    let divHeader5=document.createElement('h3')
    let divHeaderText5 = document.createTextNode('Marlon')
    document.body.appendChild(div5)
    div5.appendChild(divHeader5)
    divHeader5.appendChild(divHeaderText5)


   



    let btn = document.getElementsByClassName('Sing')[0];


    // Let btn do something when clicked
    btn.addEventListener('click', letSing)

    function letSing() {
        //Loop
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
    }

    //Ending DOm Tag
});