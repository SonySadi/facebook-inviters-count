let inviter = document.getElementsByClassName("qnrpqo6b");
let nameArr = {};
for (i = 0; i < inviter.length; i++) {
    let name = inviter[i].innerText.replace(" invited you to like this Page.", "").trim();
    nameArr[name] = nameArr[name] ? nameArr[name] + 1 : 1;
};
Object.entries(nameArr).sort((a, b) => b[1] - a[1]);
