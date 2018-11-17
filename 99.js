document.addEventListener("DOMContentLoaded", function (event) {
    let friends = ['Asim', 'Marvin', 'Alex', 'Tesfa', 'Marlon'];


    //button
    let btn = document.getElementsByClassName('Sing')[0];

    btn.addEventListener('click', function()    {

    // Create div for each friend with class of friend and h3 header
   
    let div1 = document.createElement('div')
    div1.className = ('friend')
    let divHeader = document.createElement('h3')
    let divHeaderText = document.createTextNode('Asim')
    document.body.appendChild(div1)
    div1.appendChild(divHeader)
    divHeader.appendChild(divHeaderText)
    // Create Paragraph for each song lyric 
    
        for (let j = 100; j > 0; j--) {
            if (j > 2) {
                let div1Par = document.createElement('p')
                let asimText1 = document.createTextNode(j + ` Lines of Code on the floor ` + j + ` Lines of Code , ` + 'Asim' + ` Slips and Falls, Breaks His Balls ` + (j - 1) + ` Lines of Code on the Floor`)
                div1.appendChild(div1Par)
                div1Par.appendChild(asimText1)
            } else if (j == 2) {
                let div1Par = document.createElement('p')
                let asimText2 = document.createTextNode(j + ` Lines of Code on the floor ` + j + ` Lines of Code , ` + 'Asim' + ` Slips and Falls, Breaks His Balls ` + (j - 1) + ` Line of Code on the Floor`)
                div1.appendChild(div1Par)
                div1Par.appendChild(asimText2)
            } else if (j == 1) {
                let div1Par = document.createElement('p')
                let asimText3 = document.createTextNode(j + ` Line of Code on the floor ` + j + ` Line of Code , ` + 'Asim' + ` Slips and Falls, Breaks His Balls ` + j + `NO MORE LINES STOP SLIPPING JEEZ`)
                div1.appendChild(div1Par)
                div1Par.appendChild(asimText3)
            }
        }
    
    
    //Friend2
    let div2 = document.createElement('div')
    div2.className = ('friend')
    let divHeader2 = document.createElement('h3')
    let divHeaderText2 = document.createTextNode('Marvin')
    document.body.appendChild(div2)
    div2.appendChild(divHeader2)
    divHeader2.appendChild(divHeaderText2)
    // Create Paragraph for each song lyric
    for (let j = 100; j > 0; j--) {
        if (j > 2) {
            let div2Par = document.createElement('p')
            let marvinText1 = document.createTextNode(j + ` Lines of Code on the floor ` + j + ` Lines of Code , ` + 'Marvin' + ` Slips and Falls, Breaks His Balls ` + (j - 1) + ` Lines of Code on the Floor`)
            div2.appendChild(div2Par)
            div2Par.appendChild(marvinText1)
        } else if (j == 2) {
            let div2Par = document.createElement('p')
            let marvinText2 = document.createTextNode(j + ` Lines of Code on the floor ` + j + ` Lines of Code , ` + 'Marvin' + ` Slips and Falls, Breaks His Balls ` + (j - 1) + ` Line of Code on the Floor`)
            div2.appendChild(div2Par)
            div2Par.appendChild(marvinText2)
        } else if (j == 1) {
            let div2Par = document.createElement('p')
            let marvinText3 = document.createTextNode(j + ` Line of Code on the floor ` + j + ` Line of Code , ` + 'Marvin' + ` Slips and Falls, Breaks His Balls ` + j + `NO MORE LINES STOP SLIPPING JEEZ`)
            div2.appendChild(div2Par)
            div2Par.appendChild(marvinText3)
        }
    }

    //Friend3
    let div3 = document.createElement('div')
    div3.className = ('friend')
    let divHeader3 = document.createElement('h3')
    let divHeaderText3 = document.createTextNode('Alex')
    document.body.appendChild(div3)
    div3.appendChild(divHeader3)
    divHeader3.appendChild(divHeaderText3)
    for (let j = 100; j > 0; j--) {
        if (j > 2) {
            let div3Par = document.createElement('p')
            let alexText1 = document.createTextNode(j + ` Lines of Code on the floor ` + j + ` Lines of Code , ` + 'Alex' + ` Slips and Falls, Breaks His Balls ` + (j - 1) + ` Lines of Code on the Floor`)
            div3.appendChild(div3Par)
            div3Par.appendChild(alexText1)
        } else if (j == 2) {
            let div3Par = document.createElement('p')
            let alexText2 = document.createTextNode(j + ` Lines of Code on the floor ` + j + ` Lines of Code , ` + 'Alex' + ` Slips and Falls, Breaks His Balls ` + (j - 1) + ` Line of Code on the Floor`)
            div3.appendChild(div3Par)
            div3Par.appendChild(alexText2)
        } else if (j == 1) {
            let div3Par = document.createElement('p')
            let alexText3 = document.createTextNode(j + ` Line of Code on the floor ` + j + ` Line of Code , ` + 'Alex' + ` Slips and Falls, Breaks His Balls ` + j + `NO MORE LINES STOP SLIPPING JEEZ`)
            div3.appendChild(div3Par)
            div3Par.appendChild(alexText3)
        }
    }

    //Friend4
    let div4 = document.createElement('div')
    div4.className = ('friend')
    let divHeader4 = document.createElement('h3')
    let divHeaderText4 = document.createTextNode('Tesfa')
    document.body.appendChild(div4)
    div4.appendChild(divHeader4)
    divHeader4.appendChild(divHeaderText4)
    for (let j = 100; j > 0; j--) {
        if (j > 2) {
            let div4Par = document.createElement('p')
            let tesfaText1 = document.createTextNode(j + ` Lines of Code on the floor ` + j + ` Lines of Code , ` + 'Marvin' + ` Slips and Falls, Breaks His Balls ` + (j - 1) + ` Lines of Code on the Floor`)
            div4.appendChild(div4Par)
            div4Par.appendChild(tesfaText1)
        } else if (j == 2) {
            let div4Par = document.createElement('p')
            let tesfaText2 = document.createTextNode(j + ` Lines of Code on the floor ` + j + ` Lines of Code , ` + 'Marvin' + ` Slips and Falls, Breaks His Balls ` + (j - 1) + ` Line of Code on the Floor`)
            div4.appendChild(div4Par)
            div4Par.appendChild(tesfaText2)
        } else if (j == 1) {
            let div4Par = document.createElement('p')
            let tesfaText3 = document.createTextNode(j + ` Line of Code on the floor ` + j + ` Line of Code , ` + 'Marvin' + ` Slips and Falls, Breaks His Balls ` + j + `NO MORE LINES STOP SLIPPING JEEZ`)
            div4.appendChild(div4Par)
            div4Par.appendChild(tesfaText3)
        }
    }

    //Friend5
    let div5 = document.createElement('div')
    div5.className = ('friend')
    let divHeader5 = document.createElement('h3')
    let divHeaderText5 = document.createTextNode('Marlon')
    document.body.appendChild(div5)
    div5.appendChild(divHeader5)
    divHeader5.appendChild(divHeaderText5)
    for (let j = 100; j > 0; j--) {
        if (j > 2) {
            let div5Par = document.createElement('p')
            let marlonText1 = document.createTextNode(j + ` Lines of Code on the floor ` + j + ` Lines of Code , ` + 'Marvin' + ` Slips and Falls, Breaks His Balls ` + (j - 1) + ` Lines of Code on the Floor`)
            div5.appendChild(div5Par)
            div5Par.appendChild(marlonText1)
        } else if (j == 2) {
            let div5Par = document.createElement('p')
            let marlonText2 = document.createTextNode(j + ` Lines of Code on the floor ` + j + ` Lines of Code , ` + 'Marvin' + ` Slips and Falls, Breaks His Balls ` + (j - 1) + ` Line of Code on the Floor`)
            div5.appendChild(div5Par)
            div5Par.appendChild(marlonText2)
        } else if (j == 1) {
            let div5Par = document.createElement('p')
            let marlonText3 = document.createTextNode(j + ` Line of Code on the floor ` + j + ` Line of Code , ` + 'Marvin' + ` Slips and Falls, Breaks His Balls ` + j + `NO MORE LINES STOP SLIPPING JEEZ`)
            div5.appendChild(div5Par)
            div5Par.appendChild(marlonText3)
        }
    }





  
    


    // Let btn do something when clicked
    // btn.addEventListener('click', letSing)

    // function letSing() {
    //     //Loop
    //     for (let i = 0; i < friends.length; i++) {
    //         // console.log(friends[i]);
    //         let eachFriend = friends[i]
    //         console.log(eachFriend);
    //         for (let j = 100; j > 0; j--) {
    //             if (j > 2) {
    //                 console.log(j + ` Lines of Code on the floor ` + j + ` Lines of Code , ` + eachFriend + ` Slips and Falls, Breaks His Balls ` + (j - 1) + ` Lines of Code on the Floor`)
    //             } else if (j == 2) {
    //                 console.log(j + ` Lines of Code on the floor ` + j + ` Lines of Code , ` + eachFriend + ` Slips and Falls, Breaks His Balls ` + (j - 1) + ` Line of Code on the Floor`);
    //             } else if (j == 1) {
    //                 console.log(j + ` Line of Code on the floor ` + j + ` Line of Code , ` + eachFriend + ` Slips and Falls, Breaks His Balls ` + j + `NO MORE LINES STOP SLIPPING JEEZ`);

    //             }
    //         }
    //     }
    // }



    //End of button function
    });
    //Ending DOM Tag
});