import { BrandMark } from "@/components/BrandMark";

export function BrandWatermark() {
  return (
    <div className="brand-watermark" aria-hidden="true">
      <div className="brand-watermark-item brand-watermark-a">
        <BrandMark />
      </div>
      <div className="brand-watermark-item brand-watermark-b">
        <BrandMark />
      </div>
      <div className="brand-watermark-item brand-watermark-c">
        <BrandMark />
      </div>
    </div>
  );
}
