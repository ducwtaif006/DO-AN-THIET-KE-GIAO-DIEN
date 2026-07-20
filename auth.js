/* ============================================================
   auth.js — Quản lý tài khoản phía client (demo, không backend)
   Lưu danh sách user vào localStorage dưới key "pl_users"
   Lưu user đang đăng nhập vào key "pl_current_user"
   ============================================================ */

const AUTH_KEY = 'pl_users';
const SESSION_KEY = 'pl_current_user';

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(users));
}

// Hash đơn giản chỉ để không lưu mật khẩu dạng plain text trong localStorage.
// LƯU Ý: đây KHÔNG phải mã hoá an toàn, chỉ phù hợp cho demo phía client.
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return 'h' + Math.abs(hash).toString(36) + str.length;
}

function emailExists(email) {
  const users = getUsers();
  return users.some(u => u.email.toLowerCase() === email.toLowerCase());
}

// Trả về { ok: true } hoặc { ok: false, message: '...' }
function registerUser({ name, email, phone, password }) {
  if (emailExists(email)) {
    return { ok: false, message: 'Email này đã được đăng ký.' };
  }
  const users = getUsers();
  users.push({
    name,
    email,
    phone: phone || '',
    password: simpleHash(password),
    createdAt: new Date().toISOString()
  });
  saveUsers(users);
  return { ok: true };
}

// Trả về { ok: true, user } hoặc { ok: false, message: '...' }
function loginUser(email, password) {
  const users = getUsers();
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (!user) {
    return { ok: false, message: 'Email chưa được đăng ký.' };
  }
  if (user.password !== simpleHash(password)) {
    return { ok: false, message: 'Mật khẩu không đúng.' };
  }
  localStorage.setItem(SESSION_KEY, JSON.stringify({ name: user.name, email: user.email }));
  return { ok: true, user };
}

function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY));
  } catch (e) {
    return null;
  }
}

function logoutUser() {
  localStorage.removeItem(SESSION_KEY);
}
