/* ============================================================
   cart.js — Quản lý giỏ hàng phía client (demo, không backend)
   Lưu giỏ hàng vào localStorage dưới key "pl_cart"
   Mỗi item: { id, baseId, name, price, qty, img, size, toppings }
   - id: khoá duy nhất (kết hợp baseId + size + toppings) để cùng 1
     sản phẩm nhưng chọn size/topping khác nhau vẫn tách thành
     dòng riêng trong giỏ hàng.
   - baseId: id gốc của sản phẩm (dùng để tra cứu lại nếu cần).
   ============================================================ */

const CART_KEY = 'pl_cart';

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

// Tạo khoá duy nhất cho 1 dòng giỏ hàng dựa trên id gốc + size + topping
function buildCartLineId(baseId, size, toppings) {
  const toppingKey = (toppings && toppings.length)
    ? toppings.slice().sort().join(',')
    : '';
  return [baseId, size || '', toppingKey].join('|');
}

// Thêm sản phẩm vào giỏ.
// product: { id, name, price, img }
// qty: số lượng muốn thêm
// options: { size, toppings } (tuỳ chọn — dùng cho trang chi tiết sản phẩm)
function addToCart(product, qty = 1, options = {}) {
  const { id, name, price, img } = product;
  const { size = null, toppings = [] } = options;

  const lineId = buildCartLineId(id, size, toppings);
  const cart = getCart();
  const existing = cart.find(item => item.id === lineId);

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: lineId,
      baseId: id,
      name,
      price,
      qty,
      img: img || '',
      size: size || null,
      toppings: toppings || []
    });
  }
  saveCart(cart);
}

function removeFromCart(id) {
  const cart = getCart().filter(item => item.id !== id);
  saveCart(cart);
}

// dir: 'up' hoặc 'down'
function changeQty(id, dir) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  if (dir === 'up') item.qty = Math.min(item.qty + 1, 20);
  else item.qty = Math.max(item.qty - 1, 1);
  saveCart(cart);
}

function clearCart() {
  saveCart([]);
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function getCartSubtotal() {
  return getCart().reduce((sum, item) => sum + item.price * item.qty, 0);
}

function formatVND(n) {
  return n.toLocaleString('vi-VN') + 'đ';
}

// Hiện số lượng sản phẩm trong giỏ lên icon/link "Giỏ hàng" ở navbar (nếu có phần tử #cartBadge)
function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (!badge) return;
  const count = getCartCount();
  badge.textContent = count;
  badge.style.display = count > 0 ? 'inline-flex' : 'none';
}
document.addEventListener('DOMContentLoaded', updateCartBadge);