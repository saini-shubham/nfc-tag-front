
// router.delete("/tags/remove/:id", verifyToken, async (req, res) => {
//     const { id } = req.params;
//     const { userId, userType } = req.user;
//     try {

//         if (userType !== "admin" || userType !== "superAdmin")
//             throw new Error("Unautorised")
//         else {
//             const tags = new Tag
//             const deletedTag = await tags.findByIdAndDelete(id)
//             if(deletedTag)
//                 res.status(200).json({message: "Deleted Successfully"})
//             else
//             res.status(200).json({message: "Not Found"})
//         }
//     }
//     catch (err) {
//         res.status(500).json({
//             error: "failed to delete",
//             msg: err
//         })
//     }
// })
