import React from "react";
import Footer from '../../components/footerBar'
export async function getStaticProps() {
  const apiKey = process.env.REACT_APP_API_KEY
  console.log("API KEY!!!: " +apiKey)
  return { props: {apiKey:apiKey}  }
}
export default function Contact({ children, ...props }) {
  
  async function handleSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      
  
      formData.append("access_key", props.apiKey);

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
      });
      const result = await response.json();
      if (result.success) {
          console.log(result);
      }
  }

return (
  <>
    {children}
    <form onSubmit={handleSubmit}>
      <input type="text" name="name"/>
      <input type="email" name="email"/>
      <textarea name="message"></textarea>
      <button type="submit">Submit Form</button>
    </form>
    <Footer/>
  </>
);
}
