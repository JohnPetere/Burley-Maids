import React from "react";
import Footer from "../../components/footerBar";
export async function getStaticProps() {
  const apiKey = process.env.REACT_APP_API_KEY;

  return { props: { apiKey: apiKey } };
}
/**
 * Add sweet Alert for failure/sucess of submission
 * 
 */
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
      <div className="main-page-container ">
        <div className="main-inner-page-responsive flex flex-col">
          <h1 className="text-7xl font-bigBold text-center py-24">
            Get a Quote!
          </h1>
          <form
            className=" font-bold  text-2xl bg-lavendarWeb flex flex-col justify-center mx-40
         p-9 rounded-4xl"
            onSubmit={handleSubmit}
          >
            <h2 className=" font-bigBold text-4xl">
              Just some quick details...
            </h2>
            <div className="flex justify-evenly">
              <div className="form-field">
                <label>Rooms?</label>
                <input
                  required
                  name="Room Quantity"
                  min="0"
                  max="30"
                  type="number"
                ></input>
              </div>
              <div className="form-field">
                <label>Bathrooms?</label>
                <input
                  required
                  name="Bathroom Quantity"
                  min="0"
                  max="100"
                  type="number"
                ></input>
              </div>
            </div>
            <div>
              <h3>What services do you require?</h3>
              <div className="form-checks-groups">
                <div>
                  <div className="text-lg ">
               
                    <input
                      name="House Keeping"
                      value="House Keeping"
                      type="checkbox"
                    ></input>
                         <label for="">House Keeping</label>
                  </div>
                  <div className="text-lg">
                 
                    <input
                      name="Deep Cleaning"
                      value="Deep Cleaning"
                      type="checkbox"
                    ></input>
                       <label for="">Deep Cleaning</label>
                  </div>
                  <div className="text-lg">
              
                    <input
                      name="Moving Related"
                      value="Moving Related"
                      type="checkbox"
                    ></input>
                          <label for="Moving Related">Moving Related</label>
                  </div>
                </div>
                <div>
                  <div className="text-lg">
                    
                    <input name="Carpet" value="Carpet" type="checkbox"></input>
                    <label for="">Carpet</label>
                  </div>
                  <div className="text-lg">
         
                    <input
                      name="Upholstry"
                      value="Upholstry"
                      type="checkbox"
                    ></input>
                               <label for="">Upholstry</label>
                  </div>
                  <div className="text-lg">
                    
                    <input
                      name="Mattress"
                      value="Mattress"
                      type="checkbox"
                    ></input>
                    <label for="">Mattress</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="double-form-field">
              <div className="form-field">
                <label>Name:</label>
                <input required name="name" type="text"></input>
              </div>
              <div className="form-field">
                <label>Phone:</label>
                <input required name="phone" type="text"></input>
              </div>
            </div>
            <div
            className="flex flex-col mt-2"
            >
              <label>Tell us more</label>
              <textarea
              className="m-5"
                pattern="[^;]+"
                name="More Info"
                cols="40"
                rows="5"
              ></textarea>
            </div>
            <div
            className="w-full flex justify-end">
            <button 
            
            type="submit" className="form-submit">Submit Form</button>

            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
