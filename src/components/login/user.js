// ■---- login\user.js
export const userList = [
    {
        userId: 'thao.km',
        name: 'Khổng Minh Thảo',
        authority: 'admin', // full quyền
        password: 'abc13579'
    },
    {
        userId: 'tung.nt5',
        name: 'Nguyễn Thanh Tùng',
        authority: 'moderator', // full quyền trừ thêm/ xóa tài khoản
        password: 'abc'
    },
    {
        userId: 'admin',
        name: 'Khổng Minh Thảo',
        authority: 'emp', // chỉ sử dụng, xem thông tin bản thân & thông tin chung
        password: 'abc'
    },
    {
        userId: 'system',
        name: 'Khổng Minh Thảo',
        authority: 'manager', // thêm quyền xem report, download list mass
        password: 'abc'
    }
]