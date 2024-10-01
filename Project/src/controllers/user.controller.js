import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/Cloudinary.js";
import { ApiRespose } from "../utils/ApiResponse.js";

// get user details from frontend
// validation shouldn't be empty
// check is user already exists: username, email, password, etc
// check for images, check for avatar
//upload them to cloudinary, avatar
//create user object - create entry in db
//remove password and refresh token from response
//check from the user creation
// return response


const registerUser = asyncHandler(async (req,res) => {
    // res.status(200).json({
    //     message: 'Ok'
    // })

    const {fullName, email, password, username} = req.body;
    console.log("email:", email);

    // if (fullName === ''){
    //     throw new ApiError(400, 'fullname is required')
    // }

    if (
        [fullName, email, password, username].some((field) => 
            field?.trim() === ''))
        {
            throw new ApiError(400, 'All fields are required')
        }

    const existedUser = User.findOne
        ({$or: [{username}, {email}]})

    if (existedUser) {
        throw new ApiError(409, 'User with email or username already exists')
    }

    const avatarLocalPath = req.files?.avatar[0]?.path; 
    // const converImageLocalPath = req.files?.converImage[0]?.path;

    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0){
        coverImageLocalPath = req.files.coverImage[0].path
    }

    if (!avatarLocalPath) {
        throw new ApiError(400, 'Avatar file is requred')
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if (!avatar) {
        throw new ApiError(400, 'Avatar file is requred')
    }

    const user = await User.create(
        {
            fullName,
            avatar: avatar.url,
            covarImage: coverImage?.url || '',
            email,
            password,
            username: username.toLowerCase(),

        }
    )

    const createdUser = await user.findById(user._id).select(
        '-password -refreshToken'
    )

    if (!createdUser){
        throw new ApiError(500, 'Something went wrong while registering new user')
    }

    return res.status(201).json(
        new ApiRespose(200, createdUser, 'User registered successfully')
    )


})

export {registerUser,}  