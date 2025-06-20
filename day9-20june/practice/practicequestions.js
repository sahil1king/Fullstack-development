//q1
let menu =["roti","rice","paneer","chicken","matar-paneer","egg","eggrice","dal","egg-curry","dal makhni"]

//filtering out veg and non-veg items
let non_veg=menu.filter((item)=>{
    return !(item.includes("chicken") || item.includes("egg"))
})
console.log(non_veg)

//q2 filter out all the products which are wearable & white

let products = [
  {
    name: "product 1 name",
    category: "wearable",
    color: ["red", "white"]
  },
  {
    name: "product 2 name",
    category: "playable",
    color: ["black", "silver"]
  },
  {
    name: "product 3 name",
    category: "wearable",
    color: ["blue", "white"]
  },
  {
    name: "product 4 name",
    category: "playable",
    color: ["white", "gray"]
  },
  {
    name: "product 5 name",
    category: "playable",
    color: ["gold", "black"]
  },
  {
    name: "product 6 name",
    category: "wearable",
    color: ["orange", "black"]
  },
  {
    name: "product 7 name",
    category: "wearable",
    color: ["purple", "pink"]
  }
];

let WandW = products.filter((item) => {
    return item.color.includes("white") && item.category==="wearable";
});
console.log(WandW);
