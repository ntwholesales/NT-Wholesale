import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Package, Star } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Beauty",
    description: "Skincare, cosmetics, and personal care products at wholesale prices.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  },
  {
    title: "Electronics",
    description: "Latest gadgets, accessories, and devices for retailers.",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5",
  },
  {
    title: "Toys",
    description: "Fun, educational, and trending toys for all ages.",
    image: "https://images.unsplash.com/photo-1608889175152-0f9b6b6d6c5a",
  },
];

export default function WholesaleBusinessWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b sticky top-0 bg-white z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <div className="text-2xl font-bold">NT Wholesale LTD</div>
          <nav className="flex gap-6 text-sm">
            <a href="#categories" className="hover:text-black">Categories</a>
            <a href="#about" className="hover:text-black">About</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">Wholesale Products for Your Retail Business</h1>
          <p className="text-gray-600 mb-6">
            Source high-quality beauty products, electronics, and toys at competitive bulk pricing.
          </p>
          <div className="flex gap-4">
            <Button size="lg">Browse Catalog</Button>
            <Button size="lg" variant="outline">Request Pricing</Button>
          </div>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a"
          alt="Wholesale products"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
      </section>

      <section id="categories" className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Product Categories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <motion.div
                key={cat.title}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Card className="rounded-2xl overflow-hidden shadow-sm">
                  <img src={cat.image} alt={cat.title} className="h-48 w-full object-cover" />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{cat.description}</p>
                    <Button variant="outline" className="w-full">View Products</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <Package className="mx-auto mb-2" />
            <h4 className="font-semibold">Bulk Orders</h4>
            <p className="text-sm text-gray-600">Optimized for wholesale quantities</p>
          </div>
          <div>
            <Star className="mx-auto mb-2" />
            <h4 className="font-semibold">Quality Products</h4>
            <p className="text-sm text-gray-600">Carefully sourced suppliers</p>
          </div>
          <div>
            <ShoppingCart className="mx-auto mb-2" />
            <h4 className="font-semibold">Easy Ordering</h4>
            <p className="text-sm text-gray-600">Simple and efficient process</p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-black text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
          <p className="text-gray-300 mb-6">Contact us for catalogs, pricing, and partnerships.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              placeholder="Your email"
              className="px-4 py-2 rounded-md text-black w-full md:w-auto"
            />
            <Button variant="secondary">Contact Sales</Button>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NT Wholesale LTD All rights reserved.
      </footer>
    </div>
  );
}
