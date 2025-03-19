import React,{useState} from "react";

const Contact = ()=>{
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
   
     const handleSubmit =(e)=>{
        e.preventDefault(); 
        setName('');
        setEmail('');
        setMessage('');
     }
    return(
        <div style={{display:"flex",justifyContent: "center",alignItems: "center", }}>
     <div style={{marginTop:"60px",padding:"30px"}}>
        <h1 style={{textAlign:"center"}}>Contact Us</h1>
        <form onSubmit={handleSubmit} style={{border:"1px solid black", width:"200px",backgroundColor:"snow",padding:"30px",borderRadius:"10px"}}>
        <div style={{margin:"5px"}}>
          <label>Name:</label>
          <input className='form-input' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name"/>
        </div>

        <div>
          <label>Email:</label>
          <input className='form-input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"/>
        </div>

      
        <div>
          <label>Message:</label>
          <textarea className='form-input' value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter your message"/>
        </div>

        <button type="submit">Submit</button>
      </form>
     </div>
     </div>
    )
}
export default Contact