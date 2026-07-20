# ✿ Phúc Long Heritage — Website Redesign

> Đồ án môn **Thiết Kế Giao Diện Người Dùng** — Đại học Văn Lang
> Học kỳ 3, Năm học 2024–2025 | Lớp: **253_71ITSE30903_0103**
> GVHD: **Trần Công Thanh**

---

## 🌐 Live Website

🔗 **[https://phuclong-nhom.netlify.app](https://phuclong-nhom.netlify.app)**
*(Cập nhật link sau khi deploy)*

---

## 👥 Thành viên nhóm

| STT | Họ và tên | MSSV | Trang phụ trách | Branch |
|-----|-----------|------|-----------------|--------|
| 1 | Bùi Đức Tài | 2474802010341 | Home, About, Login, Register, style.css, main.js | `buiductai` |
| 2 | Nguyễn Thanh Trúc | 2474802010409 | Menu Cà Phê, Chi tiết SP Trà, Chi tiết SP Cà Phê, orders.js | `nguyenthanhtruc` |
| 3 | Lê Huỳnh Yến Nhi | 2474802010282 | Menu Trà, Giỏ hàng, Lịch sử mua hàng, cart.js | `lehuynhyennhi` |
| 4 | Phạm Thị Nhi | 2474802010285 | Khuyến mãi, Liên hệ, FAQs, auth.js, images | `phamthinhi` |

---

## 📁 Cấu trúc dự án

```
phuclong-website/
│
├── home.html               # Trang chủ — Hero "100% Arabica", sản phẩm nổi bật
├── about.html              # Giới thiệu — Timeline thương hiệu 1968→2023
├── login.html              # Đăng nhập — Form validate, tài khoản demo
├── register.html           # Đăng ký — Inline validation, password strength meter
│
├── menu-tra.html           # Thực đơn Trà — Filter 4 tab, real-time search
├── menu-caphe.html         # Thực đơn Cà Phê — Filter, search
├── chitiet-tra.html        # Chi tiết SP Trà — Size, Topping, CSS Cup Art
├── chitiet-caphe.html      # Chi tiết SP Cà Phê — Size, Sugar options, CSS Cup Art
│
├── cart.html               # Giỏ hàng — Qty control, order summary, coupon
├── order-history.html      # Lịch sử mua hàng — Account sidebar, badge trạng thái
│
├── promotions.html         # Khuyến mãi — Promo cards, thẻ thành viên 3 hạng
├── contact.html            # Liên hệ — Form validation, info cards
├── faqs.html               # FAQs — Accordion, search, filter danh mục
│
├── css/
│   └── style.css           # CSS toàn site: navbar, dropdown, hero, cards, responsive
│
├── js/
│   ├── main.js             # JS chung: scroll reveal, filter, search, toast, FAQ, navbar
│   ├── auth.js             # Đăng ký / đăng nhập / session — localStorage
│   ├── cart.js             # Quản lý giỏ hàng — localStorage
│   └── orders.js           # Quản lý đơn hàng — localStorage
│
├── images/                 # Ảnh sản phẩm export từ Figma
│   ├── trasuapl.jpg
│   ├── trasuasocola.jpg
│   ├── hongtrasua.jpg
│   └── ...
│
├── README.md
└── GIT_GUIDE.md
```

---

## 🛠️ Công nghệ sử dụng

| Công nghệ | Phiên bản | Mục đích |
|-----------|-----------|----------|
| HTML5 | 5 | Cấu trúc trang, semantic tags |
| CSS3 | 3 | Custom styles, CSS Cup Art, animations, responsive |
| Bootstrap | 5.3.3 | Grid system, responsive utilities |
| JavaScript (Vanilla) | ES6+ | Filter, search, validation, DOM manipulation |
| localStorage (Web API) | Browser native | Lưu Cart, Auth session, Orders — không cần backend |
| Google Fonts | — | Font Inter toàn site |

---

## ✨ Tính năng đã implement

### 🔐 Auth System (`auth.js`)
- Đăng ký tài khoản mới (validate email, phone, password strength)
- Đăng nhập với kiểm tra email/password (simple hash, không plain text)
- Lưu session vào `localStorage` key `pl_current_user`
- Navbar tự cập nhật: hiển thị tên người dùng khi đã đăng nhập
- Tài khoản demo: `demo@phuclong.vn` / `demo123`

### 🛒 Cart System (`cart.js`)
- Thêm sản phẩm vào giỏ (`addToCart`) với size, topping riêng biệt
- Tăng/giảm số lượng, xóa từng item
- Tính tổng tiền, áp dụng mã giảm giá
- Lưu vào `localStorage` key `pl_cart`
- Badge số lượng tự cập nhật trên navbar

### 📦 Order System (`orders.js`)
- Tạo đơn hàng mới (`createOrder`) gắn theo email người dùng
- Lưu lịch sử đơn vào `localStorage` key `pl_orders`
- Hiển thị danh sách đơn theo tài khoản đang đăng nhập
- Badge trạng thái: Hoàn thành (xanh) / Đã huỷ (đỏ)

### 🎯 JS chung (`main.js`)
- Sticky navbar + box-shadow khi scroll
- Dropdown menu: hover vào "Menu" → xổ Trà / Cà Phê
- Scroll Reveal animation (IntersectionObserver)
- Filter sản phẩm theo danh mục (không reload trang)
- Real-time search sản phẩm theo tên
- Chọn size (S/M/L), topping, sugar level
- FAQ accordion toggle + search
- Toast notification (bottom-center, auto dismiss 2.5s)
- Back to Top button
- Form validation cho trang Contact

### 🎨 UI Highlights
- **CSS Cup Art**: Ly đồ uống 3D dựng hoàn toàn bằng CSS (clip-path, gradient, animation float)
- **Dropdown Menu**: Hover có animation fade+slide, icon 🍵/☕, sub-label
- **Responsive**: Mobile-first, test từ 375px → 1440px
- **Color dynamic**: Màu ly thay đổi theo tên sản phẩm (matcha xanh, cà phê nâu...)

---

## 🚀 Cách chạy local

```bash
# 1. Clone repo
git clone https://github.com/[username]/phuclong-website.git
cd phuclong-website

# 2. Mở bằng VS Code
code .

# 3. Chạy với Live Server
# Click chuột phải vào home.html → "Open with Live Server"
```

> ⚠️ Cần mở bằng Live Server (không mở file trực tiếp) để localStorage và link tương đối hoạt động đúng.

---

## 🧪 Tài khoản demo để test

| Field | Giá trị |
|-------|---------|
| Email | `demo@phuclong.vn` |
| Mật khẩu | `demo123` |

Tài khoản này có sẵn 4 đơn hàng mẫu trong Lịch sử mua hàng.

---

## 📌 Git Workflow

```
main  (production — deploy lên Netlify)
├── buiductai        → home, about, login, register, style.css, main.js
├── nguyenthanhtruc  → menu-caphe, chitiet-tra, chitiet-caphe, orders.js
├── lehuynhyennhi    → menu-tra, cart, order-history, cart.js
└── phamthinhi       → promotions, contact, faqs, auth.js, images
```

**Quy ước commit:**
```
feat: [tên tính năng] — [tên thành viên]
fix:  [mô tả bug]     — [tên thành viên]
style:[thay đổi CSS]  — [tên thành viên]
```

Xem hướng dẫn đầy đủ tại: [`GIT_GUIDE.md`](./GIT_GUIDE.md)

---

## 🌍 Deploy (Netlify)

1. Vào [app.netlify.com/drop](https://app.netlify.com/drop)
2. Kéo thả toàn bộ thư mục project → Netlify tự tạo link
3. Hoặc kết nối GitHub repo → auto-deploy mỗi khi push vào `main`

> ❌ Không dùng GitHub Pages theo yêu cầu môn học

---

## 🔗 Links

| Loại | URL |
|------|-----|
| 🎨 Figma Wireframe | [Dán link Figma tại đây] |
| 🐙 GitHub Repo | [Dán link GitHub tại đây] |
| 🌐 Website | [Dán link Netlify tại đây] |
| 🎬 Demo Video | [Dán link video tại đây] |

---

*© 2025 Phúc Long Heritage — Đồ án Thiết Kế Giao Diện Người Dùng — Đại học Văn Lang*
