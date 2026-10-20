# NHẬT KÝ PROMPT ENGINEERING (VIBE CODING LOG)
**Họ và tên:** Trần Quốc Quang  
**MSSV:** 125000463  
**Tên đề tài Website:** Sức Khỏe Con Người & TeleHealth AI (Healthy Life)  
**Công cụ AI đã sử dụng:** Gemini, Antigravity

## 1. Yêu cầu ban đầu (System/Initial Prompt)
> "Bạn là một kĩ sư thiết kế web: tạo cho tôi một trang web với chủ đề "Về Sức Khỏe Con Người" màu sắc chắc khỏe tươi sáng làm phù hợp với những yêu cầu (yêu cầu Semantic HTML, CSS Variables, AOS, Animate.css...)"

## 2. Quá trình tinh chỉnh & Giải quyết sự cố (Iteration)
### Lần 1: Dựng khung Semantic HTML & CSS Variable
- **Prompt đã dùng:** 
1 Bạn là một kĩ sư thiết kế web: tạo cho tôi một trang web với chủ đề "Về Sức Khỏe Con Người" màu sắc chắc khỏe tươi sáng làm phù hợp với những yêu cầu (yêu cầu Semantic HTML, CSS Variables, AOS, Animate.css...)
- **Kết quả AI tạo ra:** AI đã sinh ra bộ code sử dụng tốt màu Xanh dương đậm và Xanh lá mạ đúng yêu cầu "chắc khỏe, tươi sáng".Các hiệu ứng và thư viện nhẹ nhàng không chói mắt đúng yêu cầu. 
- **Nhận xét & Tinh chỉnh của SV:** AI đã tuân thủ đúng yêu cầu dùng 5 thẻ HTML5 ngữ nghĩa (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) và biến CSS (`:root`).

### Lần 2: Tích hợp thư viện Animate.css & AOS
- **Nhận xét:** AI tự động nhúng CDN chuẩn xác. Các thuộc tính `data-aos` và class `animate__animated` được thêm vào đúng chỗ. 
- **Kiểm tra hiệu ứng:** Tôi đã chạy thử và thấy hiệu ứng cuộn mượt mà, hover `:focus` của CSS thuần hoạt động tốt với bóng đổ (box-shadow).

### Lần 3: Tích hợp Avatar hiệu ứng sóng, Nút Cuộc gọi/Chat AI tự động & Ô chuyển màu khi di chuột
- **Prompt đã dùng:** "Tạo avarta thêm hiệu ứng, các nút cuộc gọi chat với AI tự động và các ô khi di chuột và có thể chuyển màu"
- **Kết quả AI tạo ra:**
  1. **Avatar Dr. Healthy AI:** Tích hợp hiệu ứng sóng âm lan tỏa đa tầng (`@keyframes pulseRing`), viền phát sáng gradient shifting, hiệu ứng 3D hover scale/rotate và chấm online nhấp nháy.
  2. **Bộ nút tương tác AI & Chat tự động:** 
     - 3 nút chức năng lớn: Chat với AI tự động, Cuộc gọi thoại AI (Voice Call với visualizer sóng âm thanh chuyển động) và Cuộc gọi Video AI (Video Call).
     - Khung chat nổi (Floating AI Chat Widget) với cơ chế trả lời tự động thông minh theo chủ đề sức khỏe, có hiệu ứng typing indicator và các nút gợi ý câu hỏi nhanh (Quick Chips).
     - Modal mô phỏng đàm thoại thoại và video trực quan có bộ đếm thời gian, nút tắt mic và kết thúc cuộc gọi.
  3. **Các ô đổi màu khi di chuột (Hover Color Shift):** 
     - Thiết kế Grid các chuyên mục sức khỏe (`.color-tile`) chuyển đổi màu nền sang các dải gradient rực rỡ riêng biệt (Xanh ngọc, Xanh biển, Tím hoàng hôn, Cam rực rỡ, Hồng năng động, Xanh ngọc aqua).
     - Toàn bộ văn bản, icon và bóng đổ neon đều biến đổi màu mượt mà với hiệu ứng phóng to icon khi hover.
