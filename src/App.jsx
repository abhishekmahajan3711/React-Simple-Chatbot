import './App.css'
import ChatBot from 'react-simple-chatbot';

function App() {

  const steps=[
    {
      id:"Greet",
      message:"Hello welcome to our website",
      trigger:'Ask name'
    },
    {
      id:"Ask name",
      message:"Please enter your name",
      trigger:'waiting'
    },
    {
      id:"waiting",
      user:true,
      trigger:"Name"
    },
    {
      id:'Name',
      message:"Hii {previousValue}, Please select the movie ",
      trigger:"movie options"
    },
    {
      id:"movie options",
      options:[
        {
          value:'Spider-man',label:'Spider-man', trigger:'choosen1'
        },
        {
          value:'Bat-man',label:'Bat-man', trigger:'choosen2'
        },
        {
          value:'Raone',label:'Raone', trigger:'choosen3'
        },
        {
          value:'Krrish',label:'Krrish', trigger:'choosen4'
        },
      ]
    },
    {
      id:"choosen1",
      message:"You have choosen Spider-man. Please enter no. of people ?",
      trigger:"1"
    },
    {
      id:"choosen2",
      message:"You have choosen Bat-man. Please enter no. of people ?",
      trigger:"1"
    },
    {
      id:"choosen3",
      message:"You have choosen Raone. Please enter no. of people ?",
      trigger:"1"
    },
    {
      id:"choosen4",
      message:"You have choosen Krrish. Please enter no. of people ?",
      trigger:"1"
    },
    {
      id:"1",
      user:true,
      trigger:"2"
    },
    {
      id:"2",
      message:"You have entered {previousValue}",
      trigger:"3"
    },
    {
      id:"3",
      message:"Please choose row number ",
      trigger:"4"
    },
    {
      id:"4",
      options:[
        {
          value:"1",label:"1",trigger:"5"
        },
        {
          value:"2",label:"2",trigger:"6"
        },
        {
          value:"3",label:"3",trigger:"7"
        },
        
      ]
    },
    {
      id:"5",
      message:"Please choose row number 1",
      trigger:"8"
    },
    {
      id:"6",
      message:"Please choose row number 2",
      trigger:"8"
    },
    {
      id:"7",
      message:"Please choose row number 3",
      trigger:"8"
    },
    {
      id:"8",
      message:"Your bill will be Rs.800. Confirm booking ? Type (Y/N)",
      trigger:"9"
    },
    {
      id:"9",
      options:[
        {
          value:"Yes",label:"Yes",trigger:"11"
        },
        {
          value:"No",label:"No",trigger:"12"
        }
      ]

    },
    {
      id:"11",
      message:"Tickets Booked . Thank you",
      end:true
    },
    {
      id:"12",
      message:"Tickets Cancelled. Thank you",
      end:true
    }
    
]

  return (
      <ChatBot steps={steps} />
  )
}

export default App
