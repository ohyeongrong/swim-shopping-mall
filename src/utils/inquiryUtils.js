export function getProductInquiries (list, prdId){
    return [...list]
    .filter((list) => list.productId === prdId)
    .sort((a, b) => new Date(b.writeAt) - new Date(a.writeAt));
};