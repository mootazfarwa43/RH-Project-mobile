const User = require("../models/User");
const Product =require("../models/Product")

const getAllUsersInfo = async (req, res) => {
    try {
        const data = await User.find().select('-password');
        res.send(data)

    } catch (error) {
        console.log(error);
        res.status(400).send("Something went wrong")
    }
}
const getSingleUserInfo = async (req, res) => {
    const { userId } = req.params;
    const findUser = await User.findById(userId)
    if (findUser) {
        try {
            const findUser = await User.findById(userId).select('-password');
            res.send(findUser);
        } catch (error) {
            res.send("Something went wrong")
        }
    }
    else {
        res.status(400).send("User Not Found")
    }

}

const addProduct = async (req, res) => {
    const { name, brand, price, category, image, rating, type, author, description, gender, sellerId } = req.body;
    try {
        // Check if all required fields are provided
      

        // Create the product
        const product = await Product.create({ name, brand, price, category, image, rating, type, author, description, gender, sellerId });
        
        // Send the created product as a response
        res.status(201).json({ success: true, product });
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}


const deleteProduct = async (req, res) => {
    const { id } = req.params;
    let findProduct = await Product.findById(id);
    if (findProduct) {
        try {
            await Product.findByIdAndDelete(id)
            success = true
            res.send(success)
        } catch (error) {
            return res.status(400).send(error)
        }
    }
    else {
        return res.status(400).send({ success, msg: "Product Not Found" })
    }
}

const updateProductDetails = async (req, res) => {
    const updateProduct = req.body.productDetails;
    updateProduct.price = parseFloat(updateProduct.price);
    updateProduct.rating = parseFloat(updateProduct.rating);
    const { id } = req.params;
    const product = await Product.findById(id)
    if (product) {
        try {
            let update = await Product.findByIdAndUpdate(id, { $set: updateProduct })
            success = true
            const findType = await Product.find({ type: "book" }).distinct('category')

            res.send({ success, msg: "Product updated successfully", findType })

        } catch (error) {
            // return res.status(400).send({ success, error: error })
            return res.status(400).send(error)
        }
    }
    else {
        return res.status(400).send({ success, error: "Product not found" })
    }

}







module.exports = {
    getAllUsersInfo, getSingleUserInfo,addProduct,deleteProduct,updateProductDetails
  
}