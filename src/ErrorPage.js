import React from 'react'

function ErrorPage() {
  return (
    <div style={{ margin: "5rem", height: "10rem",backgroundColor: "rgb(13, 13, 34)", }}>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          color:"white",
          paddingTop:"3rem"
          
        }}
      >
        ErrorPage 404  
      </h2>
      <p style={{ color:"white", display:"flex", justifyContent:"center" }}>
        Page not found
      </p>
    </div>
  );
}

export default ErrorPage