import React from 'react'
import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';


export default function RTE({name, control, label, defaultValue =""}) {
  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        <Editor
        apiKey={import.meta.env.VITE_EDITOR_KEY }  
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            branding : false,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
    )}
    />

     </div>
  )
}


// import React from 'react';
// import { Editor } from '@tinymce/tinymce-react';
// import { Controller } from 'react-hook-form';
// import config from '../conf/config'; // Make sure this path is correct

// export default function RTE({ name, control, label, defaultValue = "" }) {
//   return (
//     <div className='w-full'> 
//       {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

//       <Controller
//         name={name || "content"}
//         control={control}
//         render={({ field: { onChange } }) => (
//           <Editor
//             apiKey={import.meta.env.VITE_EDITOR_KEY}  
//             initialValue={defaultValue}
//             init={{
//               height: 500,
//               menubar: true,
//               branding: false,
//               plugins: [
//                 "image",
//                 "advlist",
//                 "autolink",
//                 "lists",
//                 "link",
//                 "charmap",
//                 "preview",
//                 "anchor",
//                 "searchreplace",
//                 "visualblocks",
//                 "code",
//                 "fullscreen",
//                 "insertdatetime",
//                 "media",
//                 "table",
//                 "help",
//                 "wordcount",
//               ],
//               toolbar:
//                 "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
//               content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
//               images_upload_url: config.appwriteBucketID, // Your endpoint to handle image uploads
//               automatic_uploads: true, // Enable automatic uploads
//               file_picker_types: 'image', // Limit file picker to images
//               images_upload_handler: (blobInfo, success, failure) => {
//                 const xhr = new XMLHttpRequest();
//                 xhr.withCredentials = true;
//                 xhr.open('POST', config.appwriteBucketID); // Your upload endpoint from config

//                 xhr.onload = () => {
//                   if (xhr.status < 200 || xhr.status >= 300) {
//                     failure('HTTP Error: ' + xhr.status);
//                     return;
//                   }

//                   const json = JSON.parse(xhr.responseText);
//                   if (!json || typeof json.location !== 'string') {
//                     failure('Invalid JSON: ' + xhr.responseText);
//                     return;
//                   }

//                   success(json.location); // Use the location of the uploaded image
//                 };

//                 const formData = new FormData();
//                 formData.append('file', blobInfo.blob(), blobInfo.filename());
//                 xhr.send(formData);
//               }
//             }}
//             onEditorChange={onChange}
//           />
//         )}
//       />
//     </div>
//   );
// }
