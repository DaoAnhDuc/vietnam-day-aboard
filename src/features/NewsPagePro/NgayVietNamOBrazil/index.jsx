import React from "react";
import Footer from "../../HomePage/Footer/Footer";

const NgayVietNamOBrazil = () => {
  return (
    <div className="">
      {/* <img src="/images/Vietnam-Day-2022-Korea.jpg" alt="" /> */}
      <div className="container">
        <p className="mt-20 font-bold text-5xl text-center mb-10" style={{ fontFamily: "Philosopher", color: "#151748" }}>
          Giới thiệu về chương trình
        </p>
        <p className="text-center">Đang cập nhật</p>
        {/* <p>
          Là hoạt động mở đầu cho “Ngày Việt Nam tại Hàn Quốc 2022”, chương trình Giao lưu điện ảnh Việt Nam – Hàn Quốc đã khai mạc vào tối 2/12/2022 tại CGV Myeongdong Station Cinelibrary (Seoul). Để quảng bá hình ảnh đất nước và con người
          Việt Nam, Cục Điện ảnh đã lựa chọn những tác phẩm nổi bật của điện ảnh Việt để công chiếu trong hai ngày 3 – 4/12.
        </p>
        <p className="mt-3">
          Trong buổi khai mạc, chương trình đã vinh dự đón tiếp các vị đại biểu, khách quý: Đại sứ đặc mệnh toàn quyền Việt Nam tại Hàn Quốc Nguyễn Vũ Tùng, Chủ tịch Hội đồng điện ảnh Hàn Quốc (KOFIC) Park Ki Yong, Phó Chủ tịch Tập đoàn CJ
          Hee Kyung Jo Min, Tổng Giám đốc CGV Việt Nam Ko Jea Soo, Phó Cục trưởng Cục Điện ảnh (Bộ Văn hóa, Thể thao và Du lịch) Nguyễn Thị Thu Hà, đại diện Bộ Ngoại giao cùng nhiều khách mời khác.
        </p> */}
        {/* <button className="bg-red-600 text-white font-bold text-sm px-6 p-2 rounded w-fit mt-6">Xem chi tiết</button> */}
        <p className="mt-20 font-bold text-5xl text-center mb-4" style={{ fontFamily: "Philosopher", color: "#151748" }}>
          Nội dung chương trình
        </p>
        <div className="flex gap-6 justify-center">
          <p className="text-center">Địa điểm: RIO</p>
          <p className="text-center">Thời gian: từ ngày 15-17/11/2024</p>
        </div>
        <div className="mt-10">
          <table className="w-full" border={1} style={{ borderColor: "#f1f1f1" }}>
            <thead>
              <tr className="bg-red-600 text-white">
                <th className="h-12 text-left px-2">Thời gian dự kiến</th>
                <th className="h-12 text-left px-2">Nội dung</th>
                <th className="h-12 text-left px-2">Kịch bản chi tiết</th>
                <th className="h-12 text-left px-2">Đơn vị thực hiện</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2">
                  06/11 <br /> (hoặc có thể thay đổi theo lịch đoàn tiền trạm VPCP)
                </td>
                <td className="p-2">Đoàn BNG 1 rời HN</td>
                <td className="p-2">Sân bay Nội Bài</td>
                <td className="p-2">02 BNG</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2">07-10/11</td>
                <td className="p-2">Làm việc với địa điểm, công ty thuê trang thiết bị, xe vận chuyển... Giải quyết các vấn đề phát sinh</td>
                <td className="p-2"></td>
                <td className="p-2">02 BNG</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2">11/11</td>
                <td className="p-2">Làm thủ tục và Nhận hàng cargo</td>
                <td className="p-2"></td>
                <td className="p-2">02 BNG</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2">12-13/11</td>
                <td className="p-2">Rà soát lắp đặt tại Quỹ Thiên văn học</td>
                <td className="p-2"></td>
                <td className="p-2">02 BNG</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2">13/11</td>
                <td className="p-2">Sân bay Nội Bài</td>
                <td className="p-2">Bay Hà Nội - Rio</td>
                <td className="p-2">02 BNG, KGVH, Nghệ thuật, LSR</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2">14/11</td>
                <td className="p-2">Dựng KGVH (cả ngày)</td>
                <td className="p-2">
                  <ul style={{ listStyleType: "initial", paddingLeft: 20 }}>
                    <li> - Setup KGVH, Khu vực ẩm thực và Sân khấu</li>
                    <li> - Chuẩn bị thực phẩm cho ẩm thực</li>
                    <li> - Tập luyện cho Chương trình NT</li>
                  </ul>
                </td>
                <td className="p-2">BNG, KGVH</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2">15/11</td>
                <td className="p-2">Mở cửa rộng rãi đón khách 1 phần Không Gian Văn hóa (09:00 - 16:00)</td>
                <td className="p-2">
                  <p>1. Không gian Văn hóa: </p>
                  <ul style={{ listStyleType: "inherit", paddingLeft: 20, marginLeft: 10 }}>
                    <li> Triển lãm ảnh “Sắc màu văn hóa Việt Nam” và các Di sản tại Việt Nam được UNESCO công nhận;</li>
                    <li> Trưng bày bộ tranh 54 dân tộc Việt Nam; </li>
                    <li> Triển lãm tranh sơn mài “Lan tỏa sắc màu truyền thống” và tương tác với nghệ nhân.</li>
                    <li> Giới thiệu và tương tác tranh Đông Hồ; </li>
                    <li> Tương tác làm TÒ HE - Trò chơi dân gian Việt Nam;</li>
                    <li> Biểu diễn Múa rối nước;</li>
                  </ul>
                  <p>2. Trải nghiệm mặc trang phục Việt và chụp ảnh lưu niệm tại góc văn hóa làng quê Việt Nam</p>
                  <p>3. Biểu diễn và giới thiệu nhạc cụ dân tộc </p>
                  <p>4. Biểu diễn múa rồng và võ thuật.</p>
                </td>
                <td className="p-2">BNG, KGVH, Nghệ thuật, LSR</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2" rowSpan={2}>
                  16/11
                </td>
                <td className="p-2">Mở cửa rộng rãi đón khách 1 phần Không Gian Văn hóa (09:00 - 16:00)</td>
                <td className="p-2">
                  <p>1. Không gian Văn hóa:</p>
                  <ul style={{ listStyleType: "inherit", paddingLeft: 20, marginLeft: 10 }}>
                    <li>Triển lãm ảnh “Sắc màu văn hóa Việt Nam” và các Di sản tại Việt Nam được UNESCO công nhận;</li>
                    <li>Trưng bày bộ tranh 54 dân tộc Việt Nam; </li>
                    <li>Triển lãm tranh sơn mài “Lan tỏa sắc màu truyền thống” và tương tác với nghệ nhân.</li>
                    <li>Giới thiệu và tương tác tranh Đông Hồ; </li>
                    <li>Tương tác làm TÒ HE - Trò chơi dân gian Việt Nam;</li>
                    <li>Biểu diễn Múa rối nước;</li>
                  </ul>
                  <p>2. Trải nghiệm mặc trang phục Việt và chụp ảnh lưu niệm tại góc văn hóa làng quê Việt Nam</p>
                  <p>3. Biểu diễn và giới thiệu nhạc cụ dân tộc.</p>
                  <p>4. Biểu diễn múa rồng và võ thuật.</p>
                </td>
                <td className="p-2">BNG, KGVH, Nghệ thuật, LSR</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2">Tổng duyệt Chương trình Biểu diễn nghệ thuật</td>
                <td className="p-2"></td>
                <td className="p-2">BNG, Nghệ Thuật, LSR</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2">17/11</td>
                <td className="p-2">Khai trương triển lãm tranh 35 năm Quan hệ Việt Nam - Bra-xin</td>
                <td className="p-2">
                  <p>Dự kiến theo lịch trình của LĐCC</p>
                  <ul style={{ listStyleType: "none", paddingLeft: 20 }}>
                    <li>- Múa rồng/ lân sư chào đón đoàn LĐCC tại đường vào.</li>
                    <li>- Lễ Cắt băng khai trương Triển lãm ảnh 35 năm thiết lập quan hệ Ngoại giao Việt Nam – Bra-xin; </li>
                    <li>- LĐCC thăm khu vực Không gian Văn hóa Việt Nam.</li>
                    <li>- LĐCC tham dự Chương trình Biểu diễn Nghệ thuật Kỷ niệm 35 năm quan hệ Việt Nam - Bra-xin.</li>
                  </ul>
                  <i>(Lịch trình cụ thể sẽ update khi có thông tin chính thức)</i>
                </td>
                <td>BNG, KGVH, Nghệ thuật, LSR</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2">18/11</td>
                <td className="p-2">Dọn dẹp đóng gói đồ đạc tại Quỹ thiên văn</td>
                <td className="p-2">Dọn dẹp 1 phần KGVH/ khu vực biểu diễn nghệ thuật, đóng gói các vật dụng mang về VN</td>
                <td className="p-2">BNG, KGVH, Nghệ thuật, LSR</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2">19/11</td>
                <td className="p-2">Đoàn rời Rio</td>
                <td className="p-2">Có mặt tại sân bay Rio về Hà Nội</td>
                <td className="p-2">BNG, KGVH, Nghệ thuật, LSR</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2">20/11</td>
                <td className="p-2">Đoàn có mặt tại Hà Nội</td>
                <td className="p-2"></td>
                <td className="p-2"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-20 font-bold text-5xl text-center mb-10" style={{ fontFamily: "Philosopher", color: "#151748" }}>
          Tin tức cập nhật
        </p>
        <p className="text-center">Đang cập nhật</p>
        <div className="grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3 ">
          {[].map((item) => (
            <div className="" style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1))" }}>
              <img className="w-full h-52 object-cover rounded-tl-xl rounded-tr-xl" src={`/images/${item.img}`} />
              <div className="p-5 h-48">
                <p className="line-clamp-3 text-black font-bold text-xl">{item.title}</p>
                <p className="line-clamp-3 text-sm mt-2">{item.description}</p>
              </div>
              <div className="text-center text-red-600 py-3 font-bold text-sm flex justify-center items-center gap-2" style={{ borderTop: "1px solid #eee" }}>
                Xem thêm <img className="h-3" src="/images/arrow-red.svg" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-20 font-bold text-5xl text-center mb-10" style={{ fontFamily: "Philosopher", color: "#151748" }}>
        Hình ảnh sự kiện
      </p>
      <p className="text-center">Đang cập nhật</p>
      <div className="flex gap-4 flex-wrap px-4 mb-20">
        {[].map((arr) => (
          <div style={{ flex: 1, minWidth: 300 }} className="flex flex-col gap-4">
            {arr.map((i) => (
              <img className="w-full" src={`/images/${i}`} />
            ))}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default NgayVietNamOBrazil;
