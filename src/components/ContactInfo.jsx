import { Mail, Phone, MapPin } from "lucide-react";

// Displays contact information with icons
const ContactInfo = () => {
  // Contact details array
  const info = [
    {
      label: "EMAIL",
      value: "stamariaecho@gmail.com",
      icon: <Mail className="w-5 h-5 text-primary" />,
    },
    {
      label: "PHONE",
      value: "0907-401-5774",
      icon: <Phone className="w-5 h-5 text-primary" />,
    },
    {
      label: "LOCATION",
      value: "Laguna, Philippines",
      icon: <MapPin className="w-5 h-5 text-primary" />,
    },
  ];

  return (
    // Container with grid layout for contact info
    <div className="w-full bg-theme text-theme border-t-[0.5px] border-theme">
      <div className="place-items-start md:place-items-center grid grid-cols-1 md:grid-cols-3 gap-8 py-6 px-3">
        {info.map((item, index) => (
          // Each contact info item
          <div key={index} className="flex items-center gap-3">
            {item.icon}
            <div>
              <p className="text-xs font-bold text-muted">{item.label}</p>
              <p className="text-sm">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
