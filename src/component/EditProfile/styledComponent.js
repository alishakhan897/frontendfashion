
import styled from "styled-components"; 

export const CameraDiv = styled.div`
    width: 200px;
    height:200px;
    background-color:grey;
    border-radius: 100px;
   
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImageDivCamera = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the image covers the entire container */
    border-radius: 100px; /* Maintain the rounded corners */
`;

export const MainEditImage = styled.div`
   min-height: 100px; /* Adjust this if Navbar has a different height */
   background-size: cover;
   display: flex;
   flex-direction: column;
   justify-content:center;
   align-items:center;
   
   margin-top: 15px; /* Match the height of the Navbar */ 
   

   @media screen and (min-width:768px) {
       margin-top:200px;
       min-height: calc(100vh - 60px);
       justify-content:unset;
       align-items:center;

}

`
export const Button = styled.button`
   background-color:#c79691;
   color:white;
   padding-top:12px;
   padding-bottom:12px;
   padding-right:18px;
   padding-left:18px;
   margin-top:30px;
   cursor:pointer;
   border:none;
   border-radius:8px;
   text-align:center;
`




export const ImageLabel = styled.div`
    display: flex; /* Corrected typo */
    flex-direction: row; /* Stack elements vertically */
    
    justify-content:space-around;
    text-align:center;
    width:50%; /* Center horizontally */ 
   
`

export const cameraDivCenter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width:20%;
    background-color: yellow; 
   

  

`
export const NewDiv = styled.div`
     display:flex;
     flex-direction:column;
    
     justify-content:center;
    text-align:start;
    width:auto;
`


export const Form = styled.form`
    display:flex;
    justify-content:center;
    flex-direction:column;
    
`


export const FormDiv = styled.div`
   
    width:50%;
    margin:auto;
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;



`

export const Input = styled.input`
     width:100%;


`