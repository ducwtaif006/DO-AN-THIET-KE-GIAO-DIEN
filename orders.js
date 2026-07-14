/* ============================================================
   orders.js — Quản lý đơn hàng phía client (demo, không backend)
   Lưu danh sách đơn hàng vào localStorage dưới key "pl_orders"
   Mỗi đơn: { id, email, items:[{name,price,qty}], total, date, status }
   ============================================================ */

const ORDERS_KEY = 'pl_orders';

function getAllOrders() {
  try {
    return JSON.parse(localStorage.getItem(ORDERS_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveAllOrders(orders) {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

// Tạo đơn hàng mới gắn với email người dùng đang đăng nhập
// summary (tuỳ chọn): { subtotal, discount, couponCode, total }
// Nếu chỉ truyền total (kiểu cũ), subtotal/discount sẽ tự suy ra.
function createOrder(email, items, summaryOrTotal) {
  const orders = getAllOrders();
  const orderNum = orders.length + 1;

  const itemsSaved = items.map(i => ({
    name: i.name,
    price: i.price,
    qty: i.qty,
    img: i.img || '',
    size: i.size || null,
    toppings: i.toppings || []
  }));

  let summary;
  if (summaryOrTotal && typeof summaryOrTotal === 'object') {
    summary = summaryOrTotal;
  } else {
    summary = { total: summaryOrTotal };
  }

  const computedSubtotal = itemsSaved.reduce((s, i) => s + i.price * i.qty, 0);

  const order = {
    id: 'DH' + String(orderNum).padStart(3, '0') + '-' + Date.now().toString().slice(-4),
    email,
    items: itemsSaved,
    subtotal: summary.subtotal != null ? summary.subtotal : computedSubtotal,
    discount: summary.discount || 0,
    couponCode: summary.couponCode || null,
    total: summary.total != null ? summary.total : computedSubtotal,
    date: new Date().toLocaleDateString('vi-VN'),
    status: 'Hoàn thành'
  };
  orders.unshift(order); // đơn mới nhất lên đầu
  saveAllOrders(orders);
  return order;
}

function getOrdersByEmail(email) {
  return getAllOrders().filter(o => o.email.toLowerCase() === email.toLowerCase());
}

function getOrderById(id) {
  return getAllOrders().find(o => o.id === id) || null;
}