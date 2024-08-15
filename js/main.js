//VARS + PRODUCTOS

class producto {
    constructor(id, nombre, precio, cantidad, oferta, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad
        this.oferta = oferta;
        this.imagen = imagen;
    };
};

let producto1 = new producto(1,"Ryzen 5 3600 AM4 + Cooler", 90, 1, true, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_16749_Procesador_AMD_RYZEN_5_3600_4.2GHz_Turbo_AM4_Wraith_Stealth_Cooler_f8ab4915-grn.jpg");
let producto2 = new producto(2,"Ryzen 7 5800x AM4", 190, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_22300_Procesador_AMD_Ryzen_7_5800X_4.7GHz_Turbo_AM4_-_No_incluye_Cooler_05ce1332-grn.jpg");
let producto3 = new producto(3,"Ryzen 9 5900x AM4", 250, 1, false,"https://imagenes.compragamer.com/productos/compragamer_Imganen_general_22430_Procesador_AMD_Ryzen_9_5900X_4.8GHz_Turbo_AM4_-_No_incluye_Cooler_f09696e5-grn.jpg");
let producto4 = new producto(4,"I3 10105f Socket/1200",100, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38642_Procesador_Intel_Core_i3_10105F_4.4GHz_Turbo_Socket_1200_Comet_Lake_33e84369-grn.jpg");
let producto5 = new producto(5,"I5 14400F Socket/1700",210, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_29679_Procesador_Intel_Core_i5_12400F_4.4GHz_Turbo_Socket_1700_Alder_Lake_ac34b205-grn.jpg");
let producto6 = new producto(6,"I7 12700K Socket/1700",185, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_29140_Procesador_Intel_Core_i7_12700K_5.0GHz_Turbo_Socket_1700_Alder_Lake_4319ac0c-grn.jpg");
let producto7 = new producto(7,"Rx580 8GB DualOC",100, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_39364_Placa_de_Video_Asrock_Radeon_RX_7700_XT_12GB_GDDR6_CHALLENGER_OC_a8690c7f-grn.jpg");
let producto8 = new producto(8,"Rx6650xt 8GB",200, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_33401_Placa_de_Video_XFX_Radeon_RX_6650_XT_8GB_GDDR6_Speedster_SWFT_210_589f396b-grn.jpg");
let producto9 = new producto(9,"Rx7600 8GB DualOC",250, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38681_Placa_de_Video_ASUS_Dual_Radeon_RX_7600_GDDR6_V2_OC_6a4b8ca0-grn.jpg");
let producto10 = new producto(10,"Gtx1650 4GB OC",150, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_18725_Placa_de_Video_MSI_GeForce_GTX_1650_4GB_GDDR6_Ventus_XS_OC_ed050b8e-grn.jpg");
let producto11 = new producto(11,"Rtx3050 6GB OC",200, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_40287_Placa_de_Video_Gigabyte_GeForce_RTX_3050_6GB_GDDR6_Windforce_OC__3e47d3a7-grn.jpg");
let producto12 = new producto(12,"Rtx4070Super 12GB",270, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38741_Placa_de_Video_MSI_GeForce_RTX_4070_SUPER_12GB_GDDR6X_Ventus_3X_OC_611646c1-grn.jpg");
let producto13 = new producto(13,"Aerocool bionic G Bk.V2",30, 1, true, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_27390_Gabinete_Aerocool_Bionic_G_BK_V2_Black_1x_120mm_Fan_aRGB_ATX_01261dfc-grn.jpg");
let producto14 = new producto(14,"ASUS Rog Strix Gc601 HeliosAluminium",50, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_34179_Gabinete_ASUS_ROG_STRIX_GX601_Helios_Aluminum_White_RGB_9597dabf-grn.jpg");
let producto15 = new producto(15,"Kolink Inspire Vidrio Templado",40, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_24600_Gabinete_Kolink_Inspire_K20_Vidrio_Templado_1x120mm_ARGB_9da6fe74-grn.jpg");
let producto16 = new producto(16,"Kolink Void Black ARGB Vidrio Templado",35, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_34567_Gabinete_Kolink_Inspire_K3_RGB__M-ATX_Vidrio_Templado_7306ef99-grn.jpg");
let producto17 = new producto(17,"Asrock A520M HDV AM4",50, 1, true, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_24392_Mother_Asrock_A520M-HDV_AM4_5c7ae4d7-grn.jpg");
let producto18 = new producto(18,"Asrock B550 PhantomGaming 4AC AM4",60, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_26497_Mother_Asrock_B550_Phantom_Gaming_4_AC_AM4_WIFI_2928c18c-grn.jpg");
let producto19 = new producto(19,"ASUS Rog Strix X670-E E_Gaming",85, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_37316_Mother_ASUS_ROG_STRIX_X670E-E_GAMING_WIFI_AM5_DDR5_abb19c26-grn.jpg");
let producto20 = new producto(20,"Asrock B760M Socket 1700 Sonic/Edition",55, 1, false, "https://mexx-img-2019.s3.amazonaws.com/Motherboard-1700-14-Gen-Asrock-B760M-PG-SONIC-DDR5-WIFI_47528_5.jpeg");
let producto21 = new producto(21,"ASUS Prime H610M Socket/1700",100, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_30442_Mother_ASUS_PRIME_H610M-E_DDR4_S1700_3daea39b-grn.jpg");
let producto22 = new producto(22,"Gigabyte H470M Socket/1200",65, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_37182_Mother_Gigabyte_H470M_H_S1200_11c1fdca-grn.jpg");
let producto23 = new producto(23,"AeroCool Cylon 700W 80Plus-B RGB",30, 1, true, "https://s3-sa-east-1.amazonaws.com/saasargentina/mHSeigikzFetqJAbCkJk/imagen");
let producto24 = new producto(24,"Corsair 550W 80Plus-B",50, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_19533_Fuente_Corsair_550W_80_Plus_Bronze_CV550_7fa2fbc5-grn.jpg");
let producto25 = new producto(25,"Gigabyte 750W 80Plus-G",65, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_40366_Fuente_Gigabyte_750W_80_Plus_Gold_UD750GM_Full_Modular_7dbd1b19-grn.jpg");
let producto26 = new producto(26,"Wesdar MK4 BR ARGB",8, 1, false, "https://dcdn.mitiendanube.com/stores/001/022/730/products/instagram-1000x1000-21-5b79dd5ebc8413484a16239612589461-480-0.png");
let producto27 = new producto(27,"Cougar Vantar S RGB Low Profile Switch Scissor",20, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38146_Teclado_Cougar_Vantar_S_RGB_Low_Profile_Switch_Scissor_0c8b1e8d-grn.jpg");
let producto28 = new producto(28,"Logitech K270 Bk Wireless",15, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_39949_Teclado_Logitech_K270_Wireless_Black_fc45eecd-grn.jpg");
let producto29 = new producto(29,"Logitech M100 Gris",5, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_39977_Mouse_Logitech_M100_Gris_USB_5e82a8e7-grn.jpg");
let producto30 = new producto(30,"RedDragon Centrophorus M601 RGB",34, 1, true, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_28612_Mouse_Redragon_Centrophorus_M601_RGB_e00743a5-grn.jpg");
let producto31 = new producto(31,"Hyperx Pulsefire Haste 2 W RGB",34, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38107_Mouse_Hyperx_Pulsefire_Haste_2_Black_RGB_181db3a5-grn.jpg");
let producto32 = new producto(32,"RedDragon Hylas H260W W RGB",18, 1, true, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_31230_Auriculares_Redragon_Hylas_H260_RGB_Pink_68659207-grn.jpg");
let producto33 = new producto(33,"Hyperx Cloud Stinger Core 2 W",36, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38115_Auriculares_Hyperx_Cloud_Stinger_Core_2_White_PS5__PC_Auricular_99adb342-grn.jpg");
let producto34 = new producto(34,"Cable para fuente 1.5M",2, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_1542_Cable_de_poder_para_-_fuente_de_PC_de_3_patas_0_75mm_1_5mts_67eb4525-grn.jpg");
let producto35 = new producto(35,"Patriot Viper DDR4 8GB 3200MHz Steel",20, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_18965_Memoria_Patriot_Viper_DDR4_8GB_3200MHz_Steel_CL16_cb432c2e-grn.jpg");
let producto36 = new producto(36,"T-Force DDR4 2x8GB 3200MHz Nigth Hawk RGB Black",50, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_11557_Memoria_Team_DDR4_16GB__2x8GB__3200MHz_Night_Hawk_RGB_Black_CL16_RGB_Black_f04f26c3-grn.jpg");
let producto37 = new producto(37,"T-Force DDR5 2x16GB 6400MHz Delta RGB Black",140, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_29475_Memoria_Team_DDR5_32GB__2x16GB__6400MHz_T-Force_Delta_RGB_Black_CL40_Intel_XMP_3.0_3e9ff9b6-grn.jpg");
let producto38 = new producto(38,"Fan Antec 120ARGB x3 + Control",40, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38520_Cooler_Fan_Antec_Fusion_120_ARGB_Tri-Pack___Controladora_d905f467-grn.jpg");
let producto39 = new producto(39,"ID-Cooling SE-903-SD",10, 1, true, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_20687_Cooler_CPU_ID-Cooling_SE-903-SD_e07ee99b-grn.jpg");
let producto40 = new producto(40,"ASUS TUF LC 120 RGB",160, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_25782_Cooler_CPU_ASUS_TUF_LC_120_RGB_20d9110e-grn.jpg");

let productos = [
    producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10,
    producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto19, producto20,
    producto21, producto22, producto23, producto24, producto25, producto26, producto27, producto28, producto29, producto30,
    producto31, producto32, producto33, producto34, producto35, producto36, producto37, producto38, producto39, producto40
];

const arrayDeProductos = [
    new producto(1, "Ryzen 5 3600 AM4 + Cooler", 90, 1, true, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_16749_Procesador_AMD_RYZEN_5_3600_4.2GHz_Turbo_AM4_Wraith_Stealth_Cooler_f8ab4915-grn.jpg"),
    new producto(2, "Ryzen 7 5800x AM4", 190, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_22300_Procesador_AMD_Ryzen_7_5800X_4.7GHz_Turbo_AM4_-_No_incluye_Cooler_05ce1332-grn.jpg"),
    new producto(3, "Ryzen 9 5900x AM4", 250, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_22430_Procesador_AMD_Ryzen_9_5900X_4.8GHz_Turbo_AM4_-_No_incluye_Cooler_f09696e5-grn.jpg"),
    new producto(4, "I3 10105f Socket/1200", 100, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38642_Procesador_Intel_Core_i3_10105F_4.4GHz_Turbo_Socket_1200_Comet_Lake_33e84369-grn.jpg"),
    new producto(5, "I5 14400F Socket/1700", 210, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_29679_Procesador_Intel_Core_i5_12400F_4.4GHz_Turbo_Socket_1700_Alder_Lake_ac34b205-grn.jpg"),
    new producto(6, "I7 12700K Socket/1700", 185, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_29140_Procesador_Intel_Core_i7_12700K_5.0GHz_Turbo_Socket_1700_Alder_Lake_4319ac0c-grn.jpg"),
    new producto(7, "Rx580 8GB DualOC", 100, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_39364_Placa_de_Video_Asrock_Radeon_RX_7700_XT_12GB_GDDR6_CHALLENGER_OC_a8690c7f-grn.jpg"),
    new producto(8, "Rx6650xt 8GB", 200, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_33401_Placa_de_Video_XFX_Radeon_RX_6650_XT_8GB_GDDR6_Speedster_SWFT_210_589f396b-grn.jpg"),
    new producto(9, "Rx7600 8GB DualOC", 250, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38681_Placa_de_Video_ASUS_Dual_Radeon_RX_7600_GDDR6_V2_OC_6a4b8ca0-grn.jpg"),
    new producto(10, "Gtx1650 4GB OC", 150, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_18725_Placa_de_Video_MSI_GeForce_GTX_1650_4GB_GDDR6_Ventus_XS_OC_ed050b8e-grn.jpg"),
    new producto(11, "Rtx3050 6GB OC", 200, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_40287_Placa_de_Video_Gigabyte_GeForce_RTX_3050_6GB_GDDR6_Windforce_OC__3e47d3a7-grn.jpg"),
    new producto(12, "Rtx4070Super 12GB", 270, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38741_Placa_de_Video_MSI_GeForce_RTX_4070_SUPER_12GB_GDDR6X_Ventus_3X_OC_611646c1-grn.jpg"),
    new producto(13, "Aerocool bionic G Bk.V2", 30, 1, true, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_27390_Gabinete_Aerocool_Bionic_G_BK_V2_Black_1x_120mm_Fan_aRGB_ATX_01261dfc-grn.jpg"),
    new producto(14, "ASUS Rog Strix Gc601 HeliosAluminium", 50, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_34179_Gabinete_ASUS_ROG_STRIX_GX601_Helios_Aluminum_White_RGB_9597dabf-grn.jpg"),
    new producto(15, "Kolink Inspire Vidrio Templado", 40, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_24600_Gabinete_Kolink_Inspire_K20_Vidrio_Templado_1x120mm_ARGB_9da6fe74-grn.jpg"),
    new producto(16, "Kolink Void Black ARGB Vidrio Templado", 35, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_34567_Gabinete_Kolink_Inspire_K3_RGB__M-ATX_Vidrio_Templado_7306ef99-grn.jpg"),
    new producto(17, "Asrock A520M HDV AM4", 50, 1, true, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_24392_Mother_Asrock_A520M-HDV_AM4_5c7ae4d7-grn.jpg"),
    new producto(18, "Asrock B550 PhantomGaming 4AC AM4", 60, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_26497_Mother_Asrock_B550_Phantom_Gaming_4_AC_AM4_WIFI_2928c18c-grn.jpg"),
    new producto(19, "ASUS Rog Strix X670-E E_Gaming", 85, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_37316_Mother_ASUS_ROG_STRIX_X670E-E_GAMING_WIFI_AM5_DDR5_abb19c26-grn.jpg"),
    new producto(20, "Asrock B760M Socket 1700 Sonic/Edition", 55, 1, false, "https://mexx-img-2019.s3.amazonaws.com/Motherboard-1700-14-Gen-Asrock-B760M-PG-SONIC-DDR5-WIFI_47528_5.jpeg"),
    new producto(21, "ASUS Prime H610M Socket/1700", 100, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_30442_Mother_ASUS_PRIME_H610M-E_DDR4_S1700_3daea39b-grn.jpg"),
    new producto(22, "Gigabyte H470M Socket/1200", 65, 1,false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_37182_Mother_Gigabyte_H470M_H_S1200_11c1fdca-grn.jpg"),
    new producto(23, "AeroCool Cylon 700W 80Plus-B RGB", 30, 1, true, "https://s3-sa-east-1.amazonaws.com/saasargentina/mHSeigikzFetqJAbCkJk/imagen"),
    new producto(24, "Corsair 550W 80Plus-B", 50, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_19533_Fuente_Corsair_550W_80_Plus_Bronze_CV550_7fa2fbc5-grn.jpg"),
    new producto(25, "Gigabyte 750W 80Plus-G", 65, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_40366_Fuente_Gigabyte_750W_80_Plus_Gold_UD750GM_Full_Modular_7dbd1b19-grn.jpg"),
    new producto(26, "Wesdar MK4 BR ARGB", 8, 1, false, "https://dcdn.mitiendanube.com/stores/001/022/730/products/instagram-1000x1000-21-5b79dd5ebc8413484a16239612589461-480-0.png"),
    new producto(27, "Cougar Vantar S RGB Low Profile Switch Scissor", 20, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38146_Teclado_Cougar_Vantar_S_RGB_Low_Profile_Switch_Scissor_0c8b1e8d-grn.jpg"),
    new producto(28, "Logitech K270 Bk Wireless", 15, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_39949_Teclado_Logitech_K270_Wireless_Black_fc45eecd-grn.jpg"),
    new producto(29, "Logitech M100 Gris", 5, 1, false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_39977_Mouse_Logitech_M100_Gris_USB_5e82a8e7-grn.jpg"),
    new producto(30, "RedDragon Centrophorus M601 RGB", 34, 1,true, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_28612_Mouse_Redragon_Centrophorus_M601_RGB_e00743a5-grn.jpg"),
    new producto(31, "Hyperx Pulsefire Haste 2 W RGB", 34, 1,false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38107_Mouse_Hyperx_Pulsefire_Haste_2_Black_RGB_181db3a5-grn.jpg"),
    new producto(32, "RedDragon Hylas H260W W RGB", 18, 1,true, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_31230_Auriculares_Redragon_Hylas_H260_RGB_Pink_68659207-grn.jpg"),
    new producto(33, "Hyperx Cloud Stinger Core 2 W", 36, 1,false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38115_Auriculares_Hyperx_Cloud_Stinger_Core_2_White_PS5__PC_Auricular_99adb342-grn.jpg"),
    new producto(34, "Cable para fuente 1.5M", 2, 1,false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_1542_Cable_de_poder_para_-_fuente_de_PC_de_3_patas_0_75mm_1_5mts_67eb4525-grn.jpg"),
    new producto(35, "Patriot Viper DDR4 8GB 3200MHz Steel", 20, 1,false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_18965_Memoria_Patriot_Viper_DDR4_8GB_3200MHz_Steel_CL16_cb432c2e-grn.jpg"),
    new producto(36, "T-Force DDR4 2x8GB 3200MHz Nigth Hawk RGB Black", 50, 1,false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_11557_Memoria_Team_DDR4_16GB__2x8GB__3200MHz_Night_Hawk_RGB_Black_CL16_RGB_Black_f04f26c3-grn.jpg"),
    new producto(37, "T-Force DDR5 2x16GB 6400MHz Delta RGB Black", 140, 1,false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_29475_Memoria_Team_DDR5_32GB__2x16GB__6400MHz_T-Force_Delta_RGB_Black_CL40_Intel_XMP_3.0_3e9ff9b6-grn.jpg"),
    new producto(38, "Fan Antec 120ARGB x3 + Control", 40, 1,false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38520_Cooler_Fan_Antec_Fusion_120_ARGB_Tri-Pack___Controladora_d905f467-grn.jpg"),
    new producto(39, "ID-Cooling SE-903-SD", 10, 1,true, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_20687_Cooler_CPU_ID-Cooling_SE-903-SD_e07ee99b-grn.jpg"),
    new producto(40, "ASUS TUF LC 120 RGB", 160, 1,false, "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_25782_Cooler_CPU_ASUS_TUF_LC_120_RGB_20d9110e-grn.jpg")
];

//Carrito

let carrito = [];

if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"))
} else {
    carrito =[];
}

function agregarAlCarrito(producto) {
    if (!producto || !producto.id) {
        console.error("El producto es nulo o no tiene un ID válido", producto);
        return;
    }

    const{id, nombre, precio} = producto;

    if (carrito.some(el => el.id === id)) {
        const indexProducto = carrito.findIndex(el => el.id === id);
        carrito[indexProducto].cantidad += 1;
        carrito[indexProducto].subtotal = carrito[indexProducto].cantidad * carrito[indexProducto].precio
    } else {
        const nuevoProducto = {
            id,
            nombre,
            precio,
            cantidad: 1,
            subtotal: producto.precio
        };
        carrito.push(nuevoProducto);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function crearCard(producto) {
    const card = document.createElement("div");
    card.className = "card";

    const titulo = document.createElement("h4");
    titulo.innerText = producto.nombre;

    const precio = document.createElement("p");
    precio.innerText = `$${producto.precio}`;

const boton = document.createElement("button");
boton.innerText = "Agregar al carrito";
boton.onclick = () => agregarAlCarrito(producto);

const imagen = document.createElement("img");
imagen.src = producto.imagen;
imagen.className = "img";

card.append(imagen);
card.append(titulo);
card.append(precio);
card.append(boton);

container.append(card);
}

productos.forEach (el => crearCard(el));

const mostrar = document.createElement("button");
mostrar.innerText = "Mostrar Carrito";

mostrar.addEventListener("click", () => {
    console.log("Tu carrito es ", carrito)
});

const limpiar = document.createElement("button");
limpiar.innerText = "Vaciar Carrito";

limpiar.addEventListener("click", () => {
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito))
});


container.append(mostrar);
container.append(limpiar);

// Me quedo pendiente agregar un carusel en Inicio para que el usuario vea los productos en oferta