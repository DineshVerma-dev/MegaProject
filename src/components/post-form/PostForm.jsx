

// import React, { useCallback } from "react";
// import { useForm } from "react-hook-form";
// import { Button, Input, RTE, Select } from "../index";
// import appwriteService from "../../appwrite/conf";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// export default function PostForm({ post }) {
//     const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
//         defaultValues: {
//             title: post?.title || "",
//             slug: post?.$id || "",
//             content: post?.content || "",
//             status: post?.status || "active",
//         },
//     });

//     const navigate = useNavigate();
//     const userData = useSelector((state) => state.auth.userData);

   

//     const submit = async (data) => {
//         try {
//             // Check if post is defined
//             if (post) {
//                 // Upload the file if it exists
//                 const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;
    
//                 // If there's a new file, delete the old one
//                 if (file) {
//                     await appwriteService.deleteFile(post.featuredImage);
//                 }
    
//                 // Update the post
//                 const dbPost = await appwriteService.updatePosts(post.$id, {
//                     ...data,
//                     featuredImage: file ? file.$id : undefined,
//                 });
    
//                 // Check if dbPost is defined before navigating
//                 if (dbPost) {
//                     navigate(`/post/${dbPost.$id}`);
//                 } else {
//                     console.error("Failed to update the post.");
//                 }
//             } else {
//                 // For creating a new post
//                 const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;
    
//                 if (file) {
//                     const fileId = file.$id;
//                     data.featuredImage = fileId;
//                 }
    
//                 // Create the post
//                 const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });
    
//                 // Check if dbPost is defined before navigating
//                 if (dbPost) {
//                     navigate(`/post/${dbPost.$id}`);
//                 } else {
//                     console.error("Failed to create the post.");
//                 }
//             }
//         } catch (error) {
//             console.error("Error creating/updating post:", error);
//             // You can also set an error state to display an error message to the user
//         }
//     };
    

//     const slugTransform = useCallback((value) => {
//         if (value && typeof value === "string")
//             return value
//                 .trim()
//                 .toLowerCase()
//                 .replace(/[^a-zA-Z\d\s]+/g, "-")
//                 .replace(/\s/g, "-");

//         return "";
//     }, []);

//     React.useEffect(() => {
//         const subscription = watch((value, { name }) => {
//             if (name === "title") {
//                 setValue("slug", slugTransform(value.title), { shouldValidate: true });
//             }
//         });

//         return () => subscription.unsubscribe();
//     }, [watch, slugTransform, setValue]);

//     return (
//         <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
//             <div className="w-2/3 px-2">
//                 <Input
//                     label="Title :"
//                     placeholder="Title"
//                     className="mb-4"
//                     {...register("title", { required: true })}
//                 />
//                 <Input
//                     label="Slug :"
//                     placeholder="Slug"
//                     className="mb-4"
//                     {...register("slug", { required: true })}
//                     onInput={(e) => {
//                         setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
//                     }}
//                 />
//                 <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
//             </div>
//             <div className="w-1/3 px-2">
//                 <Input
//                     label="Featured Image :"
//                     type="file"
//                     className="mb-4"
//                     accept="image/png, image/jpg, image/jpeg, image/gif"
//                     {...register("image", { required: !post })}
//                 />
//                 {post && post.featuredImage && (
//                     <div className="w-full mb-4">
//                         <img
//                             src={appwriteService.getFilePreview(post.featuredImage)}
//                             alt={post.title}
//                             className="rounded-lg"
//                         />
//                     </div>
//                 )}
//                 <Select
//                     options={["active", "inactive"]}
//                     label="Status"
//                     className="mb-4"
//                     {...register("status", { required: true })}
//                 />
//                 <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
//                     {post ? "Update" : "Submit"}
//                 </Button>
//             </div>
//         </form>
//     );
// }


// import React, { useCallback, useState } from "react";
// import { useForm } from "react-hook-form";
// import { Button, Input, RTE, Select } from "../index";
// import appwriteService from "../../appwrite/conf";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Loading from "../Loading/Loading";

