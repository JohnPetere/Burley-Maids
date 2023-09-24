function Services({ children, ...props }) {
  return (
    <div className="main-page-container">
      {children}
      <main className="inner-page-container">
      <h2
      className="text-8xl my-8 font-" 
      >Services</h2>

      </main>
    </div>
  );
}

export default Services;
