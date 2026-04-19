"use client";

import React from 'react';
import { Badge, Button } from '@/components/UI';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, Cpu, Layers, 
  Monitor, Network, Settings, ShieldCheck, 
  Database, Cloud, CheckCircle2, FileText,
  Activity, Zap, Shield, Briefcase, Eye,
  Lock, Server, RefreshCw, BarChart3, Radio,
  Thermometer, Wind, HardDrive, Share2
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface TechnicalRow {
  param: string;
  val: string;
}

interface ProductDetail {
  title: string;
  text: string;
}

interface Product {
  title: string;
  id: string;
  icon: any;
  img: string;
  description: string;
  longContent: string;
  specs: string[];
  features: string[];
  technicalTable: TechnicalRow[];
  useCases: string[];
  details?: ProductDetail[];
}

const products = [
  {
    title: "PLC & CONTROL SYSTEMS",
    id: "plc",
    icon: Settings,
    img: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=1200&q=90",
    description: "Programmable Logic Controllers form the backbone of modern industrial automation. ASKworX engineers design, program, and commission PLC systems using Allen-Bradley, Siemens S7, Mitsubishi, and Schneider platforms. Our logic is structured for high availability, deterministic execution, and seamless maintenance by your team. We specialize in complex logic that requires high-speed synchronization and fail-safe safety protocols.",
    longContent: "At ASKworX, we view the PLC not just as a controller, but as the brain of your industrial ecosystem. Our engineering team follows a systematic approach to logic development, beginning with a comprehensive functional design specification (FDS). We utilize modular programming blocks and structured text (ST) to ensure that your code is not just functional, but scalable. Our PLC solutions are designed to handle the most rigorous industrial environments, featuring deterministic cycle times that ensure your processes stay in perfect synchronization. We incorporate advanced diagnostic routines into every program, allowing your maintenance teams to identify and rectify faults within seconds. Whether you're managing a single high-speed assembly line or an entire chemical processing plant, our PLC architectures are built to grow with you, supporting seamless I/O expansion and multi-site orchestration.",
    specs: ["Scan time <1ms deterministic", "Redundant CPU Hot-Standby Support", "IEC 61131-3 Programming Standards", "Integrated Secure OT Gateway", "OPC-UA / MQTT Native Stack", "Direct EtherNet/IP & Profinet Ports"],
    features: [
      "Custom PID Loop Tuning for Process Precision",
      "Multi-vendor Bridge Logic (Siemens to Rockwell)",
      "Motion Control Multi-axis Synchronization",
      "Fail-safe SIL2/3 Safety Certified Logic",
      "Real-time Data Tagging & Contextualization",
      "Remote Maintenance SSH Tunnels"
    ],
    technicalTable: [
      { param: "Processing Power", val: "Multicore ARM/Intel Atom Options" },
      { param: "I/O Capacity", val: "Up to 50,000 Local/Distributed Points" },
      { param: "Communication", val: "Modbus, Profibus, EtherCAT, CC-Link" },
      { param: "Safety", val: "Integrated Failsafe (Safety-over-Ethernet)" }
    ],
    useCases: [
      "High-speed Packaging & Palletizing Lines",
      "Continuous Chemical Batch Processing",
      "Distributed Solar Array Tracking",
      "Automotive Body-in-White Assembly"
    ]
  },
  {
    title: "SCADA SYSTEMS",
    id: "scada",
    icon: Monitor,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90",
    description: "High-performance visualization, alarm management, historical trending, and secure remote access built to ISA-101 standards using Ignition, WinCC, and FactoryTalk platforms. We bridge the distance between the shop floor and the executive suite.",
    longContent: "Our SCADA solutions are engineered to provide more than just a window into your operations; they provide a foundation for total situational awareness. Following PSA and ISA-101 standards, we design high-performance HMI interfaces that minimize operator cognitive load. By utilizing grayscale backgrounds and reserved color palettes for alerts, we ensure that critical anomalies are never missed by your team. Our SCADA platforms are inherently distributed, supporting unlimited client access and multi-site connectivity. We integrate robust historical databases (MSSQL, PostgreSQL, InfluxDB) to capture every state change, enabling your data scientists to perform deep regression analysis and bottleneck identification. With ASKworX SCADA, you aren't just looking at icons; you're interacting with a real-time digital representation of your business health.",
    specs: ["<0.5s screen refresh latency", "Unlimited tag scaling architecture", "Global Multi-site Cloud Synchronization", "HTML5 & Mobile Responsive UX", "AD / LDAP User Identity Integration", "Vector Scalable SVG High-Res Graphics"],
    features: [
      "ISA-101 Visual Hierarchy Hierarchy",
      "Advanced Alarm Shelving & Rationalization",
      "Historical Regression Analytics for OEE",
      "Dynamic Recipe Management Engines",
      "Energy usage & Efficiency heatmaps",
      "Unified Process Overview Dashboards"
    ],
    technicalTable: [
      { param: "Archiving", val: "High-frequency Time-series Historian" },
      { param: "Redundancy", val: "Server-side Hot-Standby Failover" },
      { param: "Connectivity", val: "OPC-UA, MQTT, DNP3, RESTful APIs" },
      { param: "Security", val: "TLS 1.3 / SSL Encryption as Standard" }
    ],
    useCases: [
      "Water Treatment Plant Oversight",
      "Pharmaceutical Cleanroom Management",
      "Global Energy Grid Load Tracking",
      "Discrete Manufacturing WIP Visibility"
    ]
  },
  {
    title: "HMI INTERFACES",
    id: "hmi",
    icon: Eye,
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90",
    description: "Localized human-machine interfaces designed for tactile efficiency and instant feedback. From rugged industrial touchscreens to gesture-based controls. Built for the most demanding hands-on environments.",
    longContent: "An ASKworX HMI is the point of truth for your machine operators. We understand that in the heat of production, every second counts. Our HMI designs focus on tactile precision and high-contrast visibility. We utilize high-nit industrial panels that are readable even under direct factory sunlight and resistant to chemical spills and vibration. Our interface logic is optimized for 'cold-hand' and gloved operation, featuring large targets and multi-touch capabilities. Beyond simple buttons, our HMIs incorporate built-in PDF viewers for maintenance manuals, live video feeds for remote line troubleshooting, and direct PLC diagnostic portals. By bringing the documentation directly to the point of use, we reduce machine MTTR (Mean Time To Repair) by up to 40%.",
    specs: ["High-Nit Capacitive Multi-touch", "IP67 Washdown-rated Enclosures", "Wide Operation Temp (-20 to +60C)", "Native PLC Protocol Drivers", "Embedded Scripting & Logic Engine", "VNC Server for Remote Tablet Mirroring"],
    features: [
      "High-Res Vector Graphic Rendering",
      "Integrated PDF Manual & Schematic Viewer",
      "Dynamic Multilingual UI Support",
      "User-level Audit Trails & Logins",
      "Interactive Maintenance Checklists",
      "Direct Backplane I/O Diagnostics"
    ],
    technicalTable: [
      { param: "Backlight Life", val: "50,000 Hours Minimum MTBF" },
      { param: "Memory", val: "Expandable Rugged SD Storage" },
      { param: "Hardware", val: "Fanless Solid-state Construction" },
      { param: "Interface", val: "RS-485, EtherNet/IP, USB 3.0" }
    ],
    useCases: [
      "Food Processing Washdown Areas",
      "Mining Control Consoles",
      "Medical Device Assembly Lines",
      "Hazardous Zone Operator Stations"
    ]
  },
  {
    title: "EDGE COMPUTING",
    id: "edge-computing",
    icon: Cpu,
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=90",
    description: "Processing critical data at the source. Edge computing reduces latency, optimizes bandwidth, and enables real-time AI inference without constant cloud connectivity. We bring IT power to the OT edge.",
    longContent: "Industrial Edge computing is where IT meets OT in its purest form. ASKworX Edge solutions provide a sandboxed environment for running high-level computation directly on your factory floor. By utilizing Docker containerization, we allow you to run Python-based machine learning models, custom Node.js bridges, and local data buffers at the source of the data. This architecture eliminates the dependency on high-bandwidth cloud connections for millisecond-level decision making. Our Edge nodes act as a security buffer, normalizing data across diverse legacy protocols before it reaches your enterprise network. With hardware-root-of-trust (TPM 2.0) and encrypted storage, your intellectual property and process secrets never leave the physical facility unless you intend them to.",
    specs: ["Intel Atom/Xeon & ARMv8 Options", "Native Docker & K8s Container Support", "TPM 2.0 & Secure Boot Enabled", "Extended Industrial Temp Range", "Low Latency Local Store-and-Forward", "Zero-Touch Cloud Provisioning"],
    features: [
      "High-Frequency Local Data Buffering",
      "On-device ML Model (AI) Inference",
      "Python, Go, & Node.js Runtime Support",
      "Hardware-level Data Encryption",
      "Dynamic Remote Workload Balancing",
      "Simplified MQTT/OPC-UA Orchestration"
    ],
    technicalTable: [
      { param: "Compute", val: "4-16 Core Industrial CPUs" },
      { param: "Storage", val: "NVMe Rugged Solid-state Only" },
      { param: "Connectivity", val: "Dual 2.5GbE, 5G/LTE Optional" },
      { param: "Security", val: "Built-in TPM & Secure Elements" }
    ],
    useCases: [
      "Real-time Vision Defect Detection",
      "Predictive Bearing Vibration Analysis",
      "High-speed Log Signal Compression",
      "Offline MES Local Persistence"
    ]
  },
  {
    title: "IIOT GATEWAYS",
    id: "iiot-gateways",
    icon: ShieldCheck,
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=90",
    description: "Secure protocol conversion and data orchestration. Bridging the gap between legacy RS-232/485 serial devices and modern MQTT/AMQP cloud endpoints. One device to connect them all.",
    longContent: "The ASKworX IIoT Gateway is the translator of the modern industrial world. We recognize that many facilities run on a mix of legacy and modern hardware. Our gateway solution specializes in extracting data from ancient Modbus RTU meters, serial controllers, and old PLC-5 systems, while simultaneously communicating via Profinet or EtherNet/IP to your modern stack. Everything is normalized into a unified JSON/MQTT format with TLS 1.3 encryption. Our 'Store & Forward' technology ensures that no data point is lost during network instability—data is buffered locally on industrial-grade NAND and flushed to the cloud once connectivity is restored. This is high-availability connectivity for an unpredictable world.",
    specs: ["Protocol: MQTT, AMQP, OPC-UA", "TLS 1.3 & SSL Hardware Encryption", "Integrated 4G/5G, LTE-M, & Wi-Fi", "Dual GigE Ports for OT/IT Split", "Internal 32GB Rugged Data Buffer", "Centralized Cloud Management Portal"],
    features: [
      "Certificate-based Identity Management",
      "Hardened Linux OS with Secure Boot",
      "Signal Normalization & Unit Parsing",
      "Automatic Multi-network Failover",
      "Cloud-side Device Mirror (Twins)",
      "Secure Over-the-Air (OTA) Updates"
    ],
    technicalTable: [
      { param: "Supported Drivers", val: "300+ Industrial Protocols" },
      { param: "Enclosure", val: "DIN-rail Aluminum Chassis" },
      { param: "Input Power", val: "9-36V DC Industrial Range" },
      { param: "Mounting", val: "IP20 Standard, IP67 Option" }
    ],
    useCases: [
      "Remote Wellhead Pump Monitoring",
      "Legacy Machine Digital Renewal",
      "Solar/Wind Inverter Data Sync",
      "Cross-border Fleet Asset Tracking"
    ]
  },
  {
    title: "INDUSTRIAL NETWORKING",
    id: "networking",
    icon: Network,
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=90",
    description: "Deterministic, high-availability network architectures designed for zero packet loss in noisy industrial environments. We build the arteries of your digital facility.",
    longContent: "Industrial networking is not 'IT in a cabinet.' At ASKworX, we engineer networks that are deterministic and noise-immune. We utilize high-grade managed switches from Cisco, Siemens (Scalance), and Moxa to build redundant ring architectures (MRP) that recover from link failure in under 50ms. Our designs include deep packet inspection (DPI) at the edge and strict VLAN segmentation (IDMZ) to isolate your critical control loops from general enterprise traffic. We specialize in grounding and shielding techniques that protect your data from the massive electromagnetic interference (EMI) generated by high-power motors and variable frequency drives. Whether it's a fibre-optic backbone for a large-scale campus or a wireless mesh for a warehouse facility, we ensure your data reaches its destination—every time.",
    specs: ["Managed Layer 2/3 Switching", "MRP / HSR / PRP Redundancy", "Strict VLAN & Macrovis-Segmentation", "IEEE 1588 PTP Time Sync", "Gigabit PoE+ (up to 90W) Support", "Ruggedized Vibration-proof Housing"],
    features: [
      "QoS Traffic Prioritization (PROFINET)",
      "Port-level Access Security (802.1X)",
      "Auto-discovery Network Topology",
      "Electromagnetic Noise Shielding",
      "Fibre-optic Long Range Backbones",
      "Integrated Layer 2 Firewalling"
    ],
    technicalTable: [
      { param: "Ports", val: "RJ45, SFP, M12 Connector Options" },
      { param: "Backplane", val: "High-throughput Wire-speed Switch" },
      { param: "Diagnostic", val: "SNMP, Syslog, Web, & CLI Support" },
      { param: "Standards", val: "IEC 62443 Security Standards" }
    ],
    useCases: [
      "Deterministic Robot Cell Comms",
      "Multi-KM Fibre Pipeline Control",
      "Secure Enterprise-Control IDMZ",
      "Warehouse-wide Wi-Fi 6 Mesh"
    ]
  },
  {
    title: "CONTROL PANELS",
    id: "panels",
    icon: Layers,
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200&q=90",
    description: "Custom engineered electrical control panels built for thermal efficiency and long-term serviceability. We don't just wire panels; we build industrial assets.",
    longContent: "An ASKworX control panel is a masterpiece of industrial engineering. We believe that clean wiring is the heart of a reliable machine. Every panel we build is designed in EPLAN or AutoCAD Electrical, ensuring a perfect correlation between the drawing and the physical component. We utilize high-grade copper busbars, laser-etched identification tags for every wire, and premium components from Schneider, Siemens, and Phoenix Contact. A major focus of our design is thermal management; we use thermal simulation software to predict hotspots and specify active cooling or ventilation systems that ensure your components never exceed their operational heat limits. This attention to detail extends component lifespan by up to 50% Compared to standard panel builds.",
    specs: ["Full IEC / IS / UL 508A Standards", "IP54 / 65 / 66 Environmental Rating", "Solid Copper Busbar Architecture", "Permanent Laser-Etched IDs", "Thermal Simulation Validation", "Complete CAD/EPLAN Documentation"],
    features: [
      "Custom MCC & PCC Power Designs",
      "Optimized Cable Management Ducts",
      "Integrated Type 2 Surge Protection",
      "Active Intelligent Ventilation/Cooling",
      "Modular VFD & Motor Starter Rails",
      "Remote I/O Interface Terminals"
    ],
    technicalTable: [
      { param: "Materials", val: "SS-304, SS-316, or CRCA Steel" },
      { param: "Paint", val: "Powder Coated RAL 7035 Standard" },
      { param: "Testing", val: "FAT / SAT & Dielectric Withstand" },
      { param: "Wiring", val: "Low-smoke Zero-halogen (LSZH)" }
    ],
    useCases: [
      "Process Plant MCC Centers",
      "Special Purpose Machine Panels",
      "Outdoor Power Distribution Units",
      "Cleanroom Internal Logic Enclosures"
    ]
  },
  {
    title: "FIELD WIRING & CABLING",
    id: "field-wiring",
    icon: Zap,
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200&q=90",
    description: "Turnkey field instrumentation and wiring services. We ensure your signals travel from the sensor to the panel with zero noise and maximum protection.",
    longContent: "Field wiring is where most automation projects fail or succeed. ASKworX provides expert-level field services to ensure that your industrial installation is noise-free and safety-compliant. We specialize in the complex task of separating power, control, and signal cables to prevent crosstalk and EMF interference. Our teams are certified for hazardous zone installations (ATEX/Ex) and use specialized conduit architecture to protect cables from mechanical wear, oil, and extreme heat. Every segment of our wiring is point-to-point tested, labeled with high-visibility markers, and documented in an 'As-built' package. We don't just pull cables; we engineer the physical signal path for 100% data integrity.",
    specs: ["Industrial Shielded Signal Cabling", "Explosion-proof ATEX/Ex Fittings", "Full Grounding Grid Certification", "Noise Isolation Separation Design", "Rigid/Flexible Conduit Architecture", "Point-to-Point Signal Validation"],
    features: [
      "Hazardous Zone (Ex) Field Wiring",
      "Precision Instrument Calibration",
      "Global Cable Schedule Generation",
      "High-density Tray Management",
      "Continuity & Impedance Testing",
      "Full As-built Documentation Links"
    ],
    technicalTable: [
      { param: "Conduits", val: "Galvanized Steel or FR-PVC" },
      { param: "Fittings", val: "IP68 Liquid-tight Standard" },
      { param: "Shielding", val: "Braid + Foil Double Protection" },
      { param: "Trace", val: "Automated RFID Cable Markers" }
    ],
    useCases: [
      "Oil & Gas Pipeline Instrumentation",
      "Automotive Paint Shop Wiring",
      "Heavy Industry Crane Electrification",
      "Chemical Batch Farm Telemetry"
    ]
  },
  {
    title: "SENSORS & INSTRUMENTS",
    id: "sensors",
    icon: Radio,
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200&q=90",
    description: "High-precision measurement for every variable. From ultrasonic level detection to high-frequency vibration analysis. We give your machines the power to feel.",
    longContent: "Successful automation is only as good as the raw data coming from the field. ASKworX sources and integrates the world's most reliable sensors from IFM, Keyence, Turck, and Rockwell. We focus on IO-Link enabled digital sensors that provide more than just a 4-20mA signal—they provide diagnostics, health status, and internal parameter tracking. Whether you need sub-millisecond vision triggers for a high-speed bottling line, or non-contact ultrasonic level sensors for a corrosive chemical tank, we ensure the instrument is correctly specified for the environment. Our team provides full calibration services, mapping sensor scales directly into the PLC to ensure that what's happening in the tank is what's reflected on the CEO's dashboard.",
    specs: ["IO-Link Digital Native Comms", "4-20mA / 0-10V Standard Support", "ATEX / Ex Zone 0/1 Certification", "Non-contact Measurement Tech", "Self-diagnostic Smart Sensors", "Chemical Hardened PEEK Housing"],
    features: [
      "Continuous Level & Flow Sensing",
      "High-precision RTC Temperature Probes",
      "Differential Pressure Transmitters",
      "Tri-axial Vibration Edge Sensors",
      "Smart Vision & OCR Controllers",
      "Integrated Barcode/RFID Scanners"
    ],
    technicalTable: [
      { param: "Accuracy", val: "Up to 0.01% of Full Scale" },
      { param: "Response", val: "Microsecond Measurement Cycle" },
      { param: "Protocols", val: "IO-Link, HART, Modbus, 4-20mA" },
      { param: "Environmental", val: "Up to 200°C High-Temp Support" }
    ],
    useCases: [
      "Pharma Tank Volume Calibration",
      "Vibration-based Asset Health",
      "High-speed Part Vision Counting",
      "Continuous Wastewater Analysis"
    ]
  },
  {
    title: "ENERGY MONITORING",
    id: "energy-monitoring",
    icon: BarChart3,
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200&q=90",
    description: "Real-time tracking of electrical, water, and gas usage across your facility to identify waste and reduce carbon footprint. We turn energy from a cost into a strategic asset.",
    longContent: "In the modern industrial era, energy is one of your largest controllable costs. ASKworX Energy Monitoring solutions provide a granular view of consumption at the machine or even the component level. By integrating smart meters and power quality analyzers into a unified database, we help you identify 'hidden' energy waste—such as air compressors running unnecessarily on weekends, or motor loads that are unbalanced and causing thermal loss. Our systems calculate your specific energy consumption (SEC) per unit of production, giving management a clear KPI of operational efficiency. Beyond cost savings, our platforms generate automated carbon footprint reports, helping you meet regional sustainability goals and ISO 50001 requirements with a single click.",
    specs: ["Class 0.2S Smart Meter Sync", "Real-time Power Quality (THD) Tracking", "Active Harmonic Distortion Discovery", "Automated Peak Shaving Alerts", "Cloud-based Historical Trending", "Integrated ISO 50001 Reporting"],
    features: [
      "Real-time Facility Usage Heatmaps",
      "Inter-equipment Benchmarking",
      "AI-driven Predictive Energy Billing",
      "Shift-wise & Batch-wise Analysis",
      "Email/WhatsApp Overage Alerts",
      "Global Multi-site Fleet Overview"
    ],
    technicalTable: [
      { param: "Monitoring", val: "V, I, kW, kVA, PF, kWH, Sag/Swell" },
      { param: "Granularity", val: "Individual Motor or Line Level" },
      { param: "Integration", val: "Modbus/TCP, BACnet, MQTT" },
      { param: "Compliance", val: "ISO 50001 / BEE Standard Ready" }
    ],
    useCases: [
      "Plant-wide PUE Optimization",
      "Utility Billing Validation",
      "Carbon Footprint Audit Support",
      "Predictive Maintenance via Load"
    ]
  },
  {
    title: "PREDICTIVE ANALYTICS",
    id: "predictive-analytics",
    icon: Activity,
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=90",
    description: "Detecting machine failure before it happens. Our analytics platform uses high-frequency data to identify anomalies in vibration, heat, and current draw.",
    longContent: "Unplanned downtime is the single greatest threat to manufacturing profitability. ASKworX Predictive Analytics moves your facility from 'fail-and-fix' to 'predict-and-prevent.' We deploy high-frequency edge sensors that monitor tri-axial vibration, ultrasonic noise, and electrical harmonics. This raw data is processed locally using machine learning models that understand the 'normal' signature of your motors and bearings. When a deviation occurs—even if it's too subtle for a human operator or a traditional alarm to catch—our system flags an anomaly. We provide a remaining useful life (RUL) estimate for critical components, allowing you to schedule maintenance during planned shutdowns rather than losing production during peak hours.",
    specs: ["High-speed 10kHz Signal Sampling", "Machine Learning (ML) Anomaly Sync", "Fourier Transform (FFT) on Edge", "Remaining Useful Life (RUL) Logic", "Cross-component Correlation", "API-first Enterprise Integration"],
    features: [
      "Vibration Spectrum Heat-analysis",
      "Thermal Trend Regression Models",
      "Automated Maintenance Work-orders",
      "Root Cause Identification Tools",
      "Multi-dimensional Failure Map",
      "Executive Reliability Dashboard"
    ],
    technicalTable: [
      { param: "Sampling", val: "Up to 100,000 Samples/Sec" },
      { param: "Algorithms", val: "Auto-encoders, RNN, & XGBoost" },
      { param: "Integration", val: "SAP / Oracle / MS Dynamics" },
      { param: "Alerting", val: "Critical Path Risk Weighting" }
    ],
    useCases: [
      "Critical Turbine Health Monitoring",
      "Conveyor Bearing Wear Detection",
      "Pump Cavitation Early Warning",
      "Tooling Degradation in CNCs"
    ]
  },
  {
    title: "CLOUD BACKUP & DISASTER",
    id: "backup",
    icon: HardDrive,
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=90",
    description: "Ensuring your machine configurations and databases are never lost. Automated, encrypted backups for the entire industrial stack.",
    longContent: "In automation, code is everything. Losing your PLC programs, HMI project files, or historical databases during a hardware failure or a server crash can cost weeks of downtime. ASKworX Cloud Backup provides an automated safety net for your entire digital estate. We implement version-controlled backups for logic files and continuous real-time replication for SQL databases. Our 'Grandfather-Father-Son' rotation strategy, combined with immutable cloud storage (WORM), ensures that even in the case of a ransomware attack, you have a clean version to restore from. We focus on MTTR—Mean Time To Restore—providing a localized cache for instant recovery and a cloud repository for long-term disaster resilience.",
    specs: ["AES-256 Multi-layer Encryption", "WORM Immutable Storage Policy", "Versioning for PLC/SCADA projects", "SQL/NoSQL Real-time Replication", "Hybrid: Local Cache + Cloud Repo", "Automated Daily Health Reports"],
    features: [
      "Automated Logic Project Archival",
      "Database Point-in-time Recovery",
      "Zero-Loss Transaction Logging",
      "Encrypted Global Transit (TLS)",
      "Multi-generational Backup Sets",
      "Instant Local Restore Capability"
    ],
    technicalTable: [
      { param: "SLA", val: "99.999% Data Durability" },
      { param: "Compute", val: "Azure / AWS / Private Cloud" },
      { param: "Auditing", val: "Full Restoration Log & Check" },
      { param: "Bandwidth", val: "Deduplicated Incremental Sync" }
    ],
    useCases: [
      "Server Failover Recovery",
      "Accidental Change Reversal",
      "Cyber Attack Clean-restore",
      "Project History & Audit Trail"
    ]
  }
];

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const product: Product = (products.find(p => p.id === slug) || products[0]) as Product;

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end overflow-hidden px-[48px] pb-20 pt-24">
        <Image src={product.img} alt={product.title} fill priority className="object-cover object-center opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/95 z-0" />
        
        <div className="max-w-[1280px] mx-auto w-full relative z-10">
          <Link href="/products" className="flex items-center gap-2 text-[#94A3B8] text-[0.75rem] font-black tracking-[0.2em] uppercase mb-8 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> BACK TO ALL PRODUCTS
          </Link>
          <Badge>● GROUND TO CLOUD</Badge>
          <h1 className="text-[clamp(3rem,6vw,6rem)] font-heading font-black leading-[0.9] mt-4 text-white uppercase italic tracking-tighter">
            {product.title}
          </h1>
        </div>
      </section>

      {/* Main Container */}
      <div className="bg-black">
        {/* Short Overview */}
        <section className="section-padding px-[48px]">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-32">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-sm font-black tracking-[0.4em] text-[#1A3D2B] uppercase mb-12">Product Overview</h2>
                  <p className="text-3xl font-heading font-black text-white uppercase leading-tight mb-12 italic">
                     THE ENGINEERING EDGE<br />IN {product.title}.
                  </p>
                  <p className="text-xl text-[#94A3B8] leading-relaxed mb-12 italic">
                     {product.description}
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                     {product.specs?.map((spec: string, i: number) => (
                       <div key={i} className="flex gap-4 items-center">
                          <CheckCircle2 className="w-4 h-4 text-[#1A3D2B]" />
                          <span className="text-[10px] font-black tracking-widest text-[#94A3B8] uppercase">{spec}</span>
                       </div>
                     ))}
                  </div>
               </motion.div>
               <div className="relative h-[550px] border border-white/10 rounded-3xl overflow-hidden shadow-2xl skew-y-1">
                  <Image src={product.img} fill alt={product.title} className="object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#1A3D2B]/20 to-transparent" />
               </div>
            </div>
          </div>
        </section>

        {/* Long Narrative Section */}
        <section className="py-[120px] bg-[#050505] px-[48px] border-y border-white/5">
           <div className="max-w-[1280px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                 <div className="lg:col-span-4">
                    <Badge>THE DEEP DIVE</Badge>
                    <h3 className="text-4xl font-heading font-black text-white uppercase italic leading-[0.9] mb-12">UNCOMPROMISING<br />ENGINEERING.</h3>
                    <div className="w-24 h-1 bg-[#1A3D2B] mb-12" />
                    <p className="text-secondary text-[10px] font-black tracking-[0.5em] uppercase">Built for Scale</p>
                 </div>
                 <div className="lg:col-span-8">
                    <div className="prose prose-invert max-w-none">
                       <p className="text-2xl text-white leading-relaxed font-light italic mb-12 border-l-4 border-[#1A3D2B] pl-10">
                          {product.longContent}
                       </p>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
                          {product.details?.map((detail: ProductDetail, i: number) => (
                            <div key={i} className="space-y-6 p-8 bg-black border border-white/5 rounded-2xl hover:border-white/20 transition-all">
                               <h4 className="text-xl font-heading font-black text-white uppercase italic">{detail.title}</h4>
                               <p className="text-sm text-[#94A3B8] leading-relaxed italic">{detail.text}</p>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Technical Specs & Use Cases */}
        <section className="section-padding bg-black px-[48px]">
           <div className="max-w-[1280px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                 {/* Spec Table */}
                 <div>
                    <h3 className="text-sm font-black tracking-[0.4em] text-secondary uppercase mb-12">SYSTEM SPECIFICATIONS</h3>
                    <div className="space-y-0 border-t border-white/10">
                       {product.technicalTable?.map((row: TechnicalRow, i: number) => (
                         <div key={i} className="flex justify-between py-8 border-b border-white/10 group hover:bg-white/5 transition-all px-4">
                            <span className="text-[11px] font-black text-white/40 uppercase tracking-widest">{row.param}</span>
                            <span className="text-[11px] font-black text-white uppercase tracking-widest text-right">{row.val}</span>
                         </div>
                       ))}
                    </div>
                 </div>

                 {/* Core Features & Use Cases */}
                 <div className="space-y-12">
                    <div className="bg-[#0D0D0D] p-12 border border-white/5 rounded-3xl">
                       <h3 className="text-sm font-black tracking-[0.4em] text-[#1A3D2B] uppercase mb-12">CORE CAPABILITIES</h3>
                       <div className="grid grid-cols-1 gap-6">
                          {product.features?.map((feat: string, i: number) => (
                            <div key={i} className="flex items-center gap-6 group cursor-default">
                               <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#1A3D2B] transition-all" />
                               <span className="text-white text-[12px] font-black uppercase tracking-[0.2em]">{feat}</span>
                            </div>
                          ))}
                       </div>
                    </div>

                    <div className="p-12 border border-white/10 rounded-3xl">
                       <h3 className="text-sm font-black tracking-[0.4em] text-secondary uppercase mb-12">TYPICAL USE CASES</h3>
                       <div className="grid grid-cols-2 gap-8">
                          {product.useCases?.map((use: string, i: number) => (
                            <div key={i} className="flex flex-col gap-4">
                               <div className="text-[#1A3D2B] font-black text-xs">0{i+1}</div>
                               <p className="text-[11px] font-black text-white uppercase tracking-widest leading-loose">{use}</p>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Integration Grid */}
        <section className="section-padding bg-[#050505] px-[48px] border-t border-white/5">
          <div className="max-w-[1280px] mx-auto text-center">
             <Badge>ECOSYSTEM</Badge>
             <h2 className="text-5xl font-heading font-black text-white uppercase mb-24 italic">SEAMLESS INTEGRATION PATH</h2>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { icon: Zap, title: "POWER", body: "High-efficiency distribution and protection." },
                  { icon: Monitor, title: "VISUAL", body: "ISA-101 compliant visualization." },
                  { icon: Activity, title: "SIGNAL", body: "Deterministic logic for time-critical I/O." },
                  { icon: Cloud, title: "CLOUD", body: "Secure MQTT/TLS 1.3 telemetry streams." }
                ].map((item, i) => (
                  <div key={i} className="p-12 bg-black border border-white/5 rounded-xl hover:border-white transition-all group">
                     <item.icon className="w-10 h-10 text-white mx-auto mb-8 group-hover:text-[#1A3D2B] transition-colors" />
                     <h4 className="text-[11px] font-black tracking-[0.3em] text-white uppercase mb-4">{item.title}</h4>
                     <p className="text-[13px] text-[#6B7280] font-bold tracking-widest leading-loose uppercase italic">{item.body}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-[160px] bg-black px-[48px] text-center border-t border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1A3D2B]/5 blur-3xl rounded-full" />
          <div className="max-w-[1280px] mx-auto relative z-10">
             <h2 className="text-[clamp(3rem,10vw,10rem)] font-heading font-black text-white uppercase mb-8 leading-[0.85] italic tracking-tighter">READY TO SPECIFY<br />YOUR SYSTEM?</h2>
             <p className="text-2xl text-[#94A3B8] mb-24 uppercase font-black tracking-widest italic">"We engineer what works. At scale."</p>
             
             <div className="flex flex-wrap justify-center gap-6">
                <a href="https://wa.me/919030108949" target="_blank" rel="noopener noreferrer">
                  <Button className="px-16 py-6 bg-[#1A3D2B] text-white rounded-full font-black uppercase tracking-widest text-xs">WHATSAPP CONSULTATION →</Button>
                </a>
                <Link href="/contact">
                  <Button variant="secondary" className="px-16 py-6 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">GET TECHNICAL QUOTE →</Button>
                </Link>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
}
