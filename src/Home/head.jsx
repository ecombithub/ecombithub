// import { useState } from "react";

// function Head() {
//     const [imageFile, setImageFile] = useState(null);
//     const [shape, setShape] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [preview, setPreview] = useState(null);  // State for image preview

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         setImageFile(file);
//         if (file) {
//             setPreview(URL.createObjectURL(file));  // Create a preview URL
//         } else {
//             setPreview(null);  // Reset the preview if no file is selected
//         }
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setLoading(true);

//         const formData = new FormData();
//         formData.append('image', imageFile);  // Append the file to the form data
//         formData.append('shape', shape);

//         try {
//             const response = await fetch('http://localhost:5000/data', {
//                 method: 'POST',
//                 body: formData,  // Send form data including the file
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 console.log("Server response:", data);
//                 alert("Product added successfully!");

//                 // Reset form fields
//                 setImageFile(null);
//                 setShape("");
//                 setPreview(null);  // Reset image preview
//             } else {
//                 throw new Error(data.message || "Something went wrong");
//             }
//         } catch (error) {
//             console.error("Error submitting form:", error);
//             alert(`Error submitting form: ${error.message}`);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <h1>Hello HubSyntax</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Image:</label>
//                     <input 
//                         type="file" 
//                         onChange={handleImageChange}  // Handle file input change
//                         accept="image/*"  
//                     />
//                     {preview && <img src={preview} alt="Preview" width="100" />}  {/* Display image preview */}
//                 </div>
//                 <div>
//                     <label>Shape:</label>
//                     <input type="text" value={shape} onChange={(e) => setShape(e.target.value)} />
//                 </div>

//                 <button type="submit" disabled={loading}>
//                     {loading ? 'Submitting...' : 'Submit'}
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default Head;
