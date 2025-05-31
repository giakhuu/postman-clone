/**
Dựa trên cấu trúc thư mục của bạn, cách phân chia folder trong thư mục components như sau:

components/layout/: Chứa các thành phần layout dùng chung như CustomDrawerContent, HeaderRight, index (có thể là layout tổng).
components/molecules/: Chứa các component nhỏ, có thể tái sử dụng, ví dụ CustomButton, Request/Tag, Tips/QuickTip.
components/organism/: Chứa các component lớn hơn, kết hợp nhiều molecules lại
components/ui: chứa các ui cơ bản được custom lại: ui/Button, ui/Icon, ui/Text, ui/index.
Cách phân chia này tuân theo mô hình Atomic Design:

Molecules: Thành phần nhỏ, tái sử dụng.
Organism: Thành phần lớn hơn, kết hợp nhiều molecules.
Layout: Các thành phần bố cục tổng thể.
Nếu bạn cần mô tả chi tiết hơn hoặc ví dụ cụ thể cho từng loại, hãy cho biết!
*/