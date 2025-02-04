// products.js
export const products = [
    {
      id: 1,
      name: "Solar Panel X1",
      description: "High-efficiency solar panel for residential use.",
      price: "₦4,999",
      image: "/solar.jpeg",
      details: {
        specifications: [
          { label: "System Power", value: "500W" },
          { label: "Panel Type", value: "Monocrystalline" },
          { label: "Efficiency", value: "21.5%" },
          { label: "Warranty", value: "25 years" }
        ],
        features: [
            "It has 624Wh lithium-ion battery that's able to charge my laptop 3 times.",
            "Can charge from solar panels or a regular AC (mains).",
            "Has AC output, USB, and Type-C ports for phones, gadgets etc.",
            "Automatically cuts off when overloaded, keeping everything safe.",
            "Monitors battery temperature and cools it when necessary.",
            "Shows real-time power output, so you always know what’s going on."
        ]
      }
    },
    {
      id: 2,
      name: "Smart IOT Meter",
      description: "This is a smart IoT meter that incorporates automatic change over switch, built with low cost but functional components.",
      price: "₦3,499",
      image: "./smart-IOT.jpg",
      details: {
        specifications: [
          { label: "System Power", value: "600W" },
          { label: "Panel Type", value: "Polycrystalline" },
          { label: "Efficiency", value: "19.5%" },
          { label: "Warranty", value: "20 years" }
        ],
        features: [
           " Automatic switching between two AC power sources (ATS)",
            "Automatic generator turn-off when mains power is restored.",
            "A built-in user energy meter that monitors power and energy usage in a building.",
            "The ability to set a maximum power (load) limit for the building - it cuts off supply when the load exceeds the set value.",
            "High/low voltage monitoring for protection.",
            "Internet of Things (Cellular) functionality for remote monitoring .",
            "Status updates on power availability and outages."
        ]
      }
    }
  ];