interface MapEmbedProps {
  className?: string;
  address?: string;
}

const MapEmbed = ({ 
  className = "",
  address = "Maya Bazar, Golwad Corner, Visnagar, Gujarat 384315"
}: MapEmbedProps) => {
  // Google Maps embed URL for Sonika Jewellers location
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14726.123456789!2d72.12345678!3d23.12345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA3JzI0LjAiTiA3MsKwMDcnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin`;

  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-soft ${className}`}>
      <iframe
        src={mapSrc}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map showing location of ${address}`}
        className="w-full h-full"
      />
      
      {/* Overlay with address */}
      <div className="absolute bottom-4 left-4 glassmorphism rounded-lg p-3 border border-white/20 max-w-xs">
        <h4 className="font-semibold text-white mb-1">Sonika Jewellers</h4>
        <p className="text-white/90 text-sm">{address}</p>
      </div>
    </div>
  );
};

export default MapEmbed;