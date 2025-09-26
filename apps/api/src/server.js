/**
 * Bu Express sunucusu, müşteri ve teklif verilerini yönetmek için temel API uç noktalarını sunar.
 */
import "dotenv/config";
import cors from "cors";
import express from "express";

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

const mockPricingRules = [
  {
    id: 1,
    sector: "ilaç",
    productType: "kutu",
    basePrice: 0.45,
    minimumQuantity: 1000
  }
];

app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

app.post("/intent", (req, res) => {
  const { description = "" } = req.body;
  const normalized = description.toLowerCase();

  const intent = mockPricingRules.find((rule) => normalized.includes(rule.sector));

  res.json({
    sector: intent?.sector ?? "belirsiz",
    productType: intent?.productType ?? "analiz ediliyor",
    confidence: intent ? 0.6 : 0.2
  });
});

app.post("/quote", (req, res) => {
  const { quantity = 1000, sector = "ilaç", productType = "kutu" } = req.body;
  const pricingRule = mockPricingRules.find(
    (rule) => rule.sector === sector && rule.productType === productType
  );

  const unitPrice = pricingRule ? pricingRule.basePrice : 0.55;
  const subtotal = unitPrice * quantity;
  const vat = subtotal * 0.2;

  res.json({
    quantity,
    unitPrice,
    subtotal,
    vat,
    total: subtotal + vat
  });
});

app.listen(port, () => {
  console.log(`Matbaai API ${port} portunda dinleniyor.`);
});
