// 👉 Destructure item, quantity, and user.name inside the parameter.

const order = {
  item: "Book",
  quantity: 2,
  user: {
    id: 101,
    name: "Rajan",
  },
};

function fun({ item, quantity, user: { name } }) {
  //    const { item, quantity, user: {name}} = order;
  console.log(`${name} orderd ${quantity} to ${item} `);
}

fun(order);

//  Destructure theme, first font as primaryFont, second font as secondaryFont (default: "Helvetica").

const config = {
  theme: "dark",
  fonts: ["Arial"],
};

const {
  theme,
  fonts: [primaryFont, secondaryFont = "Helvetica"],
} = config;

console.log(theme, primaryFont, secondaryFont);
