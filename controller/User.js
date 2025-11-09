const User = require("../models/User")

exports.getUsers = async (req, res) => {
    try {
        // Select only specific fields from database
        const users = await User.find().select('name email age');
        res.status(200).json({
            success: true,
            data: users
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.getUserById = async (req, res) => {
    try {
        const id = req.params.id
        // Select only specific fields from database (excludes __v automatically)
        // Option 1: String format - space-separated field names
        const user = await User.findById(id).select('name email age').exec();

        // Option 2: Object format - explicitly set fields to 1 (include)
        // const user = await User.findById(id).select({ name: 1, email: 1, age: 1 }).exec();

        // Option 3: Exclude specific fields (include all except excluded ones)
        // const user = await User.findById(id).select('-__v').exec();

        // Option 4: Combine include and exclude
        // const user = await User.findById(id).select('name email age -__v').exec();

        if (!user) throw new Error("User not found");
        res.status(200).json({
            success: true,
            data: user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.createUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const user = await User.create({ name, email, age });

        // Select only the fields you want to send (excludes __v and other unwanted fields)
        res.status(201).json({
            success: true,
            data: {
                _id: user._id,
                name: user.name,
                email: user.email,
                age: user.age
            }
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


exports.updateUser = async (req, res) => {
    try {
        const id = req.params.id
        const { name, email, age } = req.body;
        // Select only specific fields when returning updated user
        const user = await User.findByIdAndUpdate(
            id,
            { name, email, age },
            { new: true, select: 'name email age' }
        )
        if (!user) throw new Error("User not found")
        res.status(200).json({
            success: true,
            data: user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findByIdAndDelete(id)
        if (!user) throw new Error("User not found")
        res.status(200).json({
            success: true,
            data: {}
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}