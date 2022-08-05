const precioOriginal = 120;
const descuento = 18;

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;
console.table({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
});

/**
 * The function takes a price and a discount percentage and returns the price with the discount
 * applied.
 * @param precio - the price of the product
 * @param descuento - the percentage of the discount
 * @returns the value of the variable precioConDescuento.
 */
function calcularPrecioConDescuento(precio, descuento) { 
    const porcentajePrecioConDescuento = 100 - descuento; // formula: (p * (100-d)) / 100
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

/**
 * It takes the value of the inputPrice and inputDiscount elements, passes them to the
 * calcularPrecioConDescuento function, and then displays the result in the resultP element.
 */
function onClickButtonPriceDiscount(){
    const inputPrice=document.getElementById("InputPrice");
    const priceValue=inputPrice.value;
    const inputDiscount=document.getElementById("InputDiscount");
    const discountValue=inputDiscount.value;
    const precioConDescuento=calcularPrecioConDescuento(priceValue,discountValue);
    const resultP=document.getElementById("ResultP");
    resultP.innerText="El precio con descuento son: $"+precioConDescuento;
}

// Reto 2

// Nuestros clientes están muy felices de poder calcular el precio final de sus productos después del descuento, 
// pero la tienda tiene una nueva solicitud para nosotros: implementar descuentos con cupones.

const cupones = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

// Primera opción
// function onClickButtonPriceCoupons(){
//     const inputPrice=document.getElementById("InputPrice");
//     const priceValue=inputPrice.value;
//     const inputCoupon=document.getElementById("InputCoupons");
//     const CouponValue=inputCoupon.value;

//     let descuento;

//     if (CouponValue ==  cupones[0]) {
//         descuento = 15;
//     }else if(CouponValue ==  cupones[1]){
//         descuento = 20;
//     }else if(CouponValue ==  cupones[2]){
//         descuento = 25;
//     }else {
//         descuento = 0;
//     }

//     const precioConDescuento=calcularPrecioConDescuento(priceValue,descuento);

//     const resultP=document.getElementById("ResultP");
//     resultP.innerText="El precio con descuento son: $"+precioConDescuento;
// }

// SEGUNDA OPCIÓN

// function onClickButtonPriceCoupons(){
//     const inputPrice=document.getElementById("InputPrice");
//     const priceValue=inputPrice.value;
//     const inputCoupon=document.getElementById("InputCoupons");
//     const CouponValue=inputCoupon.value;

//     let descuento;

//     if (!cupones.includes(CouponValue)) {
//         alert("El cupón " + CouponValue + "no es válido");
//         descuento = 0;
//      } else if (CouponValue === "JuanDC_es_Batman") {
//         descuento = 15;
//      } else if (CouponValue === "pero_no_le_digas_a_nadie") {
//         descuento = 30;
//      } else if (CouponValue === "es_un_secreto") {
//         descuento = 25;
//      }
     

//     const precioConDescuento=calcularPrecioConDescuento(priceValue,descuento);

//     const resultP=document.getElementById("ResultP");
//     resultP.innerText="Total a pagar: $"+precioConDescuento;
// }

// TERCERA OPCIÓN

const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];

/**
 * The function onClickButtonPriceCoupons() is called when the user clicks the button. It gets the
 * values of the inputPrice and inputCoupon elements, and then calls the function isCouponValueValid()
 * to see if the coupon is valid. If it is, it calls the function calcularPrecioConDescuento() to
 * calculate the price with the discount, and then displays the result in the resultP element.
 * @returns The function isCouponValueValid is being returned.
 */
function onClickButtonPriceCoupons(){
    const inputPrice=document.getElementById("InputPrice");
    const priceValue=inputPrice.value;
    const inputCoupon=document.getElementById("InputCoupons");
    const CouponValue=inputCoupon.value;

    const resultP=document.getElementById("ResultP");

    const isCouponValueValid = function (coupon) { // Esta función recibe el noombre de un cupón y busca que el nombre del cupon este en nuestro array
        return coupon.name === CouponValue; // Retorna true o false depende si CouponValue es exactamente igual al name de
    };
    
    /* Looking for the coupon that the user entered in the inputCoupon element. */
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        resultP.innerText="Total a pagar: $"+priceValue;
        alert("El cupón " + CouponValue + " no es válido");
    }else {
        const descuento = userCoupon.discount;
        const precioConDescuento=calcularPrecioConDescuento(priceValue,descuento);

        resultP.innerText="El precio con descuento es: $"+precioConDescuento;
    }
     
}
