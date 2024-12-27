// hardwareItems.js
const temSuggestions = [
    // 1. **RAM (Random Access Memory)**
    'Corsair Vengeance LPX 16GB DDR4 - Corsair',
    'G.SKILL Ripjaws V 16GB DDR4 - G.SKILL',
    'Kingston HyperX Fury 8GB DDR4 - Kingston',
    'Crucial Ballistix 32GB DDR4 - Crucial',
    'ADATA XPG Gammix D30 16GB DDR4 - ADATA',
    'Patriot Viper Steel 16GB DDR4 - Patriot',
    'Team T-Force Delta RGB 16GB DDR4 - Team',
    'Hynix HMA82GU6AFR8N 8GB DDR4 - Hynix',
  
    // 2. **CPUs (Central Processing Units)**
    'Intel Core i9-13900K - Intel',
    'AMD Ryzen 9 7950X - AMD',
    'Intel Core i7-12700K - Intel',
    'AMD Ryzen 7 5800X - AMD',
    'Intel Core i5-13600K - Intel',
    'AMD Ryzen 5 5600X - AMD',
    'Intel Xeon Platinum 8280 - Intel',
    'AMD Threadripper 3990X - AMD',
  
    // 3. **GPUs (Graphics Processing Units)**
    'NVIDIA GeForce RTX 3080 - NVIDIA',
    'NVIDIA GeForce RTX 4090 - NVIDIA',
    'AMD Radeon RX 6800 XT - AMD',
    'NVIDIA GeForce GTX 1660 Super - NVIDIA',
    'NVIDIA Titan RTX - NVIDIA',
    'NVIDIA Quadro RTX 8000 - NVIDIA',
    'AMD Radeon RX 5700 XT - AMD',
    'NVIDIA GeForce GTX 1050 Ti - NVIDIA',
  
    // 4. **SSDs (Solid State Drives)**
    'Samsung 970 EVO 1TB SSD - Samsung',
    'Western Digital Black SN850 1TB SSD - Western Digital',
    'Crucial P5 Plus 2TB SSD - Crucial',
    'Kingston NV2 500GB SSD - Kingston',
    'SanDisk Extreme Pro 1TB SSD - SanDisk',
    'Seagate FireCuda 520 1TB SSD - Seagate',
    'ADATA XPG SX8200 Pro 1TB SSD - ADATA',
    'Intel Optane 905P 480GB SSD - Intel',
  
    // 5. **HDDs (Hard Disk Drives)**
    'Seagate Barracuda 2TB HDD - Seagate',
    'Western Digital Blue 1TB HDD - Western Digital',
    'Toshiba X300 4TB HDD - Toshiba',
    'HGST Deskstar NAS 6TB HDD - HGST',
    'Seagate IronWolf 8TB HDD - Seagate',
    'Western Digital Red 4TB HDD - Western Digital',
    'Toshiba N300 10TB NAS HDD - Toshiba',
    'Seagate SkyHawk 8TB HDD - Seagate',
  
    // 6. **Motherboards**
    'ASUS ROG Crosshair X670E Hero - ASUS',
    'MSI MAG B550 TOMAHAWK WIFI - MSI',
    'Gigabyte Z690 AORUS MASTER - Gigabyte',
    'ASRock B550 Steel Legend - ASRock',
    'EVGA Z490 FTW3 - EVGA',
    'ASUS TUF Z490-Plus Gaming - ASUS',
    'MSI MEG Z590 GODLIKE - MSI',
    'Gigabyte AORUS Xtreme Z690 - Gigabyte',
  
    // 7. **Keyboards**
    'Logitech G Pro X Keyboard - Logitech',
    'Corsair K95 RGB Platinum - Corsair',
    'Razer Huntsman Elite - Razer',
    'SteelSeries Apex Pro - SteelSeries',
    'HyperX Alloy FPS Pro - HyperX',
    'Logitech G915 TKL - Logitech',
    'Razer BlackWidow V3 - Razer',
    'Corsair K70 RGB MK.2 - Corsair',
  
    // 8. **Mice**
    'Logitech G Pro Wireless Mouse - Logitech',
    'Razer DeathAdder V2 - Razer',
    'SteelSeries Rival 600 - SteelSeries',
    'Corsair Dark Core RGB/SE - Corsair',
    'Zowie EC2-A - Zowie',
    'Logitech G502 HERO - Logitech',
    'Razer Naga X - Razer',
    'SteelSeries Sensei Ten - SteelSeries',
  
    // 9. **Monitors**
    'Dell UltraSharp U2720Q 27" 4K Monitor - Dell',
    'LG 27GN950-B 27" 4K Nano IPS Monitor - LG',
    'Samsung Odyssey G7 32" Curved Monitor - Samsung',
    'ASUS TUF VG27AQ 27" Monitor - ASUS',
    'BenQ ZOWIE XL2411P 24" Monitor - BenQ',
    'Acer Predator X34 34" Curved Monitor - Acer',
    'LG UltraGear 34GN850-B 34" Curved Monitor - LG',
    'ASUS ROG Swift PG259QN 24.5" 360Hz - ASUS',
  
    // 10. **Power Supply Units (PSU)**
    'Corsair RM850x 850W PSU - Corsair',
    'EVGA SuperNOVA 750 G5 750W PSU - EVGA',
    'Seasonic Focus GX-650 650W PSU - Seasonic',
    'Cooler Master MWE Gold 750W PSU - Cooler Master',
    'Thermaltake Toughpower GF1 650W PSU - Thermaltake',
    'Corsair HX1000i 1000W PSU - Corsair',
    'Antec Earthwatts Gold Pro 750W PSU - Antec',
    'SilverStone Strider Platinum 1000W PSU - SilverStone',
  
    // 11. **PC Cases**
    'NZXT H510 Elite Case - NZXT',
    'Fractal Design Meshify C Case - Fractal Design',
    'Corsair iCUE 4000X RGB Case - Corsair',
    'Phanteks Eclipse P400A Case - Phanteks',
    'Cooler Master MasterBox Q300L Case - Cooler Master',
    'Lian Li PC-011 Dynamic Case - Lian Li',
    'Thermaltake Core P3 Case - Thermaltake',
    'Be Quiet! Dark Base Pro 900 Case - Be Quiet!',
  
    // 12. **Cooling (Fans & Heatsinks)**
    'Noctua NH-D15 CPU Cooler - Noctua',
    'Corsair iCUE H150i Elite Capellix - Corsair',
    'NZXT Kraken Z73 360mm - NZXT',
    'Cooler Master Hyper 212 EVO - Cooler Master',
    'be quiet! Dark Rock Pro 4 - be quiet!',
    'ARCTIC Freezer 34 eSports - ARCTIC',
    'Thermaltake Floe DX RGB 360mm - Thermaltake',
    'Scythe Mugen 5 Rev.B - Scythe',
  
    // 13. **Optical Drives (CD/DVD/Blu-ray)**
    'LG WH16NS40 Blu-ray Burner - LG',
    'Pioneer BDR-XD07B Blu-ray Writer - Pioneer',
    'ASUS BW-16D1HT Blu-ray Writer - ASUS',
    'LG GP60NB50 External DVD Writer - LG',
    'Lite-On IHAS124-14 DVD Writer - Lite-On',
  
    // 14. **External Storage (HDDs & SSDs)**
    'Seagate Backup Plus 2TB External HDD - Seagate',
    'Western Digital My Passport 1TB - Western Digital',
    'SanDisk Extreme Portable 1TB SSD - SanDisk',
    'Samsung T7 Touch 1TB SSD - Samsung',
    'Seagate Expansion 4TB External HDD - Seagate',
  
    // 15. **Network Cards & Adapters**
    'TP-Link Archer T4U AC1200 Wireless Adapter - TP-Link',
    'ASUS PCE-AC88 AC3100 Wi-Fi Adapter - ASUS',
    'NETGEAR Nighthawk AC1900 Wi-Fi Adapter - NETGEAR',
    'Intel Wi-Fi 6 AX200 - Intel',
    'Killer E2600 Ethernet Controller - Killer',
  
    // 16. **Sound Cards & Audio Interfaces**
    'Creative Sound BlasterX AE-5 - Creative',
    'ASUS Xonar AE - ASUS',
    'Focusrite Scarlett 2i2 (3rd Gen) Audio Interface - Focusrite',
    'Behringer UMC22 Audio Interface - Behringer',
    'M-Audio M-Track Solo Audio Interface - M-Audio',
    'Logitech MX Master 3S Wireless Mouse',
    'Logitech Signature AI Edition M750 Wireless Mouse',
    'Logitech MX Anywhere 3 Wireless Mouse',
    'Logitech MX Vertical Wireless Mouse',
    'Logitech M720 Triathlon Wireless Mouse',
    'Logitech M330 Silent Plus Wireless Mouse',
    'Logitech M585 Multi-Device Wireless Mouse',
    'Logitech M350 Silent Wireless Mouse',
    'Logitech M510 Wireless Mouse',
    'Logitech M325 Wireless Mouse',
    'Logitech M317 Wireless Mouse',
    'Logitech M185 Wireless Mouse',
    'Logitech M170 Wireless Mouse',
    'Logitech M100 Wired Mouse',
    'Logitech M90 Wired Mouse',
    'Logitech M190 Wired Mouse',
    'Logitech M105 Wired Mouse',
    'Logitech M110 Wired Mouse',
    'Logitech M115 Wired Mouse',
    'Logitech M125 Wired Mouse',
    'Logitech M170 Wired Mouse',
    'Logitech M220 Silent Wireless Mouse',
    'Logitech M331 Silent Plus Wireless Mouse',
    'Logitech M337 Bluetooth Mouse',
    'Logitech M535 Bluetooth Mouse',
    'Logitech M720 Triathlon Wireless Mouse',
    'Logitech M590 Multi-Device Silent Mouse',
    'Logitech M350 Pebble Wireless Mouse',
    'Logitech M170 Wireless Mouse',
    'Logitech M185 Wireless Mouse',
    'Logitech M100 Wired Mouse',
    'Logitech M105 Wired Mouse',
    'Logitech M110 Wired Mouse',
    

  ];
  
  export default temSuggestions;
  