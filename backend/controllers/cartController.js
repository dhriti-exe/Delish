import userModel from "../models/usermodel.js";

// add items to cart
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    // no entry for that itemId
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      //that itemId has entry
      cartData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Item added to cart" });
    }catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
    }
};

// remove items from cart
const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Item removed from cart" });
    }catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
    }
};

//fetch cart data
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.json({ success: true, cartData });
    }catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
    }
};

export { addToCart, removeFromCart, getCart };