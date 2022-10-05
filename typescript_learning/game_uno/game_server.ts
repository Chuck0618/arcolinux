
enum Card_Color{Red, Green, Blue, Yellow,Black};//卡牌颜色
enum Card_Symbol{One,Two,Three,Four,Five,Six,Seven,Eight,Nine,Zero,Plus2,Plus4,Reverse,Skip,Discoloration};//卡牌符号
class Card{
    symbol: Card_Symbol;
    color: Card_Color;
    // is_feature: Boolean;
    toString():string{
      return Card_Symbol[this.symbol]+":"+Card_Color[this.color];
    }
  }
var card_group:Card[]=[];//卡组

function start_game_server():number
{
    var c1 =new Card();
    c1.color=Card_Color.Blue;
    c1.symbol=Card_Symbol.Two;
    console.log(c1.toString());
    console.log(Card_Color[2]);
    console.log(typeof(Card_Color[2]));
    return 0;
};
function creat_all_card():void{
  let i:number;
  let j:number;

  for(i=0;i<9;i++)
  for (j=0;j<4;j++)
  {
    var ci =new Card();//构造
    ci.color=j;
    ci.symbol=i;
    card_group.push(ci);
  }
}
function show_all_card():string[]{
  let i:number;
  var string_card_group:string[]=[];
  for (i=0; i< card_group.length;i++)
  {
    string_card_group.push(card_group[i].toString());
  }
  return string_card_group;
}

start_game_server();
creat_all_card();
console.log(show_all_card());