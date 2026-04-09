"use client";

import { useState } from "react";

export default function Home() {
  const [numero, setNumero] = useState(null);
  const [mensaje, setMensaje] = useState("Presiona el botón para saber qué tal me caes 😏");

  const generarNumero = () => {
    const random = Math.floor(Math.random() * 11); // 0 a 10
    setNumero(random);

    if (random === 10) {
      setMensaje("🔥 ¡Me caes excelente!");
    } else if (random >= 7) {
      setMensaje("😎 Me caes bien");
    } else if (random >= 4) {
      setMensaje("🙂 Normal...");
    } else if (random >= 1) {
      setMensaje("😅 Mmm... ahí nomás");
    } else {
      setMensaje("💀 Uy... mejor ni hablamos");
    }
  };

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
        <h1 style={{ color: "#ff7a18" }}>🎲 Nivel de amistad</h1>

        <p style={{ color: "#555", marginBottom: "15px" }}>
          {mensaje}
        </p>

        <h2 style={{ margin: "20px 0" }}>
          {numero !== null ? `Resultado: ${numero}` : "?"}
        </h2>

        <button
          onClick={generarNumero}
          style={{
            padding: "12px",
            width: "100%",
            background: "#ff7a18",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Probar suerte 🎲
        </button>
      </div>
    </main>
  );
}