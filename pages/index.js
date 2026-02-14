import { motion } from "framer-motion";

const categories = [
  { title: "Beauty", description: "Skincare, cosmetics, and personal care products." },
  { title: "Electronics", description: "Latest gadgets and accessories." },
  { title: "Toys", description: "Fun, educational, and trending toys." },
];

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "40px" }}>
      <h1>NT Wholesale LTD</h1>
      <p>Wholesale Products for Your Retail Business</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginTop: "30px" }}>
        {categories.map((cat) => (
          <motion.div key={cat.title} whileHover={{ scale: 1.03 }} style={{ border: "1px solid #eee", padding: "20px", borderRadius: "10px" }}>
            <h3>{cat.title}</h3>
            <p>{cat.description}</p>
            <button style={{ marginTop: "10px" }}>View Products</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}