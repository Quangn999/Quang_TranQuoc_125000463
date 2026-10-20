// ==========================================================================
// TRỢ LÝ SỨC KHỎE AI, ĐẶT LỊCH BÁC SĨ ONLINE & TỔNG ĐÀI HOTLINE TỰ ĐỘNG
// Họ tên SV: Trần Quốc Quang - MSSV: 125000463
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. DỮ LIỆU CÂU TRẢ LỜI CỦA AI TỰ ĐỘNG (KNOWLEDGE BASE)
    // ----------------------------------------------------------------------
    const aiKnowledgeBase = {
        greetings: [
            "Xin chào bạn! Tôi là Trợ Lý Sức Khỏe AI 24/7. Tôi có thể hỗ trợ bạn tư vấn dinh dưỡng, bài tập vận động, giấc ngủ, kết nối Hotline hoặc đặt lịch gặp bác sĩ online. Bạn cần giúp gì hôm nay?",
            "Chào bạn! Rất vui được đồng hành cùng bạn trên hành trình chăm sóc sức khỏe. Hôm nay cơ thể bạn cảm thấy thế nào?"
        ],
        nutrition: [
            "🥦 **Lời khuyên Dinh Dưỡng:** Hãy áp dụng quy tắc đĩa ăn cân bằng: 50% rau củ quả tươi, 25% protein nạc (ức gà, cá, trứng, đậu), và 25% tinh bột chuyển hóa chậm (gạo lứt, khoai lang, yến mạch). Uống đủ nước và hạn chế đồ ngọt nhé!",
            "🥗 **Dinh dưỡng lành mạnh:** Ưu tiên thực phẩm nguyên bản, giảm thiểu đồ chế biến sẵn. Bổ sung các loại hạt (hạnh nhân, óc chó) và chất béo tốt từ quả bơ để tăng cường sức khỏe tim mạch."
        ],
        water: [
            "💧 **Công thức uống nước chuẩn:** Lượng nước khuyến nghị = [Cân nặng (kg) x 40ml]. Ví dụ: Bạn nặng 55kg thì cần uống ~2.2 lít nước/ngày. Hãy chia nhỏ uống đều trong ngày, đừng đợi khát mới uống nhé!",
            "💧 **Mẹo uống nước:** Uống 1 ly nước ấm ngay sau khi thức dậy để kích hoạt tuần hoàn và thanh lọc hệ tiêu hóa."
        ],
        fitness: [
            "🏃‍♂️ **Kế hoạch Vận Động:** Bạn nên dành ít nhất 30 phút mỗi ngày cho bài tập vừa sức (chạy bộ nhẹ, đạp xe, bơi lội). Kết hợp 2 buổi tập kháng lực/tuần để cơ bắp săn chắc và duy trì chỉ số BMI lý tưởng!",
            "💪 **Vận động văn phòng:** Nếu ngồi nhiều, hãy đứng dậy vươn vai và đi lại mỗi 45 phút. 15 phút tập HIIT hoặc plank mỗi sáng cũng giúp kích thích trao đổi chất rất tốt."
        ],
        sleep: [
            "😴 **Cải thiện Giấc Ngủ:** Cố gắng ngủ đủ 7-8 tiếng mỗi đêm. Tắt màn hình điện tử trước khi ngủ 30 phút, giữ phòng tối và mát mẻ (khoảng 23-25°C). Bạn có thể uống một tách trà hoa cúc ấm để dễ ngủ hơn.",
            "🌙 **Giấc ngủ sâu:** Thiết lập giờ đi ngủ và thức dậy cố định. Tránh dùng caffeine sau 2 giờ chiều và không ăn quá no sát giờ ngủ."
        ],
        stress: [
            "🧘 **Giải tỏa Căng Thẳng:** Hãy thử kỹ thuật thở 4-7-8: Hít vào sâu qua mũi 4 giây, giữ hơi 7 giây, và thở từ từ qua miệng 8 giây. Lặp lại 4 chu kỳ để nhịp tim ổn định và xoa dịu thần kinh.",
            "🌿 **Thư giãn tinh thần:** Hãy dành 15 phút thiền định hoặc nghe nhạc sóng não nhẹ nhàng. Hòa mình vào thiên nhiên là phương thuốc giảm stress tự nhiên tuyệt vời."
        ],
        doctor: [
            "👨‍⚕️ **Gặp bác sĩ trực tuyến:** Bạn có thể kéo đến phần **'Gặp Gỡ Bác Sĩ Online'** trên trang web hoặc bấm nút **'Đặt Lịch Khám'** để chọn bác sĩ chuyên khoa tim mạch, dinh dưỡng, thể chất phù hợp nhé!",
            "🩺 **Tư vấn chuyên sâu:** Đội ngũ bác sĩ của HealthyLife luôn sẵn sàng khám bệnh qua video call bảo mật. Bạn hãy đặt lịch ngay trên website nhé!"
        ],
        hotline: [
            "📞 **Hotline Tự Động 24/7:** Tổng đài khẩn cấp và tư vấn sức khỏe miễn cước của chúng tôi là **1800 6868**. Bạn có thể bấm nút 'Gọi Hotline' trên màn hình để kết nối ngay lập tức!",
        ],
        default: [
            "Cảm ơn bạn đã chia sẻ! Để có sức khỏe tối ưu, việc kết hợp giữa dinh dưỡng cân bằng, tập luyện 30 phút/ngày và ngủ đủ 7-8 tiếng là chìa khóa vàng. Bạn có muốn kết nối bác sĩ chuyên khoa hay hỏi thêm về chủ đề nào không?",
            "AI Health Assistant đã ghi nhận câu hỏi của bạn. Lối sống lành mạnh bắt đầu từ những thói quen nhỏ nhất mỗi ngày. Hãy thử các gợi ý nhanh bên dưới để tìm hiểu thêm nhé!"
        ]
    };

    // ----------------------------------------------------------------------
    // 2. CÁC PHẦN TỬ GIAO DIỆN CHÍNH
    // ----------------------------------------------------------------------
    // Widget Chat AI
    const chatWidget = document.getElementById('ai-chat-widget');
    const chatToggleBtn = document.getElementById('chat-toggle-btn');
    const closeChatBtn = document.getElementById('close-chat-btn');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendChatBtn = document.getElementById('send-chat-btn');
    const quickChips = document.querySelectorAll('.chip-btn');
    const openChatDirectBtns = document.querySelectorAll('.open-chat-trigger');

    // Cuộc gọi thoại & video AI
    const voiceCallModal = document.getElementById('voice-call-modal');
    const videoCallModal = document.getElementById('video-call-modal');
    const startVoiceCallBtns = document.querySelectorAll('.start-voice-call');
    const startVideoCallBtns = document.querySelectorAll('.start-video-call');
    const endVoiceCallBtn = document.getElementById('end-voice-call');
    const endVideoCallBtn = document.getElementById('end-video-call');
    const muteVoiceBtn = document.getElementById('mute-voice-call');
    const voiceTimerElem = document.getElementById('voice-timer');
    const videoTimerElem = document.getElementById('video-timer');

    // Tổng đài Hotline tự động
    const hotlineModal = document.getElementById('hotline-modal');
    const openHotlineBtns = document.querySelectorAll('.open-hotline-trigger');
    const closeHotlineBtn = document.getElementById('close-hotline-btn');
    const hotlineTimerElem = document.getElementById('hotline-timer');
    const keypadButtons = document.querySelectorAll('.keypad-btn');
    const hotlineStatusText = document.getElementById('hotline-status-text');

    // Đặt lịch bác sĩ Online
    const bookingModal = document.getElementById('booking-modal');
    const openBookingBtns = document.querySelectorAll('.open-booking-trigger');
    const closeBookingBtn = document.getElementById('close-booking-btn');
    const bookingForm = document.getElementById('doctor-booking-form');
    const bookingDoctorSelect = document.getElementById('booking-doctor-select');
    const bookingSuccessAlert = document.getElementById('booking-success-alert');

    // Biến trạng thái
    let voiceInterval = null;
    let videoInterval = null;
    let hotlineInterval = null;
    let voiceSeconds = 0;
    let videoSeconds = 0;
    let hotlineSeconds = 0;
    let isMuted = false;

    // ----------------------------------------------------------------------
    // 3. LOGIC CHATBOT AI TỰ ĐỘNG
    // ----------------------------------------------------------------------
    function openChat() {
        if (!chatWidget) return;
        chatWidget.classList.add('active');
        if (chatInput) chatInput.focus();
        const badge = document.querySelector('.chat-badge');
        if (badge) badge.style.display = 'none';
    }

    function closeChat() {
        if (!chatWidget) return;
        chatWidget.classList.remove('active');
    }

    if (chatToggleBtn) {
        chatToggleBtn.addEventListener('click', () => {
            if (chatWidget.classList.contains('active')) {
                closeChat();
            } else {
                openChat();
            }
        });
    }

    if (closeChatBtn) closeChatBtn.addEventListener('click', closeChat);

    openChatDirectBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openChat();
        });
    });

    function addMessage(sender, text) {
        if (!chatMessages) return;
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}-message animate__animated animate__fadeInUp`;
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        if (sender === 'ai') {
            msgDiv.innerHTML = `
                <div class="msg-avatar">
                    <i class="fa-solid fa-robot"></i>
                </div>
                <div class="msg-content">
                    <div class="msg-bubble">${formatMarkdown(text)}</div>
                    <span class="msg-time">${time} • Dr. Healthy AI</span>
                </div>
            `;
        } else {
            msgDiv.innerHTML = `
                <div class="msg-content">
                    <div class="msg-bubble">${escapeHtml(text)}</div>
                    <span class="msg-time">${time} • Bạn</span>
                </div>
                <div class="msg-avatar user">
                    <i class="fa-solid fa-user"></i>
                </div>
            `;
        }

        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function showTypingIndicator() {
        if (!chatMessages) return;
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message ai-message typing-indicator-msg';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `
            <div class="msg-avatar">
                <i class="fa-solid fa-robot"></i>
            </div>
            <div class="msg-content">
                <div class="typing-bubble">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            </div>
        `;
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function removeTypingIndicator() {
        const typing = document.getElementById('typing-indicator');
        if (typing) typing.remove();
    }

    function getAiResponse(userText) {
        const text = userText.toLowerCase();

        if (text.includes('chào') || text.includes('hello') || text.includes('hi') || text.includes('ai ơi')) {
            return getRandom(aiKnowledgeBase.greetings);
        }
        if (text.includes('dinh dưỡng') || text.includes('ăn') || text.includes('thực đơn') || text.includes('rau') || text.includes('calo')) {
            return getRandom(aiKnowledgeBase.nutrition);
        }
        if (text.includes('nước') || text.includes('uống') || text.includes('lít')) {
            return getRandom(aiKnowledgeBase.water);
        }
        if (text.includes('tập') || text.includes('thể dục') || text.includes('chạy') || text.includes('cardio') || text.includes('gym') || text.includes('giảm cân')) {
            return getRandom(aiKnowledgeBase.fitness);
        }
        if (text.includes('ngủ') || text.includes('mất ngủ') || text.includes('giấc ngủ')) {
            return getRandom(aiKnowledgeBase.sleep);
        }
        if (text.includes('stress') || text.includes('căng thẳng') || text.includes('mệt') || text.includes('thư giãn') || text.includes('thiền')) {
            return getRandom(aiKnowledgeBase.stress);
        }
        if (text.includes('bác sĩ') || text.includes('khám') || text.includes('hẹn') || text.includes('đặt lịch')) {
            return getRandom(aiKnowledgeBase.doctor);
        }
        if (text.includes('hotline') || text.includes('tổng đài') || text.includes('gọi') || text.includes('số điện thoại')) {
            return getRandom(aiKnowledgeBase.hotline);
        }

        return getRandom(aiKnowledgeBase.default);
    }

    function handleUserSend(textToSend) {
        const text = textToSend || (chatInput ? chatInput.value.trim() : '');
        if (!text) return;

        addMessage('user', text);
        if (chatInput) chatInput.value = '';

        showTypingIndicator();

        const delay = Math.floor(Math.random() * 300) + 500;
        setTimeout(() => {
            removeTypingIndicator();
            const reply = getAiResponse(text);
            addMessage('ai', reply);
        }, delay);
    }

    if (sendChatBtn) {
        sendChatBtn.addEventListener('click', () => handleUserSend());
    }

    if (chatInput) {
        chatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleUserSend();
            }
        });
    }

    quickChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const prompt = chip.getAttribute('data-prompt') || chip.innerText.trim();
            handleUserSend(prompt);
        });
    });

    // ----------------------------------------------------------------------
    // 4. LOGIC MÔ PHỎNG TỔNG ĐÀI HOTLINE TỰ ĐỘNG 24/7 (IVR HOTLINE)
    // ----------------------------------------------------------------------
    const ivrResponses = {
        '1': "🚨 **Phím 1 - Cấp cứu y tế & Kết nối bác sĩ trực:** Hệ thống đang ưu tiên chuyển tiếp cuộc gọi của bạn đến Bác sĩ trực ban khẩn cấp...",
        '2': "🥗 **Phím 2 - Hướng dẫn Dinh dưỡng tự động:** Để thanh lọc cơ thể, hãy bổ sung 500g rau xanh lá đậm, uống đủ 2-2.5 lít nước ấm và hạn chế thức ăn nhiều muối/dầu mỡ.",
        '3': "📅 **Phím 3 - Đặt lịch khám trực tuyến:** Hệ thống đã mở khung đặt lịch. Vui lòng chọn bác sĩ và thời gian bạn mong muốn trên màn hình.",
        '4': "🤖 **Phím 4 - Gặp Trợ Lý Sức Khỏe AI:** Bác sĩ AI đang lắng nghe bạn. Bạn có thể mở khung chat trên màn hình để đặt câu hỏi chi tiết.",
        '0': "🔙 **Phím 0 - Quay lại menu chính:** Xin vui lòng bấm Phím 1 (Cấp cứu), Phím 2 (Dinh dưỡng), Phím 3 (Đặt lịch) hoặc Phím 4 (Hỏi AI)."
    };

    function startHotline() {
        closeChat();
        if (!hotlineModal) return;
        hotlineModal.classList.add('active');
        hotlineSeconds = 0;
        updateTimerDisplay(hotlineTimerElem, hotlineSeconds);
        if (hotlineStatusText) {
            hotlineStatusText.textContent = "Đang kết nối Tổng Đài Y Tế Tự Động...";
        }

        clearInterval(hotlineInterval);
        hotlineInterval = setInterval(() => {
            hotlineSeconds++;
            updateTimerDisplay(hotlineTimerElem, hotlineSeconds);
            if (hotlineSeconds === 2 && hotlineStatusText) {
                hotlineStatusText.textContent = "🔊 Tổng đài đã sẵn sàng. Vui lòng bấm phím chọn dịch vụ!";
            }
        }, 1000);
    }

    function closeHotline() {
        if (!hotlineModal) return;
        hotlineModal.classList.remove('active');
        clearInterval(hotlineInterval);
    }

    openHotlineBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            startHotline();
        });
    });

    if (closeHotlineBtn) closeHotlineBtn.addEventListener('click', closeHotline);

    keypadButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const digit = btn.getAttribute('data-digit');
            if (hotlineStatusText && digit && ivrResponses[digit]) {
                hotlineStatusText.innerHTML = ivrResponses[digit];
                btn.classList.add('pressed');
                setTimeout(() => btn.classList.remove('pressed'), 250);

                if (digit === '3') {
                    setTimeout(() => {
                        closeHotline();
                        openBooking();
                    }, 1200);
                } else if (digit === '4') {
                    setTimeout(() => {
                        closeHotline();
                        openChat();
                    }, 1200);
                }
            }
        });
    });

    // ----------------------------------------------------------------------
    // 5. LOGIC ĐẶT LỊCH GẶP BÁC SĨ ONLINE (TELEHEALTH BOOKING)
    // ----------------------------------------------------------------------
    function openBooking(doctorName = '') {
        if (!bookingModal) return;
        bookingModal.classList.add('active');
        if (bookingSuccessAlert) bookingSuccessAlert.style.display = 'none';

        if (doctorName && bookingDoctorSelect) {
            for (let option of bookingDoctorSelect.options) {
                if (option.text.includes(doctorName) || option.value.includes(doctorName)) {
                    option.selected = true;
                    break;
                }
            }
        }
    }

    function closeBooking() {
        if (!bookingModal) return;
        bookingModal.classList.remove('active');
    }

    openBookingBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const doctor = btn.getAttribute('data-doctor') || '';
            openBooking(doctor);
        });
    });

    if (closeBookingBtn) closeBookingBtn.addEventListener('click', closeBooking);

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = bookingForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang tạo phòng khám...';
            }

            setTimeout(() => {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Xác Nhận Đặt Lịch';
                }
                if (bookingSuccessAlert) {
                    bookingSuccessAlert.style.display = 'block';
                    bookingSuccessAlert.scrollIntoView({ behavior: 'smooth' });
                }
                bookingForm.reset();
            }, 800);
        });
    }

    // ----------------------------------------------------------------------
    // 6. LOGIC MÔ PHỎNG CUỘC GỌI THOẠI & VIDEO AI
    // ----------------------------------------------------------------------
    function startVoiceCall() {
        closeChat();
        if (!voiceCallModal) return;
        voiceCallModal.classList.add('active');
        voiceSeconds = 0;
        isMuted = false;
        if (muteVoiceBtn) {
            muteVoiceBtn.innerHTML = '<i class="fa-solid fa-microphone"></i>';
            muteVoiceBtn.classList.remove('muted');
        }
        
        updateTimerDisplay(voiceTimerElem, voiceSeconds);
        clearInterval(voiceInterval);
        voiceInterval = setInterval(() => {
            voiceSeconds++;
            updateTimerDisplay(voiceTimerElem, voiceSeconds);
        }, 1000);

        const soundwave = document.querySelector('.soundwave-box');
        if (soundwave) soundwave.classList.add('active-call');
    }

    function endVoiceCall() {
        if (!voiceCallModal) return;
        voiceCallModal.classList.remove('active');
        clearInterval(voiceInterval);
        const soundwave = document.querySelector('.soundwave-box');
        if (soundwave) soundwave.classList.remove('active-call');
    }

    startVoiceCallBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            startVoiceCall();
        });
    });

    if (endVoiceCallBtn) endVoiceCallBtn.addEventListener('click', endVoiceCall);

    if (muteVoiceBtn) {
        muteVoiceBtn.addEventListener('click', () => {
            isMuted = !isMuted;
            if (isMuted) {
                muteVoiceBtn.innerHTML = '<i class="fa-solid fa-microphone-slash"></i>';
                muteVoiceBtn.classList.add('muted');
            } else {
                muteVoiceBtn.innerHTML = '<i class="fa-solid fa-microphone"></i>';
                muteVoiceBtn.classList.remove('muted');
            }
        });
    }

    function startVideoCall() {
        closeChat();
        if (!videoCallModal) return;
        videoCallModal.classList.add('active');
        videoSeconds = 0;
        updateTimerDisplay(videoTimerElem, videoSeconds);
        clearInterval(videoInterval);
        videoInterval = setInterval(() => {
            videoSeconds++;
            updateTimerDisplay(videoTimerElem, videoSeconds);
        }, 1000);
    }

    function endVideoCall() {
        if (!videoCallModal) return;
        videoCallModal.classList.remove('active');
        clearInterval(videoInterval);
    }

    startVideoCallBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            startVideoCall();
        });
    });

    if (endVideoCallBtn) endVideoCallBtn.addEventListener('click', endVideoCall);

    // ----------------------------------------------------------------------
    // 7. TIỆN ÍCH HỖ TRỢ (HELPERS)
    // ----------------------------------------------------------------------
    function updateTimerDisplay(elem, totalSeconds) {
        if (!elem) return;
        const mins = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
        const secs = String(totalSeconds % 60).padStart(2, '0');
        elem.textContent = `${mins}:${secs}`;
    }

    function getRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function formatMarkdown(text) {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>');
    }

    // ----------------------------------------------------------------------
    // 8. LOGIC CHI TIẾT CẢM HỨNG SỨC KHỎE (INTERACTIVE INSPIRATION MODAL)
    // ----------------------------------------------------------------------
    const inspirationData = {
        nutrition: {
            tag: "Dinh Dưỡng Tươi Mới (Eat Clean)",
            icon: "fa-leaf",
            title: "Dinh Dưỡng Xanh & Thải Độc Cơ Thể Tự Nhiên",
            image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
            quote: "«Thực phẩm bạn ăn mỗi ngày chính là liều thuốc chữa lành và tái tạo tế bào tự nhiên nhất.»",
            benefits: [
                "Cung cấp dồi dào chất chống oxy hóa (Flavonoid, Carotenoid) giúp làm chậm lão hóa và thanh lọc đường ruột.",
                "Giảm áp lực chuyển hóa lên gan và thận, ổn định chỉ số đường huyết tự nhiên.",
                "Cân bằng hệ vi sinh đường ruột (Microbiome), tăng cường 70% sức đề kháng của hệ miễn dịch."
            ],
            schedule: [
                "<strong>06:30 - Thức dậy:</strong> Uống 300ml nước ấm chanh hoặc hạt chia đánh thức hệ tiêu hóa.",
                "<strong>07:30 - Bữa sáng:</strong> Cháo yến mạch ngũ cốc kết hợp quả bơ, chuối chín và hạt óc chó.",
                "<strong>12:00 - Bữa trưa:</strong> Đĩa ăn theo tỷ lệ vàng: 50% rau xanh hấp, 25% ức gà hoặc cá hồi áp chảo, 25% gạo lứt.",
                "<strong>15:30 - Bữa phụ:</strong> 1 hộp sữa chua Hy Lạp ít đường hoặc 1 nắm nhỏ hạt hạnh nhân.",
                "<strong>18:30 - Bữa tối:</strong> Salad cầu vồng đa sắc kết hợp đậu hũ nướng hoặc súp rau củ ấm."
            ],
            mistakes: "Lạm dụng nước ép đóng chai chứa nhiều đường tinh luyện; cắt bỏ tinh bột đột ngột gây hạ đường huyết và rụng tóc.",
            aiPrompt: "Hãy tư vấn cho tôi thực đơn Eat Clean 7 ngày thanh lọc cơ thể chi tiết"
        },
        yoga: {
            tag: "Thiền Định & Yoga",
            icon: "fa-spa",
            title: "Cân Bằng Thân - Tâm - Trí Cùng Yoga & Hơi Thở",
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
            quote: "«Yoga không chỉ là uốn dẻo cơ thể, mà là nghệ thuật lắng nghe và hòa hợp với chính tâm hồn bạn.»",
            benefits: [
                "Giải tỏa áp lực đĩa đệm và đốt sống cổ lưng sau nhiều giờ ngồi làm việc văn phòng.",
                "Điều hòa hệ thần kinh phó giao cảm, hạ nhanh hormone căng thẳng Cortisol trong vòng 20 phút.",
                "Tăng cường lưu thông oxy lên não, cải thiện rõ rệt chứng mất ngủ và đau đầu mãn tính."
            ],
            schedule: [
                "<strong>06:00 - Tĩnh tâm:</strong> 5 phút ngồi thẳng lưng, hít thở sâu theo kỹ thuật nhịp thở 4-7-8.",
                "<strong>06:05 - Khởi động khớp:</strong> Chuỗi động tác Mèo - Bò (Cat-Cow) giải phóng căng cứng cột sống.",
                "<strong>06:15 - Tăng cường sức mạnh:</strong> Tư thế Chiến Binh (Warrior) và Cây Cầu (Bridge Pose) củng cố cơ cốt lõi.",
                "<strong>06:25 - Thư giãn sâu:</strong> Tư thế Xác Chết (Savasana) thả lỏng toàn diện từ đỉnh đầu đến gót chân."
            ],
            mistakes: "Cố ép khớp vượt quá giới hạn dẻo tự nhiên; nín thở khi giữ động tác thay vì duy trì hơi thở đều đặn.",
            aiPrompt: "Hướng dẫn các bài tập yoga 15 phút chữa đau mỏi cổ vai gáy cho dân văn phòng"
        },
        cardio: {
            tag: "Sức Bền & Tim Mạch",
            icon: "fa-person-running",
            title: "Rèn Luyện Tim Mạch & Đánh Thức Nguồn Năng Lượng",
            image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=900&q=80",
            quote: "«Một trái tim khỏe mạnh là động cơ bền bỉ nhất để bạn chinh phục mọi ước mơ cuộc sống.»",
            benefits: [
                "Tăng thể tích nhát bóp của tim, giảm 40% nguy cơ hình thành mảng xơ vữa động mạch.",
                "Phóng thích ồ ạt Endorphin ('hormone hạnh phúc') giúp đánh tan cảm giác mệt mỏi và uể oải.",
                "Duy trì chỉ số trao đổi chất (BMR) ở mức cao, đốt cháy calo ngay cả khi cơ thể đã nghỉ ngơi."
            ],
            schedule: [
                "<strong>5 phút đầu:</strong> Xoay nhẹ nhàng các khớp cổ chân, gối, hông và đi bộ nhanh làm ấm cơ thể.",
                "<strong>20 phút nhịp tim vùng 2:</strong> Chạy bộ bước ngắn hoặc đạp xe với tốc độ vừa phải, vẫn nói chuyện được.",
                "<strong>5 phút biến tốc (HIIT nhẹ):</strong> Tăng tốc 30 giây rồi chạy chậm hồi phục 60 giây (lặp lại 3 chu kỳ).",
                "<strong>5 phút hạ nhiệt:</strong> Đi bộ chậm thả lỏng nhịp tim và ép giãn cơ đùi trước, bắp chân."
            ],
            mistakes: "Bỏ qua bước khởi động kỹ; tiếp đất bằng gót chân quá mạnh gây chấn thương khớp gối; không bù đủ nước điện giải.",
            aiPrompt: "Lập cho tôi lịch chạy bộ cho người mới bắt đầu từ 0 đến 5km không bị đuối sức"
        }
    };

    const inspirationModal = document.getElementById('inspiration-modal');
    const closeInspirationBtn = document.getElementById('close-inspiration-btn');
    const modalInspireTag = document.getElementById('modal-inspire-tag');
    const modalInspireImg = document.getElementById('modal-inspire-img');
    const modalInspireTitle = document.getElementById('modal-inspire-title');
    const modalInspireQuote = document.getElementById('modal-inspire-quote');
    const modalInspireBenefits = document.getElementById('modal-inspire-benefits');
    const modalInspireSchedule = document.getElementById('modal-inspire-schedule');
    const modalInspireMistakes = document.getElementById('modal-inspire-mistakes');
    const modalAskAiBtn = document.getElementById('modal-ask-ai-btn');

    let currentInspireAiPrompt = "";

    function openInspirationModal(topicKey) {
        const data = inspirationData[topicKey];
        if (!data || !inspirationModal) return;

        modalInspireTag.innerHTML = `<i class="fa-solid ${data.icon}"></i> ${data.tag}`;
        modalInspireImg.src = data.image;
        modalInspireTitle.textContent = data.title;
        modalInspireQuote.textContent = data.quote;

        // Đổ danh sách lợi ích
        modalInspireBenefits.innerHTML = data.benefits.map(b => `<li>${b}</li>`).join('');

        // Đổ lịch trình thực hành
        modalInspireSchedule.innerHTML = data.schedule.map(s => `<div class="schedule-step">${s}</div>`).join('');

        // Đổ lưu ý
        modalInspireMistakes.textContent = data.mistakes;

        currentInspireAiPrompt = data.aiPrompt;

        inspirationModal.classList.add('active');
    }

    function closeInspirationModal() {
        if (!inspirationModal) return;
        inspirationModal.classList.remove('active');
    }

    // Gắn sự kiện click cho các thẻ Cảm hứng sức khỏe
    const inspireCards = document.querySelectorAll('.inspire-card');
    inspireCards.forEach(card => {
        card.addEventListener('click', () => {
            const topic = card.getAttribute('data-topic');
            if (topic) openInspirationModal(topic);
        });

        // Hỗ trợ phím Enter / Space khi focus
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const topic = card.getAttribute('data-topic');
                if (topic) openInspirationModal(topic);
            }
        });
    });

    if (closeInspirationBtn) closeInspirationBtn.addEventListener('click', closeInspirationModal);

    // Bấm nút hỏi AI từ Modal Cảm hứng
    if (modalAskAiBtn) {
        modalAskAiBtn.addEventListener('click', () => {
            closeInspirationModal();
            openChat();
            if (currentInspireAiPrompt) {
                setTimeout(() => {
                    handleUserSend(currentInspireAiPrompt);
                }, 350);
            }
        });
    }

    // Đóng modal khi bấm ra ngoài hoặc nhấn ESC
    window.addEventListener('click', (e) => {
        if (e.target === inspirationModal) closeInspirationModal();
        if (e.target === bookingModal) closeBooking();
        if (e.target === hotlineModal) closeHotline();
        if (e.target === voiceCallModal) endVoiceCall();
        if (e.target === videoCallModal) endVideoCall();
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeInspirationModal();
            closeBooking();
            closeHotline();
            endVoiceCall();
            endVideoCall();
        }
    });
});
