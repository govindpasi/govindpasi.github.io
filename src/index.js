import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider ,defineStyleConfig ,extendTheme} from '@chakra-ui/react'


const root = ReactDOM.createRoot(document.getElementById('root'));

const Button = defineStyleConfig({
   
   
    variants: {
      outline: {
        border: '1px solid',
        borderColor: '#1B3C65',
        color: 'white',
        bg:'#1B3C65',
        p:"15px 20px",
        borderRadius:"0",
        fontSize:"xs",
        w:"7rem",
        p:"15px 20px"
      },

    
     
    },

    

    
   
  })

  const theme = extendTheme({
    components: {
      Button,
    },
  })    


root.render(
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
