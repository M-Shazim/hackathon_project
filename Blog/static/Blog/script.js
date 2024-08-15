const flexBox = document.getElementById("flex");
const nextSection = document.getElementById("nextSection");
const boxNum = 100;
const number = Number(Math.ceil(Math.random() * 100));
let prevClicked;
let prevClickedArray = [];
consoleHint();

function consoleHint() {
    console.log("Well, well, well...Do you know Binary!?")
    console.log(number.toString(2));
    console.log("'decrypt' function is for above hint");
}

function createBoxGrid() {
    for (let i = 0; i < boxNum; i++) {
        const createBox = document.createElement("div");
        const boxNumber = document.createElement("p");
        boxNumber.textContent = i + 1;
        boxNumber.classList.add("numberTag");
        boxNumber.id = i + 1;
        createBox.classList.add("box");
        createBox.id = i + 1;
        flexBox.append(createBox);

        const selectBox = document.getElementById(i + 1);
        selectBox.append(boxNumber);
    }
}

createBoxGrid();

const boxSelector = document.querySelectorAll(".box");
boxSelector.forEach(a => {
    a.addEventListener("click", a => {


        if (a.srcElement.classList == "clickedPrev" || a.srcElement.classList == "clicked") {

            spamClick();

        }
        else {

            rewardNumber(a.srcElement.id, a);

        }

    })
})

function spamClick() {

    const statement1 = "Looks like you don't want to enter in any other door. Try another door and see if you have better luck!";
    const statement2 = "Just try Another door, Are you Spam Clicking doors!";
    const statement3 = "Go away, don't choose the doors which you already checked."

    const reply = Math.ceil(Math.random() * 3);

    const replyStatement = assigner();

    function assigner() {

        switch (true) {
            case reply === 1:
                return statement1;

            case reply === 2:
                return statement2;

            case reply === 3:
                return statement3;

            default:
                return "Umm.............!";
        }

    }

    createTag(reply);

    const statement = document.getElementById("tryAgain");
    statement.textContent = replyStatement;
    statement.style.display = "block";
    flexBox.style.display = "none";

    centerTag();

}

function rewardNumber(selectedBoxID, a) {

    if (Number(selectedBoxID) === number) {
        flexBox.style.display = "none";
        nextSection.style.display = "block";

        // Insert next Section over here!
        nextStage();
    }
    else {

        if (a.target.classList == "numberTag") {
            const boxClicked = document.getElementById(a.target.id);
            boxClicked.textContent = "🃏";
            boxClicked.style.fontSize = "5em";
            boxClicked.classList.replace("box", "clickedPrev");

            if (prevClicked && prevClicked !== boxClicked && !prevClickedArray.includes(boxClicked)) {
                prevClicked.classList.replace("clickedPrev", "clicked")
            }
            prevClicked = boxClicked;
            prevClickedArray.push(boxClicked);
        }
        else {
            a.target.textContent = "🃏";
            a.target.style.fontSize = "5em";
            a.target.classList.replace("box", "clickedPrev");

            if (prevClicked && prevClicked !== a.target && !prevClickedArray.includes(a.target)) {
                prevClicked.classList.replace("clickedPrev", "clicked")
            }
            prevClicked = a.target;
            prevClickedArray.push(a.target);

        }


        tryAgain();
    }


}


function decrypt(input) {

    console.clear();
    return parseInt(input, 2) + ". Oh you found it...Nice";

}

function tryAgain() {

    const statement1 = "Looks like you didn't find the right one this time. Try another door and see if you have better luck!";
    const statement2 = "Oops, that’s not the door we’re looking for. Let’s give another door a shot!";
    const statement3 = "Close, but no luck with this door. Keep searching—one of the others might be the right choice.";
    const statement4 = "That door didn’t have what we need. Pick a different one and see if it's the correct choice.";
    const statement5 = "This door wasn’t the right one. Let’s move on to a new door and see if we have better success there.";

    const reply = Math.ceil(Math.random() * 6);

    const replyStatement = assigner();

    function assigner() {

        switch (true) {
            case reply === 1:
                return statement1;

            case reply === 2:
                return statement2;

            case reply === 3:
                return statement3;

            case reply === 4:
                return statement4;

            case reply === 5:
                return statement5;

            default:
                return "Oh...It's Okay, did you know we have a 'console' in JavaScript";
        }

    }

    createTag(reply);

    const statement = document.getElementById("tryAgain");
    statement.textContent = replyStatement;
    statement.style.display = "block";
    flexBox.style.display = "none";

    centerTag();

}

function createTag(reply) {
    const tagContainer = document.createElement("div");
    tagContainer.id = "container";
    document.body.append(tagContainer);

    const container = document.getElementById("container");
    const tag = document.createElement("P");
    tag.id = "tryAgain";
    container.append(tag);

    if (reply < 6) {
        setTimeout(() => {
            container.remove();
            flexBox.style.display = "flex";
            normal();
        }, 1000)
    }
    else {
        setTimeout(() => {
            container.remove();
            flexBox.style.display = "flex";
            normal();
        }, 2000)

    }
}

function centerTag() {

    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';
    document.body.style.margin = '0';

}

function normal() {

    document.documentElement.style.height = 'auto';
    document.body.style.height = 'auto';

}


function nextStage() {
    window.location.href = '/posts';

    document.getElementById('welcome').style.display = 'none';
    document.getElementById('nextSection').style.display = 'flex';
}





