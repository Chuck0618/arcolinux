var Card_Color;
(function (Card_Color) {
    Card_Color[Card_Color["Red"] = 0] = "Red";
    Card_Color[Card_Color["Green"] = 1] = "Green";
    Card_Color[Card_Color["Blue"] = 2] = "Blue";
    Card_Color[Card_Color["Yellow"] = 3] = "Yellow";
})(Card_Color || (Card_Color = {}));
;
var Card_Symbol;
(function (Card_Symbol) {
    Card_Symbol[Card_Symbol["One"] = 0] = "One";
    Card_Symbol[Card_Symbol["Two"] = 1] = "Two";
    Card_Symbol[Card_Symbol["Three"] = 2] = "Three";
    Card_Symbol[Card_Symbol["Four"] = 3] = "Four";
    Card_Symbol[Card_Symbol["Five"] = 4] = "Five";
    Card_Symbol[Card_Symbol["Six"] = 5] = "Six";
    Card_Symbol[Card_Symbol["Seven"] = 6] = "Seven";
    Card_Symbol[Card_Symbol["Eight"] = 7] = "Eight";
    Card_Symbol[Card_Symbol["Nine"] = 8] = "Nine";
    Card_Symbol[Card_Symbol["Zero"] = 9] = "Zero";
    Card_Symbol[Card_Symbol["Plus2"] = 10] = "Plus2";
    Card_Symbol[Card_Symbol["Plus4"] = 11] = "Plus4";
    Card_Symbol[Card_Symbol["Reverse"] = 12] = "Reverse";
    Card_Symbol[Card_Symbol["Skip"] = 13] = "Skip";
    Card_Symbol[Card_Symbol["Discoloration"] = 14] = "Discoloration";
})(Card_Symbol || (Card_Symbol = {}));
;
var Card = /** @class */ (function () {
    function Card() {
    }
    // is_feature: Boolean;
    Card.prototype.toString = function () {
        return Card_Symbol[this.symbol] + ":" + Card_Color[this.color];
    };
    return Card;
}());
var card_group = [];
function start_game_server() {
    var c1 = new Card();
    c1.color = Card_Color.Blue;
    c1.symbol = Card_Symbol.Two;
    console.log(c1.toString());
    console.log(Card_Color[2]);
    console.log(typeof (Card_Color[2]));
    return 0;
}
;
function creat_all_card() {
    var i;
    var j;
    for (i = 0; i < 9; i++)
        for (j = 0; j < 4; j++) {
            var ci = new Card(); //构造
            ci.color = j;
            ci.symbol = i;
            card_group.push(ci);
        }
}
function show_all_card() {
    var i;
    var string_card_group = [];
    for (i = 0; i < card_group.length; i++) {
        string_card_group.push(card_group[i].toString());
    }
    return string_card_group;
}
start_game_server();
creat_all_card();
console.log(show_all_card());
