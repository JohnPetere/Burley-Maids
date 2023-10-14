// Enviromental stuff for next.js
//https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables


// React contact form docs web3forms
//https://docs.web3forms.com/how-to-guides/js-frameworks/react-js/simple-react-contact-form
function Contact({ children, ...props }) {
  return (
    <div className>
      {children}
      <h3>Get a Quote!</h3>
      <form action="https://api.web3forms.com/submit" method="POST">
        <input
          type="hidden"
          name="access_key"
          value="WEB3_FORMS_API_KEY"
        />

        <input type="text" name="name" required />
        <input type="email" name="email" required />
        <textarea name="message" required></textarea>
        <input
          type="hidden"
          name="redirect"
          value="https://web3forms.com/success"
        />
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}

export default Contact;
