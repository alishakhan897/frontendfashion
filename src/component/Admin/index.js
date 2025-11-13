import React from "react";

function UnderMaintenance() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f5f5f5",
      color: "#333",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ fontSize: "28px", marginBottom: "10px" }}>
        This Page is Under Maintenance
      </h1>
      <p style={{ fontSize: "16px" }}>
        We’ll be back soon. Thank you for your patience!
      </p>
    </div>
  );
}

export default UnderMaintenance;
