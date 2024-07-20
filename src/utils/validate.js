export const checkValidateData = (email,password)=>{
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/.test(password);

    if(!emailRegex) return "Email is not valid";
    if(!passwordRegex) return "Password is not valid";  
    
    return null; 
}