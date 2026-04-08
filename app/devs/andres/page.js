"use client";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ff7a18, #ffb347)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          width: "350px",
          textAlign: "center",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ color: "#ff7a18" }}>🚀 Bienvenido</h1>

        <p style={{ color: "#555", marginBottom: "20px" }}>
          Estás viendo tu primera página en Next.js Soy Andres.  
          Aquí puedes comenzar a construir tu sistema de ventas paso a paso.
        </p>

        <button
          onClick={() => alert("¡Bien hecho Amigo! 🔥")}
          style={{
            padding: "12px 20px",
            background: "#ff7a18",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            width: "100%",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.background = "#e56700")}
          onMouseOut={(e) => (e.target.style.background = "#ff7a18")}
        >
          Comenzar 🚀
        </button>
      </div>
    </main>
  );
}