// export default function PostForm({ post }) {
//     const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
//         defaultValues: {
//             title: post?.title || "",
//             slug: post?.$id || "",
//             content: post?.content || "",
//             status: post?.status || "active",
//         },
//     });

//     const navigate = useNavigate();
//     const userData = useSelector((state) => state.auth.userData);
//     const [loading, setLoading] = useState(false);

//     const submit = async (data) => {
//         setLoading(true);
//         try {
//             if (post) {
//                 const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;
//                 if (file) {
//                     await appwriteService.deleteFile(post.featuredImage);
//                 }
//                 const dbPost = await appwriteService.updatePosts(post.$id, {
//                     ...data,
//                     featuredImage: file ? file.$id : undefined,
//                 });
//                 if (dbPost) navigate(`/post/${dbPost.$id}`);
//             } else {
//                 const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;
//                 if (file) data.featuredImage = file.$id;
//                 const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });
//                 if (dbPost) navigate(`/post/${dbPost.$id}`);
//             }
//         } catch (error) {
//             console.error("Error creating/updating post:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const slugTransform = useCallback((value) => {
//         if (value && typeof value === "string")
//             return value.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, "-").replace(/\s/g, "-");
//         return "";
//     }, []);

//     React.useEffect(() => {
//         const subscription = watch((value, { name }) => {
//             if (name === "title") {
//                 setValue("slug", slugTransform(value.title), { shouldValidate: true });
//             }
//         });
//         return () => subscription.unsubscribe();
//     }, [watch, slugTransform, setValue]);

//     return (
//         <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
//             {loading && <Loading />} 
//             <div className="w-2/3 px-2">
//                 <Input
//                     label="Title :"
//                     placeholder="Title"
//                     className="mb-4"
//                     {...register("title", { required: true })}
//                 />
//                 <Input
//                     label="Slug :"
//                     placeholder="Slug"
//                     className="mb-4"
//                     {...register("slug", { required: true })}
//                     onInput={(e) => {
//                         setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
//                     }}
//                 />
//                 <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
//             </div>
//             <div className="w-1/3 px-2">
//                 <Input
//                     label="Featured Image :"
//                     type="file"
//                     className="mb-4"
//                     accept="image/png, image/jpg, image/jpeg, image/gif"
//                     {...register("image", { required: !post })}
//                 />
//                 {post && post.featuredImage && (
//                     <div className="w-full mb-4">
//                         <img
//                             src={appwriteService.getFilePreview(post.featuredImage)}
//                             alt={post.title}
//                             className="rounded-lg"
//                         />
//                     </div>
//                 )}
//                 <Select
//                     options={["active", "inactive"]}
//                     label="Status"
//                     className="mb-4"
//                     {...register("status", { required: true })}
//                 />
//                 <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
//                     {post ? "Update" : "Submit"}
//                 </Button>
//             </div>
//         </form>
//     );
// }




import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "../index";
import appwriteService from "../../appwrite/conf";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const [loading, setLoading] = useState(false);

    const submit = async (data) => {
        setLoading(true);
        try {
            if (post) {
                const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;
                if (file) {
                    await appwriteService.deleteFile(post.featuredImage);
                }
                const dbPost = await appwriteService.updatePosts(post.$id, {
                    ...data,
                    featuredImage: file ? file.$id : undefined,
                });
                if (dbPost) navigate(`/post/${dbPost.$id}`);
            } else {
                const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;
                if (file) data.featuredImage = file.$id;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });
                if (dbPost) navigate(`/post/${dbPost.$id}`);
            }
        } catch (error) {
            console.error("Error creating/updating post:", error);
        } finally {
            setLoading(false);
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, "-").replace(/\s/g, "-");
        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });
        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            {loading && <Loading />}
            <div className="w-full md:w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-full md:w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && post.featuredImage && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}
