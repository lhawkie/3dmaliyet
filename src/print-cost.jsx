import { useState } from "react";

export default function PrintCostCalculator() {
  const [filament, setFilament] = useState(250);
  const [hours, setHours] = useState(17);
  const [minutes, setMinutes] = useState(18);
  const [power, setPower] = useState(110);
  const [pricePerGram, setPricePerGram] = useState(0.5);
  const [pricePerKWh, setPricePerKWh] = useState(3.6);

  const totalHours = hours + minutes / 60;
  const filamentCost = filament * pricePerGram;
  const energyKWh = (power / 1000) * totalHours;
  const electricityCost = energyKWh * pricePerKWh;
  const totalCost = filamentCost + electricityCost;

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: 20, border: '1px solid #ccc', borderRadius: 10 }}>
      <h1>3D Baskı Maliyet Hesaplayıcı</h1>
      <label>Filament (g): <input type="number" value={filament} onChange={e => setFilament(+e.target.value)} /></label><br />
      <label>Süre (saat): <input type="number" value={hours} onChange={e => setHours(+e.target.value)} /></label><br />
      <label>Süre (dakika): <input type="number" value={minutes} onChange={e => setMinutes(+e.target.value)} /></label><br />
      <label>Yazıcı Gücü (W): <input type="number" value={power} onChange={e => setPower(+e.target.value)} /></label><br />
      <label>Filament Fiyatı (TL/gr): <input type="number" step="0.01" value={pricePerGram} onChange={e => setPricePerGram(+e.target.value)} /></label><br />
      <label>Elektrik Fiyatı (TL/kWh): <input type="number" step="0.01" value={pricePerKWh} onChange={e => setPricePerKWh(+e.target.value)} /></label><br />
      <hr />
      <p><strong>Filament Maliyeti:</strong> {filamentCost.toFixed(2)} TL</p>
      <p><strong>Elektrik Maliyeti:</strong> {electricityCost.toFixed(2)} TL</p>
      <p><strong>Toplam Maliyet:</strong> {totalCost.toFixed(2)} TL</p>
    </div>
  );
}