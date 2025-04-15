
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { fatura: "EAB2024000000163", litre: 29000 },
  { fatura: "EAB2024000000182", litre: 28525 },
  { fatura: "EAB2024000000042", litre: 18000 },
  { fatura: "EAB2024000000149", litre: 17000 },
  { fatura: "EAB2024000000071", litre: 17000 },
];

const lokasyonData = [
  { name: "İstanbul", value: 94500 },
  { name: "Ankara", value: 82300 },
  { name: "Gaziantep", value: 75200 },
  { name: "Kayseri", value: 66500 },
  { name: "Çorlu", value: 59600 },
];

const COLORS = ["#4F81BD", "#C0504D", "#9BBB59", "#8064A2", "#4BACC6"];

export default function JetA1Dashboard() {
  return (
    <div className="p-6 grid gap-6 grid-cols-1 md:grid-cols-2">
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-bold mb-4">En Yüksek 5 Yakıt Alımı</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} layout="vertical">
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="fatura" width={150} />
              <Tooltip />
              <Bar dataKey="litre" fill="#4F81BD" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-bold mb-4">Lokasyonlara Göre Dağılım</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={lokasyonData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {lokasyonData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
