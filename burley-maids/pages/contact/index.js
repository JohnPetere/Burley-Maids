import React from "react";
import Footer from "../../components/footerBar";
export async function getStaticProps() {
  const apiKey = process.env.REACT_APP_API_KEY;
  console.log("API KEY!!!: " + apiKey);
  return { props: { apiKey: apiKey } };
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
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <>
      {children}
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Just some quick details..,</h2>
          <div>
            <div>
              <label>Rooms?</label>
              <input required name="Room Quantity" min='0' max="30" type="number"></input>
            </div>
            <div>
              <label>Bathrooms?</label>
              <input required name="Bathroom Quantity"  min='0' max="100" type="number"></input>
            </div>
          </div>
          <div>
            <h3>What services do you require?</h3>
            <div>
              <div>
                <label for="">House Keeping</label>
                <input  name="House Keeping" value="House Keeping" type="checkbox"></input>
              </div>
              <div>
                <label for="">Deep Cleaning</label>
                <input name="Deep Cleaning"  value="Deep Cleaning" type="checkbox"></input>
              </div>
              <div>
                <label for="Moving Related">Moving Related</label>
                <input name="Moving Related" value="Moving Related" type="checkbox"></input>
              </div>
              
            </div>
            <div>
            <div>
                <label for="">Carpet</label>
                <input name="Carpet" value="Carpet" type="checkbox"></input>
              </div>
              <div>
                <label for="">Upholstry</label>
                <input name="Upholstry" value="Upholstry" type="checkbox"></input>
              </div>
              <div>
                <label for="">Mattress</label>
                <input name="Mattress" value="Mattress" type="checkbox"></input>
              </div>
              

            </div>
          </div>
          <div>
          <div>
              <label>Name:</label>
              <input  required name="name" type="text"></input>
            </div>
            <div>
              <label>Phone:</label>
              <input required name="phone" type="text"></input>
            </div>
          </div>
          <div>
            <label>Tell us more</label>
            <textarea pattern="[^;]+" name="More Info" cols="40" rows="5"></textarea>
          </div>
          <button type="submit">Submit Form</button> 
          {/* <input type="text" name="name"/>
      <input type="email" name="email"/>
      <textarea name="message"></textarea>
      <button type="submit">Submit Form</button> */}
        </form>
      </div>
      <Footer />
    </>
  );
}
