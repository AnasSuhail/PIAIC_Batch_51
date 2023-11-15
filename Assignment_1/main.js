var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("Hi Hamza, woud you like to learn AI?");
console.log("hello anas suhail,HELLO ANAS SUHAIL,Hello Anas Suhail");
console.log('Peter Drucker said once,"The best way to predict the future is to create it."');
var famous_person = "Peter Drucker";
var message = "Famous Quote 2: \"The best way to predict the future is to create it.\" - ".concat(famous_person);
console.log(message);
var nameWithWhitespace = "\t  Anas Suhail  \n";
console.log("Name with whitespace:");
console.log(nameWithWhitespace);
var strippedName = nameWithWhitespace.trim();
console.log("\nName after stripping whitespace:");
console.log(strippedName);
var additionResult = 5 + 3;
console.log("Addition: 5 + 3 = ".concat(additionResult));
var subtractionResult = 10 - 2;
console.log("Subtraction: 10 - 2 = ".concat(subtractionResult));
var multiplicationResult = 4 * 2;
console.log("Multiplication: 4 * 2 = ".concat(multiplicationResult));
var divisionResult = 16 / 2;
console.log("Division: 16 / 2 = ".concat(divisionResult));
console.log(8 + 14);
console.log(76 - 50);
console.log(6 * 3);
console.log(15 / 3);
var favoriteNumber = 13;
var messag = "My favorite number is ".concat(favoriteNumber, ".");
console.log(message);
var names = ["Ali", "Anas", "Fatima", "Saad", "Dua"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
var name = ["Ali", "Anas", "Fatima", "Saad", "Dua"];
for (var i = 0; i < names.length; i++) {
    var message_1 = "Hello, ".concat(names[i], "! Have a great day!"); // Personalized message for each person
    console.log(message_1);
}
var transportationList = ["car", "motorcycle", "bicycle", "train", "scooter"];
for (var _i = 0, transportationList_1 = transportationList; _i < transportationList_1.length; _i++) {
    var mode = transportationList_1[_i];
    console.log("I would like to bought a ".concat(mode, "."));
}
var guestList = ["Hamza Khan", "Khizar Moiz", "Asad Baig"];
for (var _a = 0, guestList_1 = guestList; _a < guestList_1.length; _a++) {
    var guest = guestList_1[_a];
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner at my place. It would be an honor to have you join us for a wonderful evening.\n\nSincerely, [Anas Suhail]"));
}
var guestlist = ["Hamza Khan", "Khizar Moiz", "Asad Baig"];
console.log("Original Guest List:");
for (var _b = 0, guestList_2 = guestList; _b < guestList_2.length; _b++) {
    var guest = guestList_2[_b];
    console.log("- ".concat(guest));
}
var replacementGuest = "Arsal Ahmed";
guestList[1] = replacementGuest;
console.log("\nUpdated Guest List:");
for (var _c = 0, guestList_3 = guestList; _c < guestList_3.length; _c++) {
    var guest = guestList_3[_c];
    console.log("- ".concat(guest));
}
// Original guest list
var guestlist = ["Hamza Khan", "Khizar Moiz", "Asad Baig"];
console.log("Original Guest List:");
for (var _d = 0, guestList_4 = guestList; _d < guestList_4.length; _d++) {
    var guest = guestList_4[_d];
    console.log("- ".concat(guest));
}
console.log("\nGreat news! We found a bigger dinner table, so we can invite more guests.");
guestList.unshift("Zubair Mehboob");
guestList.splice(2, 0, "Hanzala Sohail");
guestList.push("Taseer Raza");
console.log("\nUpdated Guest List:");
for (var _e = 0, guestList_5 = guestList; _e < guestList_5.length; _e++) {
    var guest = guestList_5[_e];
    console.log("- ".concat(guest));
}
console.log("\nNew Invitation Messages:");
for (var _f = 0, guestList_6 = guestList; _f < guestList_6.length; _f++) {
    var guest = guestList_6[_f];
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner at my place. It would be an honor to have you join us for a wonderful evening.\n\nSincerely, [Anas Suhail]"));
}
var guestList = [
    "Hamza Khan",
    "Arsal Ahmed",
    "Asad Baig",
    "Zubair Mehboob",
    "Hanzala Sohail",
    "Taseer Raza"
];
console.log("Original Guest List:");
for (var _g = 0, guestList_7 = guestList; _g < guestList_7.length; _g++) {
    var guest = guestList_7[_g];
    console.log("- ".concat(guest));
}
console.log("\nWe regret to inform you that due to unforeseen circumstances, we can only invite two people for dinner.");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner this time."));
}
console.log("\nDear ".concat(guestList[0], ", you are still invited to dinner."));
console.log("Dear ".concat(guestList[1], ", you are still invited to dinner."));
guestList.pop();
guestList.pop();
console.log("\nFinal Guest List:");
if (guestList.length === 0) {
    console.log("The guest list is now empty.");
}
else {
    for (var _h = 0, guestList_8 = guestList; _h < guestList_8.length; _h++) {
        var guest = guestList_8[_h];
        console.log("- ".concat(guest));
    }
}
var placesToVisit = [
    "London",
    "Maldives",
    "Istanbul",
    "Korea",
    "Morroco",
];
console.log("Original Order:");
console.log(placesToVisit);
console.log("\nAlphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort());
console.log("\nOriginal Order (not modified):");
console.log(placesToVisit);
/;
console.log("\nReverse Alphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
console.log("\nOriginal Order (not modified):");
console.log(placesToVisit);
console.log("\nReversed Order:");
console.log(placesToVisit.reverse());
console.log("\nOriginal Order (reversed again):");
console.log(placesToVisit);
console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit.sort());
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit.sort().reverse());
var guestList = [
    "Hamza Khan",
    "Arsal Ahmed",
    "Asad Baig",
    "Zubair Mehboob",
    "Hanzala Sohail",
    "Taseer Raza"
];
console.log("Original Guest List:");
for (var _j = 0, guestList_9 = guestList; _j < guestList_9.length; _j++) {
    var guest = guestList_9[_j];
    console.log("- ".concat(guest));
}
console.log("\nYou are inviting ".concat(guestList.length, " people to dinner."));
guestList.unshift("Ali Arif");
guestList.splice(2, 0, "Taha Rafi Khan");
guestList.push("Hammad Khan");
console.log("\nUpdated Guest List:");
for (var _k = 0, guestList_10 = guestList; _k < guestList_10.length; _k++) {
    var guest = guestList_10[_k];
    console.log("- ".concat(guest));
}