### Lần 4: Tích hợp Hình ảnh cảm hứng sức khỏe, Khám Bác Sĩ Online, Hotline Tự Động 24/7, Chuẩn hóa Semantic HTML & Tối ưu Responsive (Desktop & Mobile)
- **Prompt đã dùng:** "tạo hình ảnh có cảm hứng sức khỏe .Tạo các cuộc gặp gỡ bác sĩ online.Khung chat AI và hostline tự động.Bạn hãy chỉnh Layout cân đối,layout tương thích tuy thiết bị nếu xem ví dụ như destktop điện thoại, sử dụng tốt Flexbox/Grid. UI/UX thẩm mỹ, có tính hoàn thiện cao và không lạm dụng thẻ <div>."
- **Kết quả AI tạo ra:**
  1. **Bộ sưu tập hình ảnh cảm hứng sống khỏe (`#inspiration`):** Tích hợp hình ảnh chất lượng cao về Dinh dưỡng xanh (Eat Clean), Yoga thiền định buổi sớm, Sức bền tim mạch ngoài thiên nhiên; sử dụng semantic `<figure>` và `<figcaption>` kết hợp hiệu ứng zoom 3D và thẻ mẹo sức khỏe hữu ích.
  2. **Gặp gỡ Bác Sĩ Online (`#telehealth`):**
     - Thiết kế hồ sơ bác sĩ chuyên khoa (`<article class="doctor-card">`) với ảnh chân dung xác thực, số năm kinh nghiệm, đánh giá sao, khung giờ trống (`<time>`) và các nút đặt lịch / video call tức thì.
     - Modal đặt lịch khám trực tuyến với form Semantic (`<form>`, `<fieldset>`, `<legend>`, `<select>`) có khả năng tự động tạo mã phòng khám video (`#MED-2026-ONLINE`).
  3. **Tổng đài Hotline tự động 24/7 (`1800 6868`):**
     - Tích hợp thanh hotline đầu trang và banner khẩn cấp với số tổng đài miễn cước 24/7.
     - Modal mô phỏng tổng đài IVR tự động thông minh: bấm các phím số (1: Cấp cứu, 2: Dinh dưỡng, 3: Đặt lịch, 4: Gặp AI, 0: Menu) cho phép tương tác trực tiếp với âm phản hồi thời gian thực.
  4. **Khung Chat AI & Trợ lý ảo:** Chuyển sang thẻ ngữ nghĩa `<aside id="ai-chat-aside">`, tối ưu độ mượt mà, phản hồi tự động thông minh và tích hợp gọi nhanh Hotline / Bác sĩ.
  5. **Tối ưu Layout Flexbox/Grid & Tránh lạm dụng thẻ `<div>`:**
     - Thay thế triệt để các thẻ `<div>` dư thừa bằng hệ thống thẻ HTML5 chuẩn mực: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<figcaption>`, `<aside>`, `<address>`, `<time>`, `<form>`, `<fieldset>`, `<legend>`, `<footer>`.
     - Sử dụng CSS Grid linh hoạt (`grid-template-columns: repeat(auto-fit, minmax(...))`) kết hợp Flexbox cân đối.
     - Responsive toàn diện từ Desktop (màn hình lớn), Laptop, Tablet (iPad) đến Điện thoại di động (iPhone/Android), không có lỗi tràn viền ngang, kích thước nút đạt chuẩn cảm ứng (tối thiểu 44px).

### Lần 5: Tinh chỉnh tối ưu Animate.css, AOS.css chuyển động êm dịu & Loại bỏ mục dư thừa trên Menu
- **Prompt đã dùng:** "Tích hợp thành công Animate.css và AOS.css đúng cách.Hiệu ứng chuyển động mượt mà, không lạm dụng gây rối mắt.bỏ đi các phần dư thừa như trên thanh menu có 'chuyên mục đổi màu' xóa đi cột này ở thành menu còn nội dung của nó giữ nguyên"
- **Kết quả AI tạo ra:**
  1. **Tối ưu hóa Animate.css:**
     - Thiết lập biến toàn cục `--animate-duration: 0.8s;` và `--animate-delay: 0.15s;` trong `:root` để chuyển động xuất hiện dịu mắt, tránh hiệu ứng giật hay quá nhanh.
     - Tinh chỉnh Hero Section chuyển từ hiệu ứng phóng to đột ngột sang `animate__fadeIn` và `animate__fadeInUp` nhẹ nhàng, tinh tế.
  2. **Chuẩn hóa AOS (Animate On Scroll):**
     - Đồng bộ hóa các section về hiệu ứng lướt nhẹ từ dưới lên (`data-aos="fade-up"`), loại bỏ các hiệu ứng `zoom-in` và `fade-right` gây xê dịch khung nhìn khi cuộn trên di động.
     - Cấu hình `AOS.init()` hoàn hảo: `duration: 800`, `easing: 'ease-out-cubic'`, `once: true`, `offset: 70` giúp trải nghiệm cuộn mượt mà tự nhiên, không bị giật lag hay nhấp nháy khi cuộn ngược.
  3. **Lược bỏ mục dư thừa trên Menu điều hướng:**
     - Xóa liên kết `"Chuyên mục đổi màu"` khỏi thanh điều hướng `<nav>` ở `<header>`, tạo sự cân đối, tinh gọn và chuyên nghiệp (chỉ giữ lại 6 mục trọng tâm: Trang chủ, Trợ lý AI, Bác sĩ Online, Cảm hứng sống khỏe, Dinh dưỡng, Vận động).
     - Giữ nguyên 100% nội dung và hiệu ứng chuyển đổi màu sắc của 6 ô thẻ bài viết trong khu vực chuyên môn (`#topics`).
- **Nhận xét & Tinh chỉnh của SV:** Menu trở nên thoáng đãng, hiệu ứng động đạt độ chín về thị giác, trang web hoạt động mượt mà và đẳng cấp hơn hẳn.

## 3. Đánh giá cá nhân về quá trình Vibe Coding
- AI đã giúp tôi tiết kiệm 85% thời gian trong việc xây dựng hệ thống TeleHealth, cấu trúc Layout Responsive đa thiết bị và viết code Semantic HTML chuẩn SEO.
- Bài học rút ra: Việc liên tục tinh chỉnh (Iterative Prompting) cùng yêu cầu thẩm mỹ UI/UX cao và tiêu chuẩn lập trình khắt khe (Semantic HTML, không lạm dụng `<div>`) giúp sản phẩm đạt chất lượng tương đương sản phẩm thực tế của các nền tảng y tế hàng đầu.
