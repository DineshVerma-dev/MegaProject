// // src/components/Loader.js
// import React from 'react';

// const Loading = () => {
//     return (
//         <div className="loader">
//             <style jsx>{`
//                 .loader {
//                     position: fixed;
//                     top: 0;
//                     left: 0;
//                     right: 0;
//                     bottom: 0;
//                     background: rgba(255, 255, 255, 0.8);
//                     display: flex;
//                     justify-content: center;
//                     align-items: center;
//                     z-index: 1000; /* Make sure it stays on top of everything */
//                 }
//                 /* Add your spinner styles here */
//                 .spinner {
//                     border: 8px solid rgba(255, 255, 255, 0.3);
//                     border-left-color: #3498db;
//                     border-radius: 50%;
//                     width: 50px;
//                     height: 50px;
//                     animation: spin 1s linear infinite;
//                 }
//                 @keyframes spin {
//                     to {
//                         transform: rotate(360deg);
//                     }
//                 }
//             `}</style>
//             <div className="spinner"></div>
//         </div>
//     );
// };

// export default Loading;

// src/components/Loader.js

// src/components/Loader.js
import React from 'react';

const Loading = () => {
    return (
        <div className="loader">
            <style jsx>{`
                .loader {
                    position: fixed;
                    top: 1rem;
                    right: 1rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000; /* Keep on top */
                }

                /* Spinner styles */
                .spinner {
                    border: 2px solid rgba(0, 0, 0, 0.1); /* Light border */
                    border-left-color: black; /* Visible color for the animation */
                    border-radius: 50%;
                    width: 25px;
                    height: 25px;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
            <div className="spinner"></div>
        </div>
    );
};

export default Loading;




 export const RenderSpinner = () => {
    return (
        <div className="loader">
            <style jsx>{`
                .loader {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background: rgba(255, 255, 255, 0.8); /* Semi-transparent overlay */
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                }

                /* Large spinner styles */
                .spinner {
                    border: 8px solid rgba(0, 0, 0, 0.1); /* Light border */
                    border-top: 8px solid #3498db; /* Blue color for the animation */
                    border-radius: 50%;
                    width: 100px;
                    height: 100px;
                    animation: spin 3s linear infinite;
                    
                }

                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
            <div className="spinner"></div>
        </div>
    );
};





 export const TopLoader = ({ loading }) => {
    return (
        <>
            {loading && (
                <div className="top-loader">
                    <style jsx>{`
                        .top-loader {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 4px; /* Adjust the height of the loader */
                            background-color: #3498db; /* Customize color */
                            animation: loadingAnimation 2s ease-in-out infinite;
                            z-index: 1000;
                        }

                        @keyframes loadingAnimation {
                            0% {
                                transform: translateX(-100%);
                            }
                            50% {
                                transform: translateX(0%);
                            }
                            100% {
                                transform: translateX(100%);
                            }
                        }
                    `}</style>
                </div>
            )}
        </>
    );
};




