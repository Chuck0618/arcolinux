
enum Card_Color{Red, Green, Blue, Yellow,Black};//卡牌颜色
enum Card_Symbol{One,Two,Three,Four,Five,Six,Seven,Eight,Nine,Plus2,Reverse,Skip,Zero,Discoloration,Plus4};//卡牌符号
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
  let k:number;
  for (k=0;k<2;k++)
  for(i=0;i<12;i++)
  for (j=0;j<4;j++)
  {
    var ci =new Card();//构造
    ci.color=j;
    ci.symbol=i;
    card_group.push(ci);
  }
  
  for(j=0;j<4;j++)
  {
    var card_plus4 =new Card();//构造
    card_plus4.color=Card_Color.Black;
    card_plus4.symbol=Card_Symbol.Plus4;
    var card_dis =new Card();//构造
    card_dis.color=Card_Color.Black;
    card_dis.symbol=Card_Symbol.Discoloration;
    var card_zero =new Card();//构造
    card_zero.color=j;
    card_zero.symbol=Card_Symbol.Zero;
    card_group.push(card_plus4);
    card_group.push(card_dis);
    card_group.push(card_zero);
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