type PropertyMapProps = {
  latitude: number;
  longitude: number;
};

export default function PropertyMap({
  latitude,
  longitude,
}: PropertyMapProps) {
  const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=16&output=embed`;

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-6">
        Lokasi Properti
      </h2>

      <div className="overflow-hidden rounded-2xl shadow-lg">
        <iframe
          src={mapUrl}
          width="100%"
          height="450"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
        />
      </div>
    </section>
  );
}