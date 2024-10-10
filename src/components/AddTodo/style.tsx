import styled from "styled-components";

export const Container = styled.div `

font-size:1.6rem;

  form{

    >div{
      gap: 1.6rem;
      display:flex;
      align-items:center;

      >input {
        width:100%;
        outline:none;
        border:1px solid var(--second-gray-color);
      }

      >button{
       width:100%;
      }

    }
  }


  @media (max-width:768px) {
    form {
        >div {
         display:flex;
         flex-direction:column;
         align-items:center;
        }
    }
  }
 
`