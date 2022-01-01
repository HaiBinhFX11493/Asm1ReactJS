import React from "react";
function ThemNv() {
	return (
		<div className="Border-ThemNv">
			<h2>Thêm Nhân Viên</h2>
			<div className="Content-ThemNv"><p>Tên</p>
				<input type="text" />
			</div>
			<div className="Content-ThemNv">
				<p>Ngày sinh</p>
				<input type="date" />
			</div>
			<div className="Content-ThemNv">
				<p>Ngày vào công ty</p>
				<input type="date" />
			</div>
			<div className="Content-ThemNv">
				<p>Phòng ban</p>
				<input type="text" />
			</div>
			<div className="Content-ThemNv">
				<p>Hệ số lương</p>
				<input type="number" />
			</div>
			<div className="Content-ThemNv">
				<p>Số ngày nghỉ còn lại</p>
				<input type="text" />
			</div>
			<div  className="Content-ThemNv">
				<p>Sô ngày đã làm thêm</p>
				<input type="text" />
			</div>
		</div>

	)
}
export default ThemNv