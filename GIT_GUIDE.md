# 📖 Git Workflow Guide — Phúc Long Heritage

## 🔧 Bước 1: Cài đặt Git

Tải Git tại: https://git-scm.com/downloads
Sau khi cài, mở Terminal (hoặc Git Bash trên Windows):

```bash
git config --global user.name "Họ tên của bạn"
git config --global user.email "email@example.com"
```

---

## 📦 Bước 2: Tạo GitHub Repository (Nhóm trưởng —làm)

1. Vào https://github.com → **New repository**
2. Repository name: `phuclong-website`
3. Chọn **Public** ✅ (bắt buộc theo yêu cầu GV)
4. Tick **Add README file**
5. Click **Create repository**

---

## ⬇️ Bước 3: Clone repo về máy (Tất cả thành viên làm)

```bash
git clone https://github.com/[username]/phuclong-website.git
cd phuclong-website
```

---

## 🌿 Bước 4: Tạo branch cá nhân

Mỗi thành viên checkout branch riêng theo đúng tên đã đăng ký:

```bash
# Bùi Đức Tài
git checkout -b buiductai

# Nguyễn Thanh Trúc
git checkout -b nguyenthanhtruc

# Lê Huỳnh Yến Nhi
git checkout -b lehuynhyennhi

# Phạm Thị Nhi
git checkout -b phamthinhi
```

---

## 📝 Bước 5: Copy file vào đúng branch

Giải nén file ZIP / lấy file từ Figma export, copy các file được phân công vào đúng thư mục:

| Thành viên | MSSV | Branch | File / trang phụ trách |
|---|---|---|---|
| **Bùi Đức Tài** (Nhóm trưởng) | 2474802010341 | `buiductai` | `home.html`, `about.html`, `login.html`, `register.html`, `css/style.css`, `js/main.js` , `README`, `GIT_GUIDE`|
| **Nguyễn Thanh Trúc** | 2474802010409 | `nguyenthanhtruc` | `menu-caphe.html`, `chitiet-tra.html`, `chitiet-caphe.html`, `js/orders.js` |
| **Lê Huỳnh Yến Nhi** | 2474802010282 | `lehuynhyennhi` | `menu-tra.html`, `cart.html`, `order-history.html`, `js/cart.js` |
| **Phạm Thị Nhi** | 2474802010285 | `phamthinhi` | `promotions.html`, `contact.html`, `faqs.html`, `js/auth.js`, `images/` |


---

## ✅ Bước 6: Commit và Push lên branch cá nhân

```bash
# Xem trạng thái file
git status

# Thêm tất cả file thay đổi
git add .

# Commit với message rõ ràng
git commit -m "feat: thêm trang [tên trang] - [tên thành viên]"

# Ví dụ:
# git commit -m "feat: thêm trang Home, About, Login, Register - Bùi Đức Tài"
# git commit -m "feat: thêm trang Menu Cà Phê và chi tiết sản phẩm - Nguyễn Thanh Trúc"
# git commit -m "feat: thêm Menu Trà, Giỏ hàng, Lịch sử mua hàng - Lê Huỳnh Yến Nhi"
# git commit -m "feat: thêm trang Khuyến mãi, Liên hệ, FAQs - Phạm Thị Nhi"

# Push lên GitHub (thay bằng đúng tên branch của bạn)
git push origin buiductai
git push origin nguyenthanhtruc
git push origin lehuynhyennhi
git push origin phamthinhi
```

---

## 🔀 Bước 7: Tạo Pull Request và Merge vào main (Nhóm trưởng — Bùi Đức Tài làm)

Sau khi tất cả thành viên push xong:

1. Vào GitHub repo → **Pull requests** → **New pull request**
2. Base: `main` ← Compare: `buiductai` → **Create pull request**
3. Lặp lại cho `nguyenthanhtruc`, `lehuynhyennhi`, `phamthinhi`
4. Merge từng PR vào `main`

**Hoặc merge trực tiếp qua terminal (nhóm trưởng):**

```bash
# Chuyển về branch main
git checkout main

# Merge từng branch
git merge buiductai
git merge nguyenthanhtruc
git merge lehuynhyennhi
git merge phamthinhi

# Push main lên GitHub
git push origin main
```

---

## 🌍 Bước 8: Deploy lên Netlify (miễn phí)

### Cách 1: Kéo thả (nhanh nhất - không cần tài khoản)
1. Vào https://app.netlify.com/drop
2. Kéo thả **toàn bộ thư mục** `phuclong-website` vào trang
3. Netlify tự tạo link kiểu `random-name.netlify.app`
4. Copy link → nộp cho GV

### Cách 2: Kết nối GitHub (auto deploy - chuyên nghiệp hơn)
1. Đăng ký tài khoản Netlify tại https://netlify.com (dùng GitHub để đăng nhập)
2. Click **Add new site** → **Import an existing project**
3. Chọn **GitHub** → chọn repo `phuclong-website`
4. Branch: `main` | Build command: *(để trống)* | Publish directory: `.`
5. Click **Deploy site**
6. Netlify tự deploy, mỗi lần push vào `main` sẽ tự cập nhật

> 

### Đổi tên domain (tuỳ chọn):
- Vào **Site settings** → **Change site name**
- Đặt tên: `phuclong-nhom` → link sẽ là `phuclong-nhom.netlify.app`

---

## ⚡ Lệnh Git thường dùng

```bash
# Xem trạng thái
git status

# Xem lịch sử commit
git log --oneline

# Cập nhật code mới nhất từ GitHub
git pull origin main

# Xem tất cả branch
git branch -a

# Chuyển branch
git checkout [tên-branch]

# Xem thay đổi
git diff
```

---

## 🚨 Lưu ý quan trọng

- ⚠️ **Không push thẳng vào `main`** — luôn làm trên branch cá nhân (`buiductai`, `nguyenthanhtruc`, `lehuynhyennhi`, `phamthinhi`)
- ⚠️ **Commit thường xuyên** — mỗi khi hoàn thành 1 tính năng
- ⚠️ **Message commit rõ ràng** — GV có thể xem log để chấm điểm đóng góp
- ⚠️ **Thành viên không có commit** = **0 điểm** (theo quy định môn học)
- ⚠️ **File JS dùng chung** (`main.js`, `auth.js`, `cart.js`, `orders.js`) — chỉ người phụ trách sửa, người khác cần thay đổi thì báo trước để tránh conflict
- ✅ **Repo phải để Public** trên GitHub

---